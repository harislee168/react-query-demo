import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'


const superQuery = () => {
  return axios.get('http://localhost:4000/superheroes')
}
export const RQSuperHeroePage = () => {
  const results = useQuery('super-heroes', superQuery)
  let content;
  if (results.isLoading) {
    content = <h2>Loading...</h2>
  }
  else {
    if (results.isError) {
      content = <div>{results.error.message}</div>
    }
    else if (results.data.data.length) {
      content = results.data.data.map((hero) => {return <div key={hero.id}>{hero.name}</div>})
    }
  }

  return (
    <div>{content}</div>
  )
}
