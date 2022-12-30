import { Field, ErrorMessage, FieldProps } from 'formik'
import { InputProps } from '../../../interfaces/formsInterface'
import { Container } from '../Input/styles'
import CurrencyInput from 'react-currency-input-field'

const Currency = ({ label, name, formik, ...rest }: InputProps) => {
  return (
    <Container>
      <div className='label-container'>
        <label htmlFor={name}>{label}</label>
      </div>

      <Field id={name} name={name} {...rest}>
        {({ field, meta: { error, touched } }: FieldProps) => {
          return (
            <CurrencyInput
              {...rest}
              id={name}
              name={name}
              decimalsLimit={2}
              decimalScale={2}
              prefix='$'
              onValueChange={(value) => {
                formik!.setFieldValue(name, value)
              }}
              onBlur={formik!.handleBlur}
              className={`${error && touched ? 'input-error' : ''}`}
              value={field.value}
            />
          )
        }}
      </Field>
      <ErrorMessage name={name}>
        {(children) => <div className='error'>{children}</div>}
      </ErrorMessage>
    </Container>
  )
}

export default Currency
