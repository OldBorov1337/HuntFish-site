import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';




class CountryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: '', 
      Time: '',
      countryInfo: {}, 
    };
  }

  handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    // Здесь вы можете добавить код для получения информации о выбранной стране, например, из API
    // В данном примере я буду использовать фиктивные данные
    const countryInfo = {
      name: selectedCountry,
      Seasons: Time,
      
    };
    this.setState({ selectedCountry, countryInfo });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>fishing seasons</h1>
            <Form.Group>
              <Form.Label>Select your country</Form.Label>
              <BasicSelect></BasicSelect>
            </Form.Group>
          </Col>
        </Row>
        {this.state.selectedCountry && (
          <Row>
            <Col>
              <h2>Info {this.state.selectedCountry}</h2>
              <p> Seasons{this.state.countryInfo.Time}</p>
              
              {/* Добавьте другие поля с информацией о стране */}
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default CountryInfo;





