import { Button } from '@material-ui/core'
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
      url: 'http://localhost:2000/api/v1/movies/csv',
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      data: formData,
    })
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          component="label"
          type="file"
          name="file"
          onChange={(e) => this.handleFile(e)}
          style={{ margin: 13 }}
        >
          Select File
          <input type="file" hidden />
        </Button>
        <Button
          variant="contained"
          onClick={(e) => this.handleUpload(e)}
          style={{ margin: 13 }}
        >
          Upload
        </Button>
      </div>
    )
  }
}

export default FileUpload
