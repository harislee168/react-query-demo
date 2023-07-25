import React from 'react'
import {useQueries} from 'react-query'
import axios from 'axios'

const query = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const DynamicParallelPage = ({heroIds}) => {
  const results = useQueries(
    heroIds.map((heroId) => {
      return {
        queryKey: ['super-heroes', heroId],
        queryFn: () => query(heroId)
      }
    })
  )
  console.log(results)
  return (
    <div>DynamicParallel.page</div>
  )
}
