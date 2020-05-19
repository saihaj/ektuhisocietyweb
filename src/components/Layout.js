/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import Container from 'react-bootstrap/Container'

const Layout = props => (
  <Container>
    {props.children}
  </Container>
)

export default Layout
