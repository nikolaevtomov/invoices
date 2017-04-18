import React from 'react';
import Checkbox from 'material-ui/Checkbox';

export default ({ input, label }) => (
  <Checkbox
    className={'field'}
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange} />
);
