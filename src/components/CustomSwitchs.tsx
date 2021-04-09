import React, { useContext } from 'react'
import { withStyles, Switch, IconButton } from '@material-ui/core'
import Brightness6 from '@material-ui/icons/Brightness6'
import Menu from '@material-ui/icons/Menu'
import Apps from '@material-ui/icons/Apps'

import { AppContext } from 'contextProvider'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'

const SwitchWrapperTheme = withStyles((theme) => ({
    root: {
        marginLeft: 5,
        [theme.breakpoints.up('sm')]: {
            marginLeft: 110,
        },
    },
}))(({ classes, ...props }: { classes: ClassNameMap<'root'> }) => {
    return <span className={classes.root} {...props} />
})

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

const SwitchStyled = withStyles((theme) => ({
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
}))(
    ({
        classes,
        checked,
        onChange,
        ...props
    }: {
        classes: ClassNameMap<
            | 'root'
            | 'thumb'
            | 'switchBase'
            | 'track'
            | 'focusVisible'
            | 'checked'
        >
        checked: boolean
        onChange: () => void
    }) => {
        return (
            <Switch
                focusVisibleClassName={classes.focusVisible}
                disableRipple
                checked={checked}
                onChange={onChange}
                classes={{
                    root: classes.root,
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: classes.track,
                    checked: classes.checked,
                }}
                {...props}
            />
        )
    }
)

export const CustomSwitch = () => {
    const { viewType, setViewType } = useContext(AppContext)
    const changeViewType = () => setViewType(!viewType)
    const setViewTypeToIcons = () => setViewType(false)
    const setViewTypeToList = () => setViewType(true)
    return (
        <span>
            <Icon onClick={setViewTypeToIcons}>
                <Apps />
            </Icon>
            <span>
                <SwitchStyled checked={viewType} onChange={changeViewType} />
            </span>
            <Icon onClick={setViewTypeToList}>
                <Menu />
            </Icon>
        </span>
    )
}

export const CustomSwitchTheme = () => {
    const { isDarkTheme, setIsDarkTheme } = useContext(AppContext)
    const changeTheme = () => setIsDarkTheme(!isDarkTheme)
    return (
        <SwitchWrapperTheme>
            <Icon onClick={changeTheme}>
                <Brightness6 />
            </Icon>
        </SwitchWrapperTheme>
    )
}
