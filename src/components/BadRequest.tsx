import React from 'react'
import { Button, makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    opacity: 0.8,
    zIndex: 1,
  },
  paragraph: {
    textAlign: 'center',
    color: theme.palette.text.primary,
    fontSize: 30,
  },
  link: {
    textDecoration: 'none',
  },
}))

export const BadRequestModal = ({
  message = 'Something went wrong',
}: {
  message?: string
}) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <p className={classes.paragraph}>{message}</p>
      <Link to={'/'} className={classes.link}>
        <Button variant="contained" color="primary">
          To Main Page
        </Button>
      </Link>
    </div>
  )
}
