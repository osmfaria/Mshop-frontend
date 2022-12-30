import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { getSession, useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { RequireAuthentication } from '../hoc/RequireAuthentication'
import { User, UserProfileProp } from '../interfaces/userInterface'
import { motorsApi } from '../services/api'
import * as yup from 'yup'
import { Form, Formik, FormikProps } from 'formik'
import { Container } from '../styles/register'
import FormikControl from '../components/Forms/Control'
import Button from '../components/Button'
import { ProfileProps } from '../interfaces/formsInterface'
import { useRouter } from 'next/router'
import FocusError from '../components/Forms/FocusError'
import { getDirtyValues } from '../functions/objectHandler'

function Profile({ user }: UserProfileProp) {
  const [accountType, setAccountType] = useState<string>('BUYER')
  const router = useRouter()
  const { data: session } = useSession()

  const initialValues = {
    name: user.name,
    email: user.email,
    cpf: user.cpf,
    phone: user.phone,
    birthdate: user.birthdate || '',
    description: user.description || '',
    address: {
      cep: user.Address.cep,
      address: user.Address.address,
      city: user.Address.city,
      state: user.Address.state,
      number: user.Address.number,
      complement: user.Address.complement || '',
    },
    account_type: 'BUYER',
  }

  const validationSchema = yup.object({
    name: yup.string().max(30).min(3),
    email: yup.string().email('invalid email.').max(30),
    cpf: yup
      .string()
      .max(14)
      .matches(
        /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
        'invalid format, example: 000.000.000-00'
      ),
    phone: yup.string().max(15),
    birthdate: yup.date().test((value: Date | undefined): boolean => {
      return value! < new Date()
    }),
    description: yup.string().max(200),
    address: yup.object({
      cep: yup.string().max(10),
      address: yup.string().max(50),
      city: yup.string().max(20),
      state: yup.string().max(2),
      number: yup.string().max(8),
      complement: yup.string().max(15),
    }),
  })

  const onSubmit = (values: ProfileProps): void => {
    const data = getDirtyValues(values, initialValues)

    motorsApi
      .patch(`/users/${user.id}`, data, {
        headers: {
          Authorization: `Bearer ${session!.user!.accessToken}`,
        },
      })
      .then(() => {
        toast.success('Account updated!', {
          position: toast.POSITION.TOP_CENTER,
        })
        router.push('/dashboard')
      })
      .catch((err) => {
        toast.error(
          err.response.data.message ||
            'Something went wrong :(, try again later...',
          {
            position: toast.POSITION.TOP_CENTER,
          }
        )
      })
  }

  const selectAccount = (
    formik: FormikProps<ProfileProps>,
    type: string
  ): void => {
    formik.setFieldValue('account_type', type)
    setAccountType(type)
  }

  return (
    <Container>
      <div className='panel'>
        <h2 className='panel-title'>Profile</h2>
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
                    isProfile
                  />
                  <FormikControl
                    control='input'
                    type='email'
                    label='Email'
                    name='email'
                    isProfile
                  />
                  <FormikControl
                    control='input'
                    type='text'
                    label='CPF'
                    name='cpf'
                    placeholder='000.000.000-00'
                    isProfile
                  />
                  <FormikControl
                    control='input'
                    type='text'
                    label='Phone number'
                    name='phone'
                    placeholder='(000) 000-0000'
                    isProfile
                  />
                  <FormikControl
                    control='input'
                    type='date'
                    label='Birthdate'
                    name='birthdate'
                    placeholder=''
                    isProfile
                  />
                  <FormikControl
                    control='textarea'
                    type='text'
                    label='Description'
                    name='description'
                    isProfile
                  />
                  <h3 className='panel-subtitle'>Address</h3>
                  <FormikControl
                    control='input'
                    type='text'
                    label='Zip code'
                    name='address.cep'
                    isProfile
                  />
                  <div className='panel-grouped-input'>
                    <FormikControl
                      control='input'
                      type='text'
                      label='State'
                      name='address.state'
                      isProfile
                    />
                    <FormikControl
                      control='input'
                      type='text'
                      label='City'
                      name='address.city'
                      isProfile
                    />
                  </div>
                  <FormikControl
                    control='input'
                    type='text'
                    label='Street'
                    name='address.address'
                    placeholder=''
                    isProfile
                  />
                  <div className='panel-grouped-input'>
                    <FormikControl
                      control='input'
                      type='text'
                      label='Number'
                      name='address.number'
                      isProfile
                    />
                    <FormikControl
                      control='input'
                      type='text'
                      label='Complement'
                      name='address.complement'
                      isProfile
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
                  <Button
                    size='bg'
                    design={`${
                      formik.isValid && formik.dirty ? 'brand1' : 'disable'
                    }`}
                    type='submit'
                    disabled={formik.isValid && !formik.dirty}
                  >
                    Update profile
                  </Button>
                  <FocusError />
                </Form>
              )
            }}
          </Formik>
        </div>
      </div>
    </Container>
  )
}

export default Profile

export const getServerSideProps: GetServerSideProps = RequireAuthentication(
  async (ctx: GetServerSidePropsContext) => {
    const session = await getSession(ctx)

    const user: User = await motorsApi
      .get(`/users/${session!.user.id}`, {
        headers: { Authorization: `Bearer ${session!.user.accessToken}` },
      })
      .then((res) => res.data)
      .catch((_) => {
        toast.error('Something went wrong :(, try again later...', {
          position: toast.POSITION.TOP_CENTER,
        })
      })

    if (!user) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      }
    }

    return {
      props: { user },
    }
  }
)
