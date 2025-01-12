import { Formik , Form} from 'formik'
import * as Yup from 'yup'

function FormContainer() {
  const dropdownOptions =
  [
    {key: 'select an option', value : ''},
    { key: 'otion1', value: 'option1' },
    { key: 'option2', value: 'option2' },
    { key: 'option3', value: 'option3' },
    { key: 'option4', value: 'option4' },
  ]
  const initialValues = {}
  const validationSchema = Yup.object({})
  const onSubmit = (values: any) => {
    console.log(values);
    }


  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        <Form></Form>
      }
    </Formik>
  )
}

export default FormContainer
