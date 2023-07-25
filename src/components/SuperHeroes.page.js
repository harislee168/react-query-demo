import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const objectData = {
    loading: true,
    data: [],
    error: ''
  }
  const [apiData, setApiData] = useState(objectData)
  useEffect(() => {
    axios.get('http://localhost:4000/superheroes')
      .then((response) => {
        setApiData({loading: false, data: response.data, error:''})
      })
      .catch((error) => {setApiData({loading: false, data: [], error: error.message})})
  }, [])

  let content;
  if (apiData.loading) {
    content = <div>Loading Api Data</div>
  }
  else {
    if(apiData.data.length) {
      content = apiData.data.map(dat => {return <div key={dat.id}>{dat.name}</div>})
    } else if (apiData.error) {
      content = <div>{apiData.error}</div>
    }
    else {
      content = <div>No data available</div>;
    }
  }
  return (
    <div>
        {content}
        {/* {apiData.loading?<div>Loading Api Data</div>:null}
        {apiData.data.length?apiData.data.map(dat => {return <div key={dat.id}>{dat.name}</div>}):null} */}
    </div>

  )
}
