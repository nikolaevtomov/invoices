import { IS_INVOICE_EDITING } from '../../actions';

export const initialState = false;

export default (state = initialState, { type, value }) => {

  switch (type) {

    case IS_INVOICE_EDITING:
      return !state;

    case '@@router/LOCATION_CHANGE':
      return initialState;

    default:
      return state;
  }
};
