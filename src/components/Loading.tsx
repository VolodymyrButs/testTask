import React from 'react'
import { CircularProgress, withStyles } from '@material-ui/core'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'

const LoadingWrapper = withStyles((theme) => ({
    root: {
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.palette.background.default,
        opacity: 0.8,
        zIndex: 1,
    },
}))(({ classes, ...props }: { classes: ClassNameMap<'root'> }) => {
    return <div className={classes.root} {...props} />
})

export const LoadingModal = () => {
    return (
        <LoadingWrapper>
            <CircularProgress disableShrink />
        </LoadingWrapper>
    )
}
