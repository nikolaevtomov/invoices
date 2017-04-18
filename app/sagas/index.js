
import { takeLatest } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';
import { getInvoices } from 'root/services/api';
import watchAddInvoice from 'root/sagas/add-invoice';
import watchEditInvoice from 'root/sagas/edit-invoice';

import {
  APP_LOADING_STARTED,
  appLoadingSucceed,
  appLoadingFailed,
  fetchInvoicesSucceed
} from 'root/actions';

export function* initializeAppState() {
  try {

    const [ invoices ] = yield Promise.all([
      getInvoices()
    ]);

    if(invoices) {
      yield put(fetchInvoicesSucceed(invoices));
      yield put(appLoadingSucceed());

    } else {
      yield put(appLoadingFailed());
    }

  } catch (error) {
    console.log(error);
    yield put(appLoadingFailed());
  }
}

export function* watchInitializeAppState() {
  yield* takeLatest(APP_LOADING_STARTED, initializeAppState);
}

export default function* startForeman() {
  yield fork(watchInitializeAppState);
  yield fork(watchAddInvoice);
  yield fork(watchEditInvoice);
}
