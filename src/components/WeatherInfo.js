import React from 'react';
import axios from 'axios';
import {Well, Col, Row} from 'react-bootstrap';

const apiKey = 'f67b93e533d6313a';

class WeatherInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      fetching: true
    }

  }

  componentDidMount() {
    const lat = this.props.lat
    const long = this.props.long
    axios.get('https://api.wunderground.com/api/' + apiKey + '/conditions/q/' + lat + ',' + long + '.json').then((data) => {
      this.setState({
        temp: Math.trunc(data.data.current_observation.temp_f),
        fetching: false
      })

    })
  }

  render() {
    // wait until fetching is done before attempting rendering
    return this.state.fetching === true
      ? <p>Loading</p>
      : (
        <div>
          <Well>
            <Col>
              <Row className='text-center'><p>Current Weather is:</p></Row>
              <Row className='text-center'><p>{this.state.temp} &#176;</p></Row>
            </Col>
          </Well>
        </div>
      );
  }

}

export default WeatherInfo;
