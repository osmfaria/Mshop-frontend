import { Formik, Form, FormikProps } from 'formik'
import * as yup from 'yup'
import React, { ReactElement, useState } from 'react'
import FormikControl from '../components/Forms/Control'
import { Container } from '../styles/register'
import Button from '../components/Button'
import { motorsApi } from '../services/api'
import { RegisterProps } from '../interfaces/formsInterface'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

export default function register(): ReactElement {
  const [accountType, setAccountType] = useState<string>('BUYER')
  const router = useRouter()

  const initialValues = {
    name: '',
    email: '',
    cpf: '',
    phone: '',
    birthdate: '',
    description: '',
    address: {
      cep: '',
      address: '',
      city: '',
      state: '',
      number: '',
      complement: '',
    },
    password: '',
    confirmPassword: '',
    account_type: 'BUYER',
  }

  const validationSchema = yup.object({
    name: yup.string().required('name is required.').max(30).min(3),
    email: yup
      .string()
      .email('invalid email.')
      .required('email is required.')
      .max(30),
    cpf: yup
      .string()
      .required('cpf is required.')
      .max(14)
      .matches(
        /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
        'invalid format, example: 000.000.000-00'
      ),
    phone: yup.string().required('phone number is required.').max(15),
    birthdate: yup
      .date()
      .test((value: Date | undefined): boolean => {
        return value! < new Date()
      })
      .required('birthdate is required.'),
    description: yup.string().max(200),
    address: yup.object({
      cep: yup.string().max(10).required('zip code is required.'),
      address: yup.string().max(50).required('street is required.'),
      city: yup.string().max(20).required('city is required.'),
      state: yup.string().max(2).required('state is required.'),
      number: yup.string().max(8).required('number is reuired.'),
      complement: yup.string().max(15),
    }),
    password: yup.string().max(20).min(8).required('password is required.'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })

  const onSubmit = (values: RegisterProps): void => {
    motorsApi
      .post('/users', values)
      .then(() => {
        toast.success('Account created!', {
          position: toast.POSITION.TOP_CENTER,
        })
        router.push("/login")
      })
      .catch(() => {
        toast.error('Something went wrong :(', {
          position: toast.POSITION.TOP_CENTER,
        })
      })
  }

  const selectAccount = (
    formik: FormikProps<RegisterProps>,
    type: string
  ): void => {
    formik.setFieldValue('account_type', type)
    setAccountType(type)
  }

  return (
    <Container>
      <div className='panel'>
        <h2 className='panel-title'>Register</h2>
        <div className='content'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              return (
                <Form>
                  <h3 className='panel-subtitle'>Personal information</h3>
                  <FormikControl
                    control='input'
                    type='text'
                    label='Name'
                    name='name'
                  />
                  <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    name='email'
                  />
                  <FormikControl
                    control='input'
                    type='text'
                    label='CPF'
                    name='cpf'
                    placeholder='000.000.000-00'
                  />
                  <FormikControl
                    control='input'
                    type='text'
                    label='Phone number'
                    name='phone'
                    placeholder='(000) 000-0000'
                  />
                  <FormikControl
                    control='input'
                    type='date'
                    label='Birthdate'
                    name='birthdate'
                    placeholder=''
                  />
                  <FormikControl
                    control='textarea'
                    type='text'
                    label='Description'
                    name='description'
                  />
                  <h3 className='panel-subtitle'>Address</h3>
                  <FormikControl
                    control='input'
                    type='text'
                    label='Zip code'
                    name='address.cep'
                  />
                  <div className='panel-grouped-input'>
                    <FormikControl
                      control='input'
                      type='text'
                      label='State'
                      name='address.state'
                    />
                    <FormikControl
                      control='input'
                      type='text'
                      label='City'
                      name='address.city'
                    />
                  </div>
                  <FormikControl
                    control='input'
                    type='text'
                    label='Street'
                    name='address.address'
                    placeholder=''
                  />
                  <div className='panel-grouped-input'>
                    <FormikControl
                      control='input'
                      type='text'
                      label='Number'
                      name='address.number'
                    />
                    <FormikControl
                      control='input'
                      type='text'
                      label='Complement'
                      name='address.complement'
                    />
                  </div>
                  <h3 className='panel-subtitle'>Account type</h3>
                  <div className='panel-grouped-input'>
                    <Button
                      size='bg'
                      design={`${
                        accountType === 'BUYER' ? 'brand1' : 'outline2'
                      }`}
                      type='button'
                      onClick={() => selectAccount(formik, 'BUYER')}
                    >
                      Buyer
                    </Button>
                    <Button
                      size='bg'
                      design={`${
                        accountType === 'SELLER' ? 'brand1' : 'outline2'
                      }`}
                      type='button'
                      onClick={() => selectAccount(formik, 'SELLER')}
                    >
                      Seller
                    </Button>
                  </div>
                  <FormikControl
                    control='input'
                    type='password'
                    label='Password'
                    name='password'
                  />
                  <FormikControl
                    control='input'
                    type='password'
                    label='Confirm password'
                    name='confirmPassword'
                  />
                  <Button size='bg' design={`${formik.isValid ? 'brand1' : 'disable'}`} type='submit' disabled={!formik.isValid}>
                    Register
                  </Button>
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </Container>
  )
}
