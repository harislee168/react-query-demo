import React from 'react'
import axios from 'axios'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

const query = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const ButtonSuperHeroes = () => {
  const onSuccess = () => {
    console.log('Success calling the API')
  }
  const onError = () => {
    console.log('Error when calling the API')
  }
  const enabled = false
  const results = useSuperHeroesData(query, onSuccess, onError, enabled)

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
