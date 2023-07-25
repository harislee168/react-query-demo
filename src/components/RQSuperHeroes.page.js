import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'


const superQuery = () => {
  return axios.get('http://localhost:4000/superheroes')
}
export const RQSuperHeroePage = () => {
  let refetchInt = 30000
  const onSuccess = () => {
    console.log('Success calling the API')
    if (results.data) {
      if (results.data.data.length === 4) {
        console.log('Stop the refecth')
        refetchInt = false
      }
    }
  }
  const onError = () => {
    console.log('Error when calling the API')
  }

  const results = useQuery('super-heroes', superQuery, {refetchInterval:refetchInt,
    onSuccess:onSuccess, onError:onError})

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
