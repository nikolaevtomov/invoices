
import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { push } from 'react-router-redux';
import getInvoices from 'root/selectors/get-invoices';
import getSelectedInvoice from 'root/selectors/get-selected-invoice';
import getFilter from 'root/selectors/get-invoice-filter';
import { filterInvoiceBy } from 'root/actions';
import moment from 'moment';

import './_invoices.scss';

export const Invoices = ({ invoices, filter, handleFilter, push }) => {

  const filterOptions = [
    {value: true, name: 'Paid'},
    {value: false, name: 'Not Paid'}
  ];

  const handleOnClick = (id) => () => push(`/invoices/${id}`);

  const handleFilterChange = (e) => {
    handleFilter(e.target.value);
  };

  return (
    <div className={'invoices'}>
      <h2>Invoices</h2>

      <div className={'filter'}>
        <select className={'select'} onChange={handleFilterChange} value={filter.paid}>
          <option className={'select__opt'} value={''}>Filter by</option>
          {
            filterOptions.map((option, key) => {
              return (
                <option className={'select__opt'} value={option.value} key={key}>{option.name}</option>
              );
            })
          }
        </select>
      </div>

      <div className={'invoices'}>
        {
          invoices.reduce((acc, curr, index, array) => {
            if(filter.paid === '') {
              return array;
            } else if(curr.paid.toString() === filter.paid) {
              acc.push(curr);
            }
            return acc;
          },[]).map((invoice, key) =>
          <div
            className={'invoices__item'}
            key={key}>
            <div>Invoice Id: {invoice.id}</div>
            <div>Date: {moment(invoice.date).format('DD/MM/YYYY')}</div>
            <div>Description: {invoice.description}</div>
            <div>Amount: £{invoice.amount}</div>
            <div>Paid: {`${invoice.paid ? 'Yes' : 'No'}`}</div>
            <div
              onClick={handleOnClick(invoice.id)}
              className={'button'}>View / Edit</div>
          </div>)
        }
      </div>

      <div className={'button add'}>
        <Link to={'invoices/add'}>Add Invoice</Link>
      </div>

    </div>
  )
};

export default connect(
  (s) => ({
    invoices: getInvoices(s),
    filter: getFilter(s)
  }),
  {
    push,
    handleFilter: filterInvoiceBy
  }
)(Invoices);
