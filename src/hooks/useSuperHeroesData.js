import {useQuery} from 'react-query'

export const useSuperHeroesData = (query, onSuccess, onError, enabled) => {
  return (
    useQuery('super-heroes', query, {onSuccess:onSuccess, onError:onError, enabled:enabled})
  )
}
