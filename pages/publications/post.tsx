import { FieldArray, Form, Formik, FormikProps } from 'formik'
import React, { ReactElement, useState } from 'react'
import Button from '../../components/Button'
import { Container } from '../../styles/post'
import * as yup from 'yup'
import FormikControl from '../../components/Forms/Control'
import { Image, IPost } from '../../interfaces/postInterface'
import { useSession } from 'next-auth/react'
import { motorsApi } from '../../services/api'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { BsTrash } from 'react-icons/bs'

function Post(): ReactElement {
  const [publicationType, setPublicationType] = useState<string>('sale')
  const [vehicleType, setVehicleType] = useState<string>('CAR')

  const { data: session } = useSession()
  const router = useRouter()

  const selectPublication = (type: string): void => {
    setPublicationType(type)
  }

  const initialValues = {
    type: 'used',
    title: '',
    year: '',
    milieage: '',
    price: '',
    description: '',
    vehicle_type: 'CAR',
    images: [{ link: '' }, { link: '' }],
  }

  const validationSchema = yup.object({
    title: yup.string().required('title is required.').max(60).min(3),
    year: yup
      .string()
      .required('year is required.')
      .test(
        'high',
        'Invalid year',
        (val) =>
          new Date(val!) <= new Date() &&
          new Date(val!) >= new Date('1900-01-01')
      )
      .max(4, 'must contain 4 digits')
      .min(4, 'must contain 4 digits'),
    milieage: yup
      .number()
      .required('milieage is required.')
      .test('greater 0', 'invalid number.', (val) => val! >= 0)
      .integer(),
    price: yup.string().required('price is required.'),
    description: yup.string().required().max(300),
    images: yup
      .array()
      .of(
        yup.object().shape({
          link: yup.string().required('image required.'),
        })
      )
      .required(),
  })

  const onSubmit = async (values: IPost) => {
    await motorsApi
      .post(`/publications`, values, {
        headers: { Authorization: `Bearer ${session!.user!.accessToken}` },
      })
      .then((_) => {
        toast.success('Publication created!', {
          position: toast.POSITION.TOP_CENTER,
        })
        router.push('/dashboard')
      })
      .catch((_) => {
        toast.error('Something went wrong :(, try again later...', {
          position: toast.POSITION.TOP_CENTER,
        })
        router.push('/dashboard')
      })
  }

  const selectVehicleType = (
    formik: FormikProps<IPost>,
    type: string
  ): void => {
    formik.setFieldValue('vehicle_type', type)
    setVehicleType(type)
  }

  return (
    <Container>
      <div className='panel'>
        <h2 className='panel-title'>Create Publication</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <div className='btn-section'>
                  <h3>Publication type</h3>

                  <div className='btn-section-btns'>
                    <Button
                      size='bg'
                      design={`${
                        publicationType === 'sale' ? 'brand1' : 'outline2'
                      }`}
                      type='button'
                      onClick={() => selectPublication('sale')}
                    >
                      Sale
                    </Button>
                    <Button
                      size='bg'
                      design={`${
                        publicationType === 'auction' ? 'brand1' : 'outline2'
                      }`}
                      type='button'
                      onClick={() => selectPublication('auction')}
                    >
                      Auction
                    </Button>
                  </div>
                </div>
                <h3 className='panel-subtitle'>Vehicle information</h3>
                <FormikControl
                  control='input'
                  type='text'
                  label='Title'
                  name='title'
                />

                <div className='input-group'>
                  <div className='input-group-static'>
                    <FormikControl
                      control='input'
                      type='text'
                      label='Year'
                      name='year'
                    />
                    <FormikControl
                      control='input'
                      type='number'
                      label='Milieage'
                      name='milieage'
                    />
                  </div>
                  <FormikControl
                    control='currency'
                    label='Price'
                    name='price'
                    type='text'
                    formik={formik}
                  />
                </div>

                <FormikControl
                  control='textarea'
                  label='Description'
                  name='description'
                />

                <div className='btn-section'>
                  <h3>Vehicle type</h3>

                  <div className='btn-section-btns'>
                    <Button
                      size='bg'
                      design={`${
                        vehicleType === 'CAR' ? 'brand1' : 'outline2'
                      }`}
                      type='button'
                      onClick={() => selectVehicleType(formik, 'CAR')}
                    >
                      Car
                    </Button>
                    <Button
                      size='bg'
                      design={`${
                        vehicleType === 'MOTORCYCLE' ? 'brand1' : 'outline2'
                      }`}
                      type='button'
                      onClick={() => selectVehicleType(formik, 'MOTORCYCLE')}
                    >
                      Motorcycle
                    </Button>
                  </div>
                </div>

                <div className='field-array'>
                  <FieldArray name='images'>
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps
                      const { values } = form
                      const { images } = values

                      return (
                        <>
                          <div>
                            {images.map((images: Image, index: number) => (
                              <div className='image-control' key={index}>
                                <div key={index}>
                                  <FormikControl
                                    control='input'
                                    type='text'
                                    label={
                                      index === 0
                                        ? 'Cover image'
                                        : `Gallery image`
                                    }
                                    name={`images[${index}].link`}
                                    placeholder='insert image URL'
                                  />
                                </div>

                                {index > 1 && (
                                  <button
                                    className='image-control-trash'
                                    type='button'
                                    onClick={() => {
                                      remove(index)
                                    }}
                                  >
                                    <BsTrash size={18} />
                                  </button>
                                )}
                              </div>
                            ))}
                          </div>
                          {images.length <= 10 && (
                            <Button
                              size='bg'
                              design='brandOpacity'
                              type='button'
                              onClick={() => push('')}
                            >
                              Add more pictures
                            </Button>
                          )}
                        </>
                      )
                    }}
                  </FieldArray>
                </div>

                <div className='submission-section'>
                  <Button
                    size='bg'
                    design={`${formik.isValid ? 'brand1' : 'disable'}`}
                    type='submit'
                    disabled={!formik.isValid}
                  >
                    Post
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>
      </div>
    </Container>
  )
}

export default Post
