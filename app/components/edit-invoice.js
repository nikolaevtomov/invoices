
import React from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import moment from 'moment';
import getSelectedInvoice from 'root/selectors/get-selected-invoice';
import invoiceEditMode from 'root/selectors/get-invoice-editing';
import { isInvoiceEditing, editInvoiceSubmitBegin } from 'root/actions';
import inputField from 'root/components/input-field';
import datePicker from 'root/components/date-picker';
import checkbox from 'root/components/checkbox';
import InvoiceMessages from 'root/components/invoice-messages';

export const EditInvoice = props => {

  const {
    invoice,
    handleSubmit,
    submitting,
    pristine,
    reset,
    editMode,
    toggleEditMode,
    sendEditedInvoice
    } = props;

  const toggle = () => toggleEditMode();

  const submitEditForm = () => {
    toggle();
    sendEditedInvoice();
    reset('Edit-Invoice-Form');
  }

  return (
    <form className={'form'}>
      <h2>View / Edit Invoice</h2>
      {
        invoice.map((item, key) =>
        <div key={key}>

          <div className={'field'}>
            <div className={'label'}>Invoice Id: {item.id}</div>
          </div>

          {!editMode ?
           <div>Date: {moment(item.date).format('DD/MM/YYYY')}</div> :
           <Field name={'date'} type={'text'} component={datePicker} label={'Date'} />}

          {!editMode ?
            <div>Description: {item.description}</div> :
            <Field name={'description'} type={'text'} component={inputField} label={'Description'} />}

          {!editMode ?
            <div>Amount: £{item.amount}</div> :
            <Field name={'amount'} type={'number'} component={inputField} label={'Amount'} />}

          {!editMode ?
            <div>Paid: {`${item.paid ? 'Yes' : 'No'}`}</div> :
            <Field name={'paid'} component={checkbox} label={'Paid?'} />}

        </div>)
      }
      <div className={'button-group'}>

        <button onClick={toggle} className={'button edit'} type="button"> {`${editMode ? 'Cancel' : 'Edit'}`}</button>
        {(editMode) ?
          <button className={'button add'} type="button" onClick={handleSubmit(submitEditForm)} disabled={pristine || submitting}>Submit</button> : ''}

        {editMode ?
          <button className={'button clear'} type="button" disabled={pristine || submitting} onClick={reset}>Reset Values</button> : ''}

      </div>

      <InvoiceMessages submitting={submitting} />

    </form>
  );
};

const validate = values => {
  let errors = {};

  if (!values.date) {
    errors.date = '* Required';
  }
  if (!values.description) {
    errors.description = '* Required';
  } else if (values.description.length < 5) {
    errors.description = '* Must be 5 characters or more';
  }
  if (!values.amount) {
    errors.amount = '* Required';
  } else if (!/^\d+$/.test(values.amount) || values.amount == 0) {
    errors.amount = '* Must be a positive number';
  }
  return errors;
}

export const ConnectedEditInvoice = reduxForm(
  {
    form: 'Edit-Invoice-Form',
    validate
  }
)(EditInvoice);

export default connect(
  (s, p) => ({
    invoice: getSelectedInvoice(s, p),
    editMode: invoiceEditMode(s),
    initialValues: s.invoices[p.params.id]
  }),
  {
    toggleEditMode: isInvoiceEditing,
    sendEditedInvoice: editInvoiceSubmitBegin
  }
)(ConnectedEditInvoice);
