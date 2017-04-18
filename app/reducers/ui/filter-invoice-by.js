
import {
  FILTER_INVOICE_BY
} from 'root/actions';

const initialState = {
  paid: ''
};

export default function(state = initialState, { type, value }) {

  switch(type) {

  case FILTER_INVOICE_BY:
    return {
      paid: value
    };

  case '@@router/LOCATION_CHANGE':
    return initialState;

  default:
    return state;
  }
};
