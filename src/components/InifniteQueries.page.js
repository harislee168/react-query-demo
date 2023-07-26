import React from 'react'
import {useInfiniteQuery} from 'react-query'
import axios from 'axios'

const query = ({pageParam = 1}) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

export const InifniteQueriesPage = () => {
  const result  = useInfiniteQuery(['colors'], query, {
    getNextPageParam: (_lastPage, pages) => {
      if(pages.length < 5) {
        return pages.length + 1
      } else {
        return undefined
      }
    }
  })

  let content
  if (result.isLoading) {
    content = <div>Loading...</div>
  } else {
    if (result.isError) {
      content = <div>{result.error.message}</div>
    }
    else if (result.data) {
      content = result.data.pages.map((group, index) => {
        return <React.Fragment key={index}>
          {group.data.map((color) => {return <div key={color.id}>{color.color}</div>})}
        </React.Fragment>
      })
    }
  }

  return (
    <div>
      <h2>{content}</h2>
      <div>
        <button disabled={!result.hasNextPage} onClick={result.fetchNextPage}>Next page</button>
      </div>
      <div>{result.isFetching && result.isFetchingNextPage? 'Loading...': null}</div>
    </div>
  )
}
