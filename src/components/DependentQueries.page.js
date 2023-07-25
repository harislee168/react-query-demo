import {useQuery} from 'react-query'
import axios from 'axios'

const userQuery = (queryKey) => {
  const email = queryKey.queryKey[1]
  return axios.get(`http://localhost:4000/users/${email}`)
}

const channelQuery = (queryKey) => {
  const channelId = queryKey.queryKey[1]
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentQueriesPage = ({email}) => {
  const userResult = useQuery(['user-query', email], userQuery)
  const channelId = userResult.data?.data.channelId
  const channelResult = useQuery(['channel-query', channelId], channelQuery, {enabled:!!channelId})
  return (
    <div>DependentQueries.page</div>
  )
}
