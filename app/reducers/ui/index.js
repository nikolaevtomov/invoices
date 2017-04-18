
import { combineReducers } from 'redux';
import app from 'root/reducers/ui/app';
import filterBy from 'root/reducers/ui/filter-invoice-by';
import isInvoiceEditing from 'root/reducers/ui/is-invoice-editing';
import submissionStatus from 'root/reducers/ui/invoice-submission-status';

const uiReducer = combineReducers({
  app,
  filterBy,
  isInvoiceEditing,
  submissionStatus
});

export default uiReducer;
