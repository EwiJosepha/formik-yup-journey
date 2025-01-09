import { Field, } from 'formik'

interface Props {
  name: string
  lable: string
}

function TextInput(props: Props) {
  const { name } = props
  return (
    <div>
      <Field name={name} id={name} />
    </div>
  )
}

export default TextInput
