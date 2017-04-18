
import { takeLatest } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { postNewInvoice } from 'root/services/api';

import {
  NEW_INVOICE_SUBMIT_BEGIN,
  newInvoiceSubmitSucceed,
  newInvoiceSubmitFailed,
  addInvoiceToState
} from 'root/actions';

export default function* watchAddInvoice() {
  yield takeLatest(NEW_INVOICE_SUBMIT_BEGIN, function* watch() {
    try {
      const { values } = yield select(s => s.form['AddInvoiceForm']);

      const result = yield call(postNewInvoice, {
        date: values.date,
        description: values.description,
        amount: values.amount,
        paid: values.paid
      });

      if(result) {
        yield put(newInvoiceSubmitSucceed());
        yield put(addInvoiceToState(result));
        // yield put(push('/invoices'));

      } else {
        yield put(newInvoiceSubmitFailed());
      }
    }
    catch (error) {
      yield put(newInvoiceSubmitFailed());
    }
  });
}
