import React, { useContext } from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { AppContext } from 'contextProvider'

import { Link } from 'react-router-dom'

interface User {
    id: string
    /* eslint-disable-next-line camelcase */
    first_name: string
    /* eslint-disable-next-line camelcase */
    last_name: string
    avatar: string
    email: string
}

const useStylesList = makeStyles((theme) => ({
    root: {
        maxHeight: 'calc(100vh - 65px)',
        overflowY: 'scroll',
    },
    link: {
        textDecoration: 'none',
    },
    item: {
        display: 'flex',
        margin: '5px',
        padding: '16px',
        boxShadow: 'inset 0 0 10px #888',
        '&:hover': { boxShadow: 'inset 0 0 20px #888' },
    },
    itemIcon: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 5,
        padding: 5,
        boxShadow: 'inset 0 0 10px #888',
        '&:hover': { boxShadow: 'inset 0 0 30px #888' },
    },
    avatar: {
        height: '40px',
        width: '40px',
        objectFit: 'contain',
        marginRight: '10px',
        [theme.breakpoints.up('sm')]: {
            height: '50px',
            width: '50px',
        },
    },
    avatarIcon: {
        height: 200,
        objectFit: 'contain',
        maxWidth: '100%',
        margin: '10px',
    },
    info: {
        color: 'black',
        display: 'inline-block',
    },
    infoIcon: {
        display: 'flex',
        flexDirection: 'column',
        color: 'black',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
    },
    p: {
        padding: '0 3px',
        margin: 0,
        marginBottom: 8,
        width: 240,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: theme.palette.text.primary,
        [theme.breakpoints.up('sm')]: {
            width: 280,
        },
    },
}))

export const UsersList = ({
    data,
}: {
    data: { data: User[]; page: number }
}) => {
    const theme = useTheme()
    const desktop = useMediaQuery(theme.breakpoints.up('md'))
    const { viewType } = useContext(AppContext)
    const classes = useStylesList()
    return (
        <Grid container className={classes.root}>
            {data.data.map((user) => {
                return (
                    <Grid item xs={desktop ? 6 : 12} key={user.id}>
                        <Link
                            to={{
                                pathname: `/user/${19}`,
                                state: { page: data.page },
                            }}
                            className={classes.link}
                        >
                            {!viewType ? (
                                <div className={classes.itemIcon}>
                                    <img
                                        src={user.avatar}
                                        alt="user_avatar"
                                        className={classes.avatarIcon}
                                    />{' '}
                                    <div className={classes.infoIcon}>
                                        <p className={classes.p}>
                                            Name: {user.first_name}{' '}
                                            {user.last_name}
                                        </p>
                                        <p className={classes.p}>
                                            Email: {user.email}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <div className={classes.item}>
                                    <img
                                        src={user.avatar}
                                        alt="user_avatar"
                                        className={classes.avatar}
                                    />{' '}
                                    <div className={classes.info}>
                                        <p className={classes.p}>
                                            Name: {user.first_name}{' '}
                                            {user.last_name}
                                        </p>
                                        <p className={classes.p}>
                                            Email: {user.email}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    )
}
