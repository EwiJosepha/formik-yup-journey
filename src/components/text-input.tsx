import React from 'react';
import { Field } from 'formik';

interface TextInputProps {
  name: string;
  label: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const { name, label, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} />
    </div>
  );
}

export default TextInput;
