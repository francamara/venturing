import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
// import { TextareaAutosize } from '@material-ui/core'
// import axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

function ManualInputForm() {
  const classes = useStyles()
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="outlined-required"
            label="Title"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Description"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>
      </form>
    </div>
  )
}

export default ManualInputForm
