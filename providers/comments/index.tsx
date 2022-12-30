import { createContext, useContext } from 'react'
import { toast } from 'react-toastify'
import {
  CommentsTypeProviderProp,
  ChildrenProp,
} from '../../interfaces/contextInterface'
import { motorsApi } from '../../services/api'
import {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query'

const CommentsContext = createContext<CommentsTypeProviderProp>(
  {} as CommentsTypeProviderProp
)

export const CommentProvider = ({ children }: ChildrenProp) => {
  const deleteComment = async (
    id: string,
    token: string,
    refetch: <TPageData>(
      options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<InfiniteData<any>, unknown>>
  ): Promise<void> => {
    motorsApi
      .delete(`/comments/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success('Comment deleted!', {
          position: toast.POSITION.TOP_CENTER,
        })
        refetch()
      })
      .catch((_) =>
        toast.error('Something went wrong :(, try again later...', {
          position: toast.POSITION.TOP_CENTER,
        })
      )
  }

  const editComment = async (
    id: string,
    token: string,
    data: { description: string },
    refetch: <TPageData>(
      options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
    ) => Promise<QueryObserverResult<InfiniteData<any>, unknown>>
  ): Promise<void> => {
    motorsApi
      .patch(`/comments/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        toast.success('Comment updated!', {
          position: toast.POSITION.TOP_CENTER,
        })
        refetch()
      })
      .catch((_) =>
        toast.error('Something went wrong :(, try again later...', {
          position: toast.POSITION.TOP_CENTER,
        })
      )
  }

  return (
    <CommentsContext.Provider value={{ deleteComment, editComment }}>
      {children}
    </CommentsContext.Provider>
  )
}

export const useComments = () => useContext(CommentsContext)
