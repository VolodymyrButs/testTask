import React from 'react'
import { makeStyles, Grid, Container } from '@material-ui/core'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { UserHeader } from 'components/Headers'
import { LoadingModal } from 'components/Loading'
import { BadRequestModal } from 'components/BadRequest'

async function fetchUser(id: string) {
  const { data } = await axios.get(`https://reqres.in/api/users/${id}`)
  return data.data
}

const useUserStyles = makeStyles((theme) => ({
  container: {
    margin: '0px auto',
    padding: 0,
  },
  root: {
    maxHeight: 'calc(100vh - 45px)',
    overflowY: 'scroll',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5,
    padding: 5,
  },

  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontStyle: 'italic',
  },
  avatar: {
    width: 300,
    objectFit: 'contain',
    maxWidth: '100%',
    margin: '10px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
  },
  paragraph: {
    color: theme.palette.text.primary,
    margin: '3px',
    maxWidth: 280,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontWeight: 500,
  },
}))

const User = () => {
  const { id } = useParams<{ id: string }>()

  const { data, status } = useQuery(['user', id], () => fetchUser(id), {
    staleTime: 50000,
  })
  const classes = useUserStyles()

  return (
    <Container maxWidth="md" className={classes.container}>
      <UserHeader />
      {status === 'loading' && !data && <LoadingModal />}
      {status === 'error' && (
        <BadRequestModal message={`Can't find user with id "${id}"`} />
      )}
      {status === 'success' && (
        <>
          <Grid item className={classes.root}>
            <div className={classes.item}>
              <img
                src={data.avatar}
                alt="user_avatar"
                className={classes.avatar}
              />
              <div className={classes.info}>
                <p className={classes.paragraph}>
                  Name: {data.first_name} {data.last_name}
                </p>
                <p className={classes.paragraph}>
                  Email:{' '}
                  <a
                    className={classes.link}
                    href={`mailto:${data.email}`}
                    target="blank"
                  >
                    {data.email}
                  </a>
                </p>
              </div>
            </div>
          </Grid>
        </>
      )}
    </Container>
  )
}

export default User
