import React from 'react'
import TextInput from './text-input'

interface Props {
  control: string
}

const FormControl: React.FC<Props> = (props) => {
  const { control } = props;

  switch (control) {
    case "textInput":
      return <TextInput name={''} label={''} />;
    default:
      return null;
  }
}


export default FormControl
