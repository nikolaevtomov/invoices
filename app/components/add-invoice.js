import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import datePicker from 'root/components/date-picker';
import inputField from 'root/components/input-field';
import checkbox from 'root/components/checkbox';
import { newInvoiceSubmitBegin } from 'root/actions';
import InvoiceMessages from 'root/components/invoice-messages';

export const AddInvoiceComponent = props => {

  const {
    handleSubmit,
    submitting,
    pristine,
    reset,
    sendNewInvoice
    } = props;

  const submitForm = () => {
    sendNewInvoice();
    reset('AddInvoiceForm');
  }

  return (
    <form className={'form'}>

      <h2>Add Invoice</h2>

      <Field name={'date'} type={'text'} component={datePicker} label={'Date'} />
      <Field name={'description'} type={'text'} component={inputField} label={'Description'} />
      <Field name={'amount'} type={'number'} component={inputField} label={'Amount'} />
      <Field name={'paid'} component={checkbox} label={'Paid?'} />

      <div className={'button-group'}>
        <button className={'button add'} type="button" onClick={handleSubmit(submitForm)} disabled={submitting}>Add Invoice</button>
        <button className={'button clear'} type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>

      <InvoiceMessages submitting={submitting} />

    </form>
  )
}

const validate = values => {
  let errors = {};

  if (!values.date) {
    errors.date = '* Required';
  }
  if (!values.description) {
    errors.description = '* Required';
  } else if (values.description.length < 5) {
    errors.description = '* Must be 5 characters or more';
  }
  if (!values.amount) {
    errors.amount = '* Required';
  } else if (!/^\d+$/.test(values.amount) || values.amount == 0) {
    errors.amount = '* Must be a positive number';
  }
  return errors;
}

export const ConnectedAddInvoiceComponent = reduxForm({
  form: 'AddInvoiceForm',
  validate,
  initialValues: {
    paid: false
  }
})(AddInvoiceComponent)

export default connect(
  null,
  {
    sendNewInvoice: newInvoiceSubmitBegin
  }
)(ConnectedAddInvoiceComponent);
