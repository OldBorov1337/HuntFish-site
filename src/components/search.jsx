import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col, Form } from 'react-bootstrap';

function SearchComponent({ data }) {
   const [searchQuery, setSearchQuery] = useState('');
   const [searchResults, setSearchResults] = useState([]);
 
   
   const handleSearchInputChange = (event) => {
     const query = event.target.value;
     setSearchQuery(query);
 
     
     const results = data.filter((item) =>
       item.toLowerCase().includes(query.toLowerCase())
     );
     setSearchResults(results);
   };
 
   return (
     <Container>
       <Row>
         <Col>
           <Form>
             <Form.Group controlId="searchForm">
               <Form.Control
                 type="text"
                 placeholder="Search..."
                 value={searchQuery}
                 onChange={handleSearchInputChange}
               />
             </Form.Group>
           </Form>
         </Col>
       </Row>
       <Row>
         <Col>
           
           <ul>
             {searchResults.map((result, index) => (
               <li key={index}>{result}</li>
             ))}
           </ul>
         </Col>
       </Row>
     </Container>
   );
 }
 
 export default SearchComponent;