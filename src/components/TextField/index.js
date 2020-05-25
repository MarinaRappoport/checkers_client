import React from 'react';
import { FilledInput } from '@material-ui/core';

const TextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <FilledInput
        label={label}
        autoComplete='off'
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

export default TextField;