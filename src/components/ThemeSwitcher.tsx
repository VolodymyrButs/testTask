import React, { useContext } from 'react'
import { withStyles, IconButton } from '@material-ui/core'
import Brightness6 from '@material-ui/icons/Brightness6'

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
    return <IconButton className={classes.root} onClick={onClick} {...props} />
  }
)

export const ThemeSwitcher = () => {
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
