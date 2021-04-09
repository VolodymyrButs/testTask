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

async function fetchUsers(ID: number) {
    const { data } = await axios.get(`https://reqres.in/api/users?page=${ID}`)
    return data
}

const Users = () => {
    let query = useQueryParam()
    const page = query.get('page')
    const ID = Number(page)
    const queryClient = useQueryClient()
    const classes = useStyles()

    const { status, data } = useQuery(['users', ID], () => fetchUsers(ID), {
        staleTime: 50000,
    })
    useEffect(() => {
        if (ID < data?.total_pages) {
            queryClient.prefetchQuery(['users', ID + 1], () =>
                fetchUsers(ID + 1)
            )
        }
    }, [data, ID, queryClient])

    return (
        <Container maxWidth="md" className={classes.container}>
            <UsersHeader pageCount={Number(data?.total_pages)} />
            {status === 'loading' && !data && <LoadingModal />}
            {(status === 'error' || isNaN(ID)) && <BadRequestModal />}
            {status === 'success' && data.data.length === 0 && (
                <BadRequestModal />
            )}

            {status === 'success' && !isNaN(ID) && <UsersList data={data} />}
        </Container>
    )
}

export default Users
