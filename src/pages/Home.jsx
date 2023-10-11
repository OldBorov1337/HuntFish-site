import  Carousel  from 'react-bootstrap/Carousel';
import React, {Component} from 'react';
import CarouselBox from '../components/CarouselBox';
import { Container ,Card, Row} from 'react-bootstrap';

import background from '../assets/foto.png';

const homeStyles = {
   backgroundImage: `url(${background})`,
   backgroundSize: 'cover', 
   backgroundRepeat: 'no-repeat', 
   backgroundAttachment: 'fixed', 
 };






export default class Home extends Component{
   render (){
      return(
         <div style={homeStyles}>
      <CarouselBox/>
      <Container>
         <h3 className='text-center m-4'> Our Tops </h3>
         <Row md={2} className="m-4">
            <Card  text="primary">
               <Card.Img variant="top"
                  
                  src="https://149634799.v2.pressablecdn.com/wp-content/uploads/2019/04/Trophy-Hunting-Red-Stag-Poronui-Lodge-Taupo.jpg"

                  
                  />
                  <Card.Body>
                  <Card.Title> 1 place: Sergey Gornyj  </Card.Title>
                  <Card.Text>
                     Score: 681 
                      </Card.Text> 
               </Card.Body>

            </Card>

            <Card text="primary">
               <Card.Img
                  src="https://images.ctfassets.net/pujs1b1v0165/7vx19wPUUiIOql7KLGd9hD/5154364c815a50f70365ac5cb471caf4/trophy_fish_through_ice.jpg?w=1280"

                  
                  />
                  <Card.Body>
                  <Card.Title> 2 place: Volodymyr Zeleznji  </Card.Title>
                  <Card.Text>
                     Score: 624 
                      </Card.Text> 
               </Card.Body>

            </Card>

            <Card text="primary">
               <Card.Img
                  src="https://www.sportquestholidays.com/wp-content/uploads/2021/12/another-large-hali.png"

                  
                  />
                  <Card.Body>
                  <Card.Title> 3 place: Vasii Dub  </Card.Title>
                  <Card.Text>
                     Score: 587 
                      </Card.Text> 
               </Card.Body>

            </Card>

         </Row>
      </Container>
      </div>
      )
   }
}
