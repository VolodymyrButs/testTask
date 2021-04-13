import React, { useEffect } from 'react'
import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { UsersList } from 'components/UserListsTypes'
import { UsersHeader } from 'components/Headers'
import { LoadingModal } from 'components/Loading'
import { useLocation } from 'react-router-dom'
import { BadRequestModal } from 'components/BadRequest'

const useStyles = makeStyles({
  container: {
    padding: 0,
  },
})

function useQueryParam() {
  return new URLSearchParams(useLocation().search)
}

async function fetchUsers(pageNumber: number) {
  const { data } = await axios.get(
    `https://reqres.in/api/users?page=${pageNumber}`
  )
  return data
}

const Users = () => {
  let query = useQueryParam()
  const page = query.get('page') || 1
  const pageNumber = Number(page)
  const queryClient = useQueryClient()
  const classes = useStyles()

  const { status, data } = useQuery(
    ['users', pageNumber],
    () => fetchUsers(pageNumber),
    {
      staleTime: 50000,
    }
  )

  useEffect(() => {
    if (pageNumber < data?.total_pages) {
      queryClient.prefetchQuery(['users', pageNumber + 1], () =>
        fetchUsers(pageNumber + 1)
      )
    }
  }, [data, pageNumber, queryClient])

  return (
    <Container maxWidth="md" className={classes.container}>
      <UsersHeader pageCount={Number(data?.total_pages)} />
      {status === 'loading' && !data && <LoadingModal />}
      {(status === 'error' || isNaN(pageNumber)) && <BadRequestModal />}
      {status === 'success' && data.data.length === 0 && (
        <BadRequestModal message={'No data on this page'} />
      )}

      {status === 'success' && !isNaN(pageNumber) && <UsersList data={data} />}
    </Container>
  )
}

export default Users
