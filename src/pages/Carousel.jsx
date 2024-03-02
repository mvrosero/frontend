import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import image1 from "../components/images/about_carousel1.png"
import image2 from "../components/images/about_carousel2.png"
import image3 from "../components/images/about_carousel3.png"
import image4 from "../components/images/about_carousel4.png"


const RectangleContainer = () => {
  return (
    <div className="rectangle-container">
      <Carousel>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>

            <Carousel.Item>
            <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
            />
            </Carousel.Item>

                <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                </Carousel.Item>
                
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Fourth slide"
                    />
                    </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default RectangleContainer;
