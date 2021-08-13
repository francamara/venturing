import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

export default function ContainedButtons({ open, setOpen }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        color="primary"
        href="https://github.com/francamara/venturing-rest-api"
        target="_blank"
      >
        project repo
      </Button>
    </div>
  )
}
