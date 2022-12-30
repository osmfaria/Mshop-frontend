import {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query'

export interface CardProp {
  cardType: any
}

export interface PostCommentProp {
  publicationId: string
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<InfiniteData<any>, unknown>>
  isFetching: boolean
}
