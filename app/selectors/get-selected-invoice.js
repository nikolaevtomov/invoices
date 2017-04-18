import { createSelector } from 'reselect';

import getInvoices from 'root/selectors/get-invoices';

const getPropsId = (state, props) => {
    return props.params.id;
}

export default createSelector(
  [ getInvoices, getPropsId ],
  (invoices, id) => {
  return Object.keys(invoices)
    .map(key => invoices[key])
    .reduce((acc, curr) => {
      (curr.id == id) && acc.push(curr);
      return acc;
    },[]);
  }
);
