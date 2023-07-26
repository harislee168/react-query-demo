import {useQuery} from 'react-query'
import axios from 'axios'
import {useState} from 'react'

const query = ({queryKey}) => {
  const pageNumber = queryKey[1]
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageNumber}`)
}

export const PaginatedPage = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const result  = useQuery(['colors', pageNumber], query)
  let content
  if (result.isLoading) {
    content = <div>Loading...</div>
  } else {
    if (result.isError) {
      content = <div>{result.error.message}</div>
    } else if (result.data) {
      content = result.data.data.map((color) => {return <div key={color.id}>{color.color}</div>})
    }
  }
  const pageNumberHandler = (number) => {
    setPageNumber((prevPageNumber) => {return prevPageNumber + number}, console.log('pageNumber', pageNumber))
  }
  return (
    <div>
      <h2>{content}</h2>
      <div>
        <button onClick={() => {pageNumberHandler(1)}} disabled={pageNumber === 5}>Next page</button>
        <button onClick={() => {pageNumberHandler(-1)}} disabled={pageNumber === 1}>Prev page</button>
      </div>
    </div>
  )
}
