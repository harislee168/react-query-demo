import {useQuery, useQueryClient} from 'react-query'
import axios from 'axios'

const query = ({queryKey}) => {
  const id = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}

export const useSuperHeroesTwoPage = (id) => {
  const queryClient = useQueryClient()
  return useQuery('super-hero', query, {
    initialData: () => {
      const result = queryClient.getQueryData('super-heroes')?.data?.find((hero) => {return hero.id === parseInt(id)})
      if (result) {
        return {data:result}
      } else {
        return undefined
      }
    }
  })
}
