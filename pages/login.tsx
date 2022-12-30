import { Formik, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'
import React, { ReactElement } from 'react'
import FormikControl from '../components/Forms/Control'
import { Container } from '../styles/login'
import Button from '../components/Button'
import { LoginProps } from '../interfaces/formsInterface'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

export default function login(): ReactElement {
  const router = useRouter()

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = yup.object({
    email: yup
      .string()
      .email('invalid email.')
      .required('email is required.')
      .max(30),
    password: yup.string().required('password is required.'),
  })

  const onSubmit = async (
    formValues: LoginProps,
    formik: FormikHelpers<LoginProps>
  ) => {

    const res = await signIn('credentials', {
      redirect: false,
      email: formValues.email,
      password: formValues.password,
    })
    if (res!.ok) {
      router.push('/')
    } else {
      toast.error('incorrect email or password!', {
        position: toast.POSITION.TOP_CENTER,
      })
      formik.setErrors({
        email: 'incorrect email or password',
        password: 'incorrect email or password',
      })
    }
  }
  return (
    <Container>
      <div className='panel'>
        <h2 className='panel-title'>Login</h2>
        <div className='content'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(formValues, formik) => onSubmit(formValues, formik)}
            validateOnBlur={false}
          >
            <Form>
              <FormikControl
                control='input'
                type='email'
                label='Email'
                name='email'
              />
              <FormikControl
                control='input'
                type='password'
                label='Password'
                name='password'
              />

              <Button size='bg' design='brand1' type='submit'>
                Login
              </Button>
              <h2 className='decorated'>
                <span>or</span>
              </h2>
              <Button
                size='bg'
                design='outline2'
                type='button'
                onClick={() => router.push('/register')}
              >
                Register
              </Button>
            </Form>
          </Formik>
        </div>
      </div>
    </Container>
  )
}
