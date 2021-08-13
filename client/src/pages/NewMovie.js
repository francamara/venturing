import React from 'react'
import ManualInputForm from '../components/ManualInputForm'
import FileUpload from '../components/FileUpload'

export default function FormPropsTextFields() {
  return (
    <div>
      <h1>Input movie</h1>
      <ManualInputForm />
      <h1>Or upload CSV file</h1>
      <FileUpload />
    </div>
  )
}
