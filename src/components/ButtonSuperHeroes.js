import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

const query = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const ButtonSuperHeroes = () => {
  const results = useQuery('button-heroes', query, {enabled:false})

  let content;
  if (results.isLoading) {
    content = <div>Loading ...</div>
  }
  else {
    if (results.isError) {
      content = <div>{results.error.message}</div>
    }
    else if (results.data) {
      content = results.data.data.map((hero) => {return <div key={hero.id}>{hero.name}</div>})
    }
  }
  return (
    <div>
      <div><button className='def' onClick={results.refetch}>Get data</button></div>
      <div>{content}</div>
    </div>
  )
}
