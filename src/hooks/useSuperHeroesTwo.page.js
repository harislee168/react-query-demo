import {useQuery, useQueryClient, useMutation} from 'react-query'
import { request } from '../utils/axios-utils'
import axios from 'axios'

const query = ({queryKey}) => {
  const id = queryKey[1]
  return axios.get(`http://localhost:4000/superheroes/${id}`)
}

const addHeroQuery = (hero) => {
  // return axios.post('http://localhost:4000/superheroes', hero)
  return request({url:'/superheroes', method:'post', data:hero})
}

export const useSuperHeroesTwoPage = (id) => {
  const queryClient = useQueryClient()
  return useQuery(['super-hero', id], query, {
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

export const useAddHero = () => {
  const queryClient = useQueryClient()
  return useMutation(addHeroQuery, {
    onSuccess: (newData) => {
      // queryClient.invalidateQueries('super-heroes')
      queryClient.setQueryData('super-heroes', (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, newData.data]
        }
      })
    }
  })
}
