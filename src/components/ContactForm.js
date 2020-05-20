import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export const ContactForm = () => {
  const [ validated, setValidated ] = useState( false )

  const handleSubmit = event => {
    const form = event.currentTarget
    if ( form.checkValidity() === false ) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated( true )
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Control required type="text" placeholder="Name" />
      <Form.Control required type="email" placeholder="Email" />
      <Form.Control required type="tel" placeholder="Phone Number" pattern="[0-9]{10}" />
      <Form.Control required type="text" placeholder="Message" />
      <Button type="submit">Submit form</Button>
    </Form>
  )
}
