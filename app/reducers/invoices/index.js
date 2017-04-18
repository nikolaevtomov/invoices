
import {
  FETCH_INVOICES_SUCCEED,
  ADD_INVOICE_TO_STATE
} from 'root/actions';

const initialState = {};

const loadInvoicesData = value => value;

export default function(state = initialState, { type, value }) {

  switch(type) {

  case FETCH_INVOICES_SUCCEED:
    return {
      ...state,
      ...loadInvoicesData(value)
    };

  case ADD_INVOICE_TO_STATE:
    return {
      ...state,
      [value.id]: {
        ...value
      }
    };

  default:
    return state;
  }
};
