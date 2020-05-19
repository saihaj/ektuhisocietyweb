import React from 'react'
import { arrayOf, any } from 'prop-types'
import { Carousel, Container, Image } from 'react-bootstrap'

export const SlideShow = ( { imageArray } ) => (
  <Container
    bsPrefix="slideshow"
    nextIcon={<span className="carousel-control-next-icon" />}
    prevIcon={<span className="carousel-control-prev-icon" />}
  >
    <Carousel>
      {imageArray.map( image => (
        <Carousel.Item>
          <Image
            src={image}
            fluid
          />
        </Carousel.Item>
      ) )}
    </Carousel>
  </Container>
)

SlideShow.propTypes = {
  imageArray: arrayOf( any ).isRequired,
}
