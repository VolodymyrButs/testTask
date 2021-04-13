import React, { ChangeEvent } from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import ArrowBackIos from '@material-ui/icons/ArrowBackIos'
import { Link, useLocation, useHistory } from 'react-router-dom'

import { ThemeSwitcher } from 'components/ThemeSwitcher'
import { ViewSwitcher } from 'components/ViewSwitcher'

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 5,
    height: 48,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
  navWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
  },
}))

function useQueryParam() {
  return new URLSearchParams(useLocation().search)
}

export const UsersHeader = ({ pageCount }: { pageCount: number }) => {
  const classes = useStyles()
  let query = useQueryParam()
  const page = query.get('page')
  const pageNumber = Number(page) || 1
  const history = useHistory()
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    history.push(`./?page=${value}`)
  }
  return (
    <div className={classes.header}>
      <ViewSwitcher />
      <Pagination
        className={classes.navWrapper}
        color="primary"
        size="small"
        count={pageCount}
        page={pageNumber}
        onChange={handleChange}
      />
      <ThemeSwitcher />
    </div>
  )
}

export const UserHeader = () => {
  const classes = useStyles()
  const location = useLocation<{ page: number }>()

  return (
    <div className={classes.header}>
      <Link
        to={location.state ? `/?page=${location.state.page}` : `/?page=1`}
        className={classes.navLink}
      >
        <ArrowBackIos />
        BACK
      </Link>
      <ThemeSwitcher />
    </div>
  )
}
