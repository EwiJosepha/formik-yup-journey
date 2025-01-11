import React from 'react'

interface Props {
  control: string
}

const FormControl: React.FC<Props> = (props) => {
  const { control } = props
  switch (control) {
    case "textInput": { }
    case 'textarea': { }
    case 'select': { }
    case 'radio': { }
    default: return null
  }
}

export default FormControl
