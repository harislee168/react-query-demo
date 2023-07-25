import {useQuery} from 'react-query'

export const useSuperHeroesData = (key, query, enabled=true) => {
  return (
    useQuery(key, query, {enabled:enabled})
  )
}
