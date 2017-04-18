
const typeValueAction = type => value => ({ type, value });
/*
 * App actions
 */
export const APP_LOADING = 'APP_LOADING';
export const appLoading = typeValueAction(APP_LOADING);

export const APP_LOADING_STARTED = 'APP_LOADING_STARTED';
export const appLoadingStarted = typeValueAction(APP_LOADING_STARTED);

export const APP_LOADING_FAILED = 'APP_LOADING_FAILED';
export const appLoadingFailed = typeValueAction(APP_LOADING_FAILED);

export const APP_LOADING_SUCCEED = 'APP_LOADING_SUCCEED';
export const appLoadingSucceed = typeValueAction(APP_LOADING_SUCCEED);
/*
 * UI actions
 */
export const FILTER_INVOICE_BY = 'FILTER_INVOICE_BY';
export const filterInvoiceBy = typeValueAction(FILTER_INVOICE_BY);

export const IS_INVOICE_EDITING = 'IS_INVOICE_EDITING';
export const isInvoiceEditing = typeValueAction(IS_INVOICE_EDITING);

export const CLEAR_FORM = 'CLEAR_FORM';
export const clearForm = typeValueAction(CLEAR_FORM);
/*
 * Invoice actions
 */
export const FETCH_INVOICES_SUCCEED = 'FETCH_INVOICES_SUCCEED';
export const fetchInvoicesSucceed = typeValueAction(FETCH_INVOICES_SUCCEED);

export const NEW_INVOICE_SUBMIT_BEGIN = 'NEW_INVOICE_SUBMIT_BEGIN';
export const newInvoiceSubmitBegin = typeValueAction(NEW_INVOICE_SUBMIT_BEGIN);

export const NEW_INVOICE_SUBMIT_SUCCEED = 'NEW_INVOICE_SUBMIT_SUCCEED';
export const newInvoiceSubmitSucceed = typeValueAction(NEW_INVOICE_SUBMIT_SUCCEED);

export const NEW_INVOICE_SUBMIT_FAILED = 'NEW_INVOICE_SUBMIT_FAILED';
export const newInvoiceSubmitFailed = typeValueAction(NEW_INVOICE_SUBMIT_FAILED);

export const EDIT_INVOICE_SUBMIT_BEGIN = 'EDIT_INVOICE_SUBMIT_BEGIN';
export const editInvoiceSubmitBegin = typeValueAction(EDIT_INVOICE_SUBMIT_BEGIN);

export const EDIT_INVOICE_SUBMIT_SUCCEED = 'EDIT_INVOICE_SUBMIT_SUCCEED';
export const editInvoiceSubmitSucceed = typeValueAction(EDIT_INVOICE_SUBMIT_SUCCEED);

export const EDIT_INVOICE_SUBMIT_FAILED = 'EDIT_INVOICE_SUBMIT_FAILED';
export const editInvoiceSubmitFailed = typeValueAction(EDIT_INVOICE_SUBMIT_FAILED);

export const ADD_INVOICE_TO_STATE = 'ADD_INVOICE_TO_STATE';
export const addInvoiceToState = typeValueAction(ADD_INVOICE_TO_STATE);
