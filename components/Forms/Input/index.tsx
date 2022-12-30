import { Field, ErrorMessage, FieldProps } from 'formik'
import { InputProps } from '../../../interfaces/formsInterface'
import { Container } from './styles'
import { BsPencil } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'

const Input = ({ label, name, isProfile = false, ...rest }: InputProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)

  const handleClick = (): void => {
    setIsEditing(!isEditing)
  }

  return (
    <Container>
      <OutsideClickHandler
        onOutsideClick={() => {
          if (isEditing) setIsEditing(false)
        }}
      >
        <div className='label-container'>
          <label htmlFor={name}>{label}</label>
          {isProfile && (
            <IconContext.Provider value={{ className: 'edit-icon' }}>
              <BsPencil onClick={handleClick} />
            </IconContext.Provider>
          )}
        </div>
        <Field id={name} name={name} {...rest}>
          {({ field, meta: { error, touched } }: FieldProps) => (
            <input
              {...rest}
              {...field}
              className={`${error && touched ? 'input-error' : ''}`}
              disabled={isProfile && !isEditing}
              ref={(input) => input && isEditing && input.focus()}
            />
          )}
        </Field>
        <ErrorMessage name={name}>
          {(children) => <div className='error'>{children}</div>}
        </ErrorMessage>
      </OutsideClickHandler>
    </Container>
  )
}

export default Input
