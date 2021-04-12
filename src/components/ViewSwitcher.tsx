import React, { useContext } from 'react'
import { IconButton, Switch, withStyles } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { Apps, Menu } from '@material-ui/icons'

import { AppContext } from 'contextProvider'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'

const Icon = withStyles((theme) => ({
    root: {
        padding: '12px 5px',
        [theme.breakpoints.up('sm')]: {
            padding: 12,
        },
    },
}))(
    ({
        classes,
        onClick,
        ...props
    }: {
        classes: ClassNameMap<'root'>
        onClick: () => void
    }) => {
        return (
            <IconButton className={classes.root} onClick={onClick} {...props} />
        )
    }
)

const switchStyles = makeStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        color: theme.palette.common.white,
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            backgroundColor: theme.palette.grey[400],
            '& + $track': {
                opacity: 1,
                color: theme.palette.common.white,
                backgroundColor: theme.palette.grey[400],
            },
        },
        '&$focusVisible $thumb': {
            color: theme.palette.grey[400],
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `2px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[400],
        color: theme.palette.common.white,
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
        boxSizing: 'border-box',
    },
    checked: {},
    focusVisible: {},
    s: {
        display: 'flex',
        alignContent: 'center',
    },
}))

export const CustomSwitchView = () => {
    const { viewType, setViewType } = useContext(AppContext)
    const changeViewType = () => setViewType(!viewType)
    const setViewTypeToIcons = () => setViewType(false)
    const setViewTypeToList = () => setViewType(true)
    const classes = switchStyles()
    return (
        <span>
            <Icon onClick={setViewTypeToIcons}>
                <Apps />
            </Icon>
            <span>
                <Switch
                    focusVisibleClassName={classes.focusVisible}
                    disableRipple
                    checked={viewType}
                    onChange={changeViewType}
                    classes={{
                        root: classes.root,
                        switchBase: classes.switchBase,
                        thumb: classes.thumb,
                        track: classes.track,
                        checked: classes.checked,
                    }}
                />
            </span>
            <Icon onClick={setViewTypeToList}>
                <Menu />
            </Icon>
        </span>
    )
}
