import Carousel from 'react-bootstrap/Carousel';
import React, { Component } from 'react';
import Fishing from '../assets/Fish.jpg';
import Hunting from '../assets/Hunt.jpg';

export default class Home extends Component {
   render() {
      return (
         <div style={{ maxWidth: '200%', marginTop: '10px', }}>
            <Carousel>
               <Carousel.Item>
                  <img
                     className='d-block w-100'
                     src={Fishing}
                     alt="Fishing"
                  />
                  <Carousel.Caption>
                     <h3>Fishing</h3>
                     <p>At our site you can read all about fishing and seasons also you can complete your library</p>
                  </Carousel.Caption>
               </Carousel.Item>
               <Carousel.Item>
                  <img
                     className='d-block w-100'
                     src={Hunting}
                     alt="Hunting"
                  />
                  <Carousel.Caption>
                     <h3>Hunting</h3>
                     <p>At our site you can read all about hunting and seasons also you can complete your library</p>
                  </Carousel.Caption>
               </Carousel.Item>
            </Carousel>
         </div>
      )
   }
}
