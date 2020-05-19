/* eslint-disable max-len */
import React from 'react'

import { SlideShow } from '../components/SlideShow'

import slide3 from '../assets/slide3.jpg'

import './Home.css'

const SLIDES = [
  slide3,
  slide3,
  slide3,
]

const Home = () => (
  <SlideShow imageArray={SLIDES} />
)

export default Home
