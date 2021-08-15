import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import axios from 'axios'

class ManualInputForm extends Component {
  state = {
    name: null,
    description: null,
    year: null,
  }

  handleName(e) {
    let name = e.target.value
    this.setState({ name: name })
  }

  handleDescription(e) {
    let description = e.target.value
    this.setState({ description: description })
  }

  handleYear(e) {
    let year = e.target.value
    this.setState({ year: year })
  }

  handleUpload(e) {
    let name = this.state.name
    let description = this.state.description
    let year = this.state.year

    let formData = new FormData()

    formData.append('name', name)
    formData.append('description', description)
    formData.append('year', year)

    axios({
      url: 'http://localhost:2000/api/v1/movies/manual',
      mehtod: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: formData,
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <div>
            <TextField
              required
              label="Title"
              variant="outlined"
              onChange={(e) => this.handleName(e)}
            />
            <TextField
              required
              label="Description"
              variant="outlined"
              onChange={(e) => this.handleDescription(e)}
            />
            <TextField
              required
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              onChange={(e) => this.handleYear(e)}
            />
            <br />
            <Button variant="contained" onClick={(e) => this.handleUpload(e)}>
              Post new movie
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default ManualInputForm
