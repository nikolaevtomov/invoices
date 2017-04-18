import React from 'react';

export default ({ input, label, type, meta: { touched, error } }) => (
  <div className={'field'}>
    <label className={'label'}>{label}</label>
    <input className={'input'} {...input} placeholder={label} type={type} />
    {touched && error && <div className={'error'}>{error}</div>}
  </div>
);
