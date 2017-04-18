
import {
  NEW_INVOICE_SUBMIT_SUCCEED,
  NEW_INVOICE_SUBMIT_FAILED,
  EDIT_INVOICE_SUBMIT_SUCCEED,
  EDIT_INVOICE_SUBMIT_FAILED
} from 'root/actions';

const initialState = {
  submitted: false,
  failed: false
};

export default function(state = initialState, { type, value }) {

  switch(type) {

  case NEW_INVOICE_SUBMIT_SUCCEED:
  case EDIT_INVOICE_SUBMIT_SUCCEED:
    return {
      submitted: true,
      failed: false
    };

  case NEW_INVOICE_SUBMIT_FAILED:
  case EDIT_INVOICE_SUBMIT_FAILED:
    return {
      submitted: false,
      failed: true
    };

  case '@@router/LOCATION_CHANGE':
    return initialState;

  default:
    return state;
  }
};
