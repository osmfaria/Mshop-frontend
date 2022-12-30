import { FieldArray, Form, Formik, FormikProps } from 'formik'
import React, { ReactElement, useState } from 'react'
import Button from '../../../components/Button'
import { Container, StyledModal } from '../../../styles/post'
import * as yup from 'yup'
import FormikControl from '../../../components/Forms/Control'
import { Image, IPost } from '../../../interfaces/postInterface'
import { useSession } from 'next-auth/react'
import { motorsApi } from '../../../services/api'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { RequireAuthentication } from '../../../hoc/RequireAuthentication'
import { CardProp } from '../../../interfaces/publicationsInterface'
import { BsTrash } from 'react-icons/bs'
import { usePublication } from '../../../providers/publications'
import ModalContainer from '../../../components/ModalContainer/Index'
import { MdClose } from 'react-icons/md'
import { oneYearAhead } from '../../../functions/year'

function Edit({ publication }: CardProp): ReactElement {
  const router = useRouter()

  const [publicationType, setPublicationType] = useState<string>('sale')
  const [vehicleType, setVehicleType] = useState<string>(
    publication.vehicle_type
  )
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [isActive, setIsActive] = useState<boolean>(publication.is_active)

  const { data: session } = useSession()

  const selectPublication = (type: string): void => {
    setPublicationType(type)
  }

  const { deletePublication, updatedPublication } = usePublication()

  const handleModal = (): void => {
    setIsModalOpen(!isModalOpen)
  }

  const handleDeleteImage = async (id: string): Promise<void | null> => {
    if (id === 'empty') {
      return null
    }

    await motorsApi
      .delete(`/images/${id}`, {
        headers: { Authorization: `Bearer ${session!.user!.accessToken}` },
      })
      .then((_) => {
        toast.success('Image deleted!', {
          position: toast.POSITION.TOP_CENTER,
        })
      })
      .catch((_) =>
        toast.error('Something went wrong :(, try again later...', {
          position: toast.POSITION.TOP_CENTER,
        })
      )
  }

  const handleDeletePublication = async (id: string): Promise<void> => {
    deletePublication(id, session!)
    router.push('/dashboard')
  }

  const initialValues = {
    type: 'used',
    title: publication.title,
    year: publication.year,
    milieage: publication.milieage,
    price: publication.price.toString(),
    description: publication.description,
    vehicle_type: publication.vehicle_type,
    images: publication.Image,
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
          new Date(val!) <= oneYearAhead(new Date()) &&
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
    updatedPublication(publication.id, session!, values)
    router.push('/dashboard')
  }

  const selectVehicleType = (formik: FormikProps<any>, type: string): void => {
    formik.setFieldValue('vehicle_type', type)
    setVehicleType(type)
  }

  const selectIsActive = (formik: FormikProps<any>, active: boolean): void => {
    formik.setFieldValue('is_active', active)
    setIsActive(active)
  }

  return (
    <Container>
      <div className='panel'>
        <h2 className='panel-title'>Edit Publication</h2>

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

                <div className='btn-section'>
                  <h3>Active</h3>

                  <div className='btn-section-btns'>
                    <Button
                      size='bg'
                      design={`${isActive ? 'brand1' : 'outline2'}`}
                      type='button'
                      onClick={() => selectIsActive(formik, true)}
                    >
                      Yes
                    </Button>
                    <Button
                      size='bg'
                      design={`${!isActive ? 'brand1' : 'outline2'}`}
                      type='button'
                      onClick={() => selectIsActive(formik, false)}
                    >
                      No
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
                            {images.map((image: Image, index: number) => (
                              <div className='image-control' key={index}>
                                <div>
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
                                      handleDeleteImage(image.id || 'empty')
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
                    design={`${formik.isValid ? 'success' : 'disable'}`}
                    type='submit'
                    disabled={!formik.isValid}
                  >
                    Confirm changes
                  </Button>

                  <Button
                    size='bg'
                    type='button'
                    design='alert'
                    onClick={handleModal}
                  >
                    Delete publication
                  </Button>
                </div>
              </Form>
            )
          }}
        </Formik>

        <ModalContainer isOpen={isModalOpen} onRequestClose={handleModal}>
          <StyledModal>
            <div className='box-title'>
              <h2>Exclude publication</h2>
              <button onClick={handleModal} className='close-btn'>
                <MdClose size={25} />
              </button>
            </div>
            <div className='box-body'>
              <p>
                This action cannot be undone. Are you sure you want to
                permanently delete this publication?
              </p>
            </div>
            <div className='box-footer'>
              <Button
                size='bg'
                design='alert'
                onClick={() => handleDeletePublication(publication.id)}
              >
                Yes, remove publication
              </Button>
              <Button size='bg' design='outline1' onClick={handleModal}>
                Cancel
              </Button>
            </div>
          </StyledModal>
        </ModalContainer>
      </div>
    </Container>
  )
}

export default Edit

export const getServerSideProps: GetServerSideProps = RequireAuthentication(
  async (ctx: GetServerSidePropsContext) => {
    const id = ctx.params?.id

    const publication: CardProp = await motorsApi
      .get(`/publications/${id}`)
      .then((res) => res.data)
      .catch((_) => {
        toast.error('Something went wrong :(, try again later...', {
          position: toast.POSITION.TOP_CENTER,
        })
      })

    if (!publication) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      }
    }

    return {
      props: { publication },
    }
  }
)
