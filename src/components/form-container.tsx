import { Formik , Form} from 'formik'
import * as Yup from 'yup'

function FormContainer() {
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
