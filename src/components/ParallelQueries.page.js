import React from 'react'
import {useQuery} from 'react-query'
import axios from 'axios'

const heroQuery = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const friendQuery = () => {
  return axios.get('http://localhost:4000/friends')
}

export const ParallelQueriesPage = () => {
  const heroResult = useQuery('heroResult', heroQuery)
  const friendResult = useQuery('friendResult', friendQuery)

  let heroContent, friendContent

  if (!heroResult.isLoading) {
    if (heroResult.data) {
      heroContent = heroResult.data.data.map((hero) => {return <div key={hero.id}>{hero.name}</div>})
    }
  }

  if (!friendResult.isLoading) {
    if(friendResult.data) {
      friendContent = friendResult.data.data.map((friend) => {return <div key={friend.id}>{friend.name}</div>})
    }
  }

  return (
    <div>
      <div>{heroContent}</div>
      <div>{friendContent}</div>
    </div>
  )
}
