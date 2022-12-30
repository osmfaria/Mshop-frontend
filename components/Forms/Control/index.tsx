import { FormikControlProps } from '../../../interfaces/formsInterface'
import Currency from '../Currency'
import Input from '../Input'
import Textarea from '../Textarea'

const FormikControl = ({ control, name, label, ...rest }: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input name={name} label={label} {...rest} />
    case 'textarea':
      return <Textarea name={name} label={label} {...rest} />
    case 'currency':
      return <Currency name={name} label={label} {...rest} />
    default:
      return null
  }
}

export default FormikControl
