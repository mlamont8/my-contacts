import React from 'react';
import {Navbar, Row, Col} from 'react-bootstrap'
import Contacts from '../components/Contacts';
import Time from './TimeContainer';
import Weather from './WeatherContainer'


class MainContainer extends React.Component {


    render() {

      return (
        <div>
        <Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#">My Contacts</a>
    </Navbar.Brand>
  </Navbar.Header>

</Navbar>
    <Row>
          <Contacts />
    </Row>
    <Row>

          <Col xs={3} xsOffset={3}><Weather /></Col>
          <Col  xs={3}><Time /></Col>
    </Row>
        </div>
      );
    }
  };

export default MainContainer;
