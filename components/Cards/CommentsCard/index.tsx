import { Fragment, ReactElement, useEffect, useState } from 'react'
import { Container, StyledTextarea } from './styles'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useInfiniteQuery } from 'react-query'
import { motorsApi } from '../../../services/api'
import { ThreeDots, Oval } from 'react-loader-spinner'
import { Comment } from '../../../interfaces/publicationsInterface'
import UserIcon from '../../UserIcon'
import TimeAgo from 'react-timeago'
import Image from 'next/image'
import PostCommentCard from '../PostCommentCard'
import { BsPencil, BsTrash } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import { useSession } from 'next-auth/react'
import { useComments } from '../../../providers/comments'
import useDidUpdate from '@rooks/use-did-update'

const CommentsCard = ({
  publicationId,
}: {
  publicationId: string
}): ReactElement => {
  const [isDeliting, setIsDeliting] = useState<string | null>(null)
  const [isEditing, setIsEditing] = useState<string | null>(null)
  const [commentInput, setCommentInput] = useState<string>('')
  const { data: session } = useSession()
  const { deleteComment, editComment } = useComments()
  const {
    data,
    status,
    fetchNextPage,
    hasNextPage,
    refetch,
    isFetching,
  } = useInfiniteQuery(
    'infiniteComments',
    async ({ pageParam = 1 }) =>
      await motorsApi
        .get(
          `/comments/publication/${publicationId}/?page=${pageParam}&limit=5`
        )
        .then((res) => res.data),
    {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.nextPage) {
          return pages.length + 1
        }
      },
    }
  )

  useDidUpdate(() => {
    if (!isFetching) {
      setIsEditing('')
      setIsDeliting('')
    }
  }, [isFetching])

  const handleDelete = async (id: string): Promise<void> => {
    setIsDeliting(id)
    deleteComment(id, session!.user!.accessToken, refetch)
  }

  const handleEditWindow = (id: string, comment: string): void => {
    setCommentInput(comment)
    setIsEditing(id)
  }

  const handleEdit = async (id: string): Promise<void> => {
    const data = { description: commentInput }
    editComment(id, session!.user!.accessToken, data, refetch)
  }

  return (
    <>
      <Container
        overflow={
          data!! && data.pages[0].results.length > 4 ? 'scroll' : 'hidden'
        }
      >
        <h6>Comments</h6>
        <div className='infinite' id='infinite'>
          {status === 'success' && data.pages[0].results.length > 0 && (
            <InfiniteScroll
              dataLength={data!.pages.length * 5}
              next={fetchNextPage}
              hasMore={hasNextPage || false}
              loader={
                <div className='loader'>
                  <ThreeDots
                    height={40}
                    width={40}
                    radius={5}
                    color='#4529E6'
                  />
                </div>
              }
              scrollableTarget='infinite'
            >
              <div className='comments-section'>
                {data?.pages.map((page, index) => (
                  <Fragment key={index}>
                    {page.results.map((comment: Comment) => (
                      <div key={comment.id}>
                        <div className='box-user'>
                          <UserIcon name={comment.user.name} />
                          <p className='username'>{comment.user.name}</p>
                          <Image
                            src='/ellipse.svg'
                            height={4}
                            width={4}
                            alt='dots'
                          />
                          <TimeAgo
                            date={comment.updatedAt}
                            className='timeago'
                          />

                          {session && comment.userId === session?.user.id && (
                            <div className='user-edit'>
                              <Image
                                src='/ellipse.svg'
                                height={4}
                                width={4}
                                alt='dots'
                              />
                              <BsPencil
                                size={15}
                                onClick={() =>
                                  handleEditWindow(
                                    comment.id,
                                    comment.description
                                  )
                                }
                              />
                              {isDeliting === comment.id ? (
                                <Oval
                                  visible={true}
                                  height='20'
                                  width='20'
                                  color='#212529'
                                  secondaryColor='#868E96'
                                />
                              ) : (
                                <BsTrash
                                  size={15}
                                  onClick={() => handleDelete(comment.id)}
                                />
                              )}
                            </div>
                          )}
                        </div>

                        {isEditing === comment.id ? (
                          <StyledTextarea>
                            <textarea
                              name='comment'
                              value={commentInput}
                              onChange={(e) => setCommentInput(e.target.value)}
                              className='comment-edit'
                              maxLength={200}
                            />
                            <div className='comment-control'>
                              {isFetching ? (
                                <Oval
                                  visible={true}
                                  height='20'
                                  width='20'
                                  color='#212529'
                                  secondaryColor='#868E96'
                                />
                              ) : (
                                <button onClick={() => handleEdit(comment.id)}>
                                  <IoMdSend size={20} />
                                </button>
                              )}

                              <button onClick={() => setIsEditing('')}>
                                Discard
                              </button>
                            </div>
                          </StyledTextarea>
                        ) : (
                          <div className='comment'>{comment.description}</div>
                        )}
                      </div>
                    ))}
                  </Fragment>
                ))}
              </div>
            </InfiniteScroll>
          )}
          {status === 'success' && data.pages[0].results.length === 0 && (
            <p>No comments for this post yet</p>
          )}
        </div>
      </Container>

      <PostCommentCard publicationId={publicationId} refetch={refetch} isFetching={isFetching}/>
    </>
  )
}

export default CommentsCard
