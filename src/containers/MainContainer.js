import React from 'react';
import {Navbar} from 'react-bootstrap'
import Contacts from '../components/Contacts';

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

        <Contacts/>

      </div>
    );
  }
};

export default MainContainer;
