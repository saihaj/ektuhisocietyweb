import React from 'react'

import Layout from '../components/Layout'
import { ContactForm } from '../components/ContactForm'


const Contact = () => (
  <Layout title="Contact Us">
    <p>
      Want to get in touch? Fill out the form below to send us a
      message and we will get back to you!
    </p>
    <ContactForm />
  </Layout>
)

export default Contact
