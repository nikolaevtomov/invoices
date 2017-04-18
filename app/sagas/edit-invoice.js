
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { postEditedInvoice } from 'root/services/api';

import {
  EDIT_INVOICE_SUBMIT_BEGIN,
  editInvoiceSubmitSucceed,
  editInvoiceSubmitFailed,
  addInvoiceToState
} from 'root/actions';

export default function* watchEditInvoice() {
  yield takeLatest(EDIT_INVOICE_SUBMIT_BEGIN, function* watch() {
    try {
      const { values } = yield select(s => s.form['Edit-Invoice-Form']);

      const result = yield call(postEditedInvoice, values.id, values);

      if(result) {
        yield put(editInvoiceSubmitSucceed());
        yield put(addInvoiceToState(values));

      } else {
        yield put(editInvoiceSubmitFailed());
      }
    }
    catch (error) {
      yield put(editInvoiceSubmitFailed());
    }
  });
}
