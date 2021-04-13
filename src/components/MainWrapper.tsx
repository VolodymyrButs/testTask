import React from 'react'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'
import { withStyles } from '@material-ui/core/styles'

export const Wrapper = withStyles((theme) => ({
  root: {
    minWidth: '100vw',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  },
}))(({ classes, ...props }: { classes: ClassNameMap<'root'> }) => {
  return <div className={classes.root} {...props} />
})
