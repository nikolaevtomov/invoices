
import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import submissionStatus from 'root/selectors/get-invoice-submission-status';
import './style.scss'

export const InvoiceMessages = ({ submitting, isSubmitted: { submitted, failed }}) => {

  const classes = classNames({
    message: true,
    submitting,
    warning: failed,
    succeed: submitted
  });

  return (
    <div className={classes}>
      {
        `${(submitting) ?
        'Submitting...' :
        (submitted) ?
        'Invoice submission succeed!' :
        (failed) ?
        'Invoice submission failed!' : '' }`
      }
    </div>
  )
}

export default connect(
  (s) => ({
    isSubmitted: submissionStatus(s)
  })
)(InvoiceMessages);
