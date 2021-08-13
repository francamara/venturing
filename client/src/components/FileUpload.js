// import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import axios from 'axios'

class FileUpload extends Component {
  state = {
    file: null,
  }

  handleFile(e) {
    let file = e.target.files[0]
    this.setState({ file: file })
  }

  handleUpload(e) {
    let file = this.state.file

    let formData = new FormData()

    formData.append('movieList', file)

    axios({
      url: 'http://localhost:2000/api/v1/movies',
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      data: formData,
    })
  }

  render() {
    return (
      <div>
        <input
          // className={classes.input}
          id="contained-button-file"
          type="file"
          name="file"
          onChange={(e) => this.handleFile(e)}
        />
        <button onClick={(e) => this.handleUpload(e)}>Upload</button>
      </div>
    )
  }
}

export default FileUpload
