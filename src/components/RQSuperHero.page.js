import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

export const RQSuperHeroPage = () => {
  const {id} = useParams()

  const query = () => {
    return axios.get(`http://localhost:4000/superheroes/${id}`)
  }

  const results = useSuperHeroesData(`individual-hero-${id}`, query)
  let content
  if (results.isLoading) {
    content = <div>Loading ...</div>
  }
  else {
    if (results.isError) {
      content = <div>{results.error.message}</div>
    }
    else if (results.data) {
      content = <div>{results.data.data.name} - {results.data.data.alterEgo}</div>
    }
    else {
      content = <div>No data is available</div>
    }
  }
  return (
    <div>{content}</div>
  )
}
