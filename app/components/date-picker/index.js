import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import style from 'root/components/date-picker/style';

export default ({ input, label, meta: { touched, error }}) => (
  <DatePicker
    className={'field'}
    hintText={'Date'}
    maxDate={new Date(new Date() - 24*60*60*1000)}
    onChange={(e, val) => (input.onChange(val))}
    underlineStyle={style.underline}
    inputStyle={style.input}
    textFieldStyle={style.text}
    hintStyle={style.hint}
    label={label}
    underlineShow={false}
    errorStyle={style.error}
    errorText={touched && error} />
);
