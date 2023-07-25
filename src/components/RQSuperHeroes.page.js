import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'


const superQuery = () => {
  return axios.get('http://localhost:4000/superheroes')
}
export const RQSuperHeroePage = () => {
  const results = useQuery('super-heroes', superQuery)

  let content;
  console.log(results)
  if (results.isLoading) {
    content = <h2>Loading...</h2>
  }
  else {
    if (results.data.data.length) {
      content = results.data.data.map(data => {return <div key={data.id}>{data.name}</div>})
    }
    else if (results.error) {
      content = results.error.message
    }
    else {
      return <div>No data is available</div>
    }
  }
  return (
    <div>{content}</div>
  )
}
