import Button from '../../Button'
import UserIcon from '../../UserIcon'
import { Container } from './styles'
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { useSession } from 'next-auth/react'
import { motorsApi } from '../../../services/api'
import { PostCommentProp } from '../../../interfaces/cardInterface'
import { useState } from 'react'
import useDidUpdate from '@rooks/use-did-update'
import { Oval, ThreeDots } from 'react-loader-spinner'

const PostCommentCard = ({
  publicationId,
  refetch,
  isFetching,
}: PostCommentProp) => {
  const { data: session } = useSession()
  const  [isLoading, setIsLoading] = useState(false)

  useDidUpdate(() => {
    if (!isFetching) setIsLoading(false)
  }, [isFetching])

  const initialValues: yup.InferType<typeof validationSchema> = {
    description: '',
  }

  const validationSchema = yup.object({
    description: yup.string().required('You must write a comment.'),
  })

  const onSubmit = (
    values: yup.InferType<typeof validationSchema>,
    onSubmitProps: FormikHelpers<typeof values>
  ) => {
    setIsLoading(true)
    motorsApi
      .post(`/comments/${publicationId}`, values, {
        headers: { Authorization: `Bearer ${session!.user!.accessToken}` },
      })
      .then((_) => refetch())
    onSubmitProps.resetForm()
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validateOnBlur={false}
      >
        {(formik) => (
          <Form>
            <div className='box-user'>
              {!!session ? (
                <>
                  <UserIcon name={session!.user!.name} />
                  <p className='username'>{session!.user!.name}</p>
                </>
              ) : (
                <p>You must be logged in to post a comment</p>
              )}
            </div>
            <div className='box-input'>
              <div>
                <Field
                  as='textarea'
                  name='description'
                  id='description'
                  className='comment'
                  placeholder='Write your commnet here...'
                  maxLength='200'
                />
              </div>
            </div>

            <ErrorMessage name='description'>
              {(children) => <div className='error'>{children}</div>}
            </ErrorMessage>

            <Button
              size='bg'
              design={`${!!session ? 'brand1' : 'disable'}`}
              type='submit'
              disabled={!formik.isValid || !session}
            >
              {isLoading ? (
                <Oval
                  visible={true}
                  height='30'
                  width='30'
                  color='#fff'
                  secondaryColor='#868E96'
                  strokeWidth={4}
                  strokeWidthSecondary={4}
                />
              ) : (
                'Post'
              )}
            </Button>

            <div className='box-sugestions'>
              <span
                className='choices'
                onClick={() => formik.setValues({ description: 'I like it!' })}
              >
                I liked it!
              </span>
              <span
                className='choices'
                onClick={() => formik.setValues({ description: 'Amazing!' })}
              >
                Amazing!
              </span>
              <span
                className='choices'
                onClick={() =>
                  formik.setValues({
                    description: 'I will recommend to my friends!',
                  })
                }
              >
                I will recommend to my friends!
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default PostCommentCard
