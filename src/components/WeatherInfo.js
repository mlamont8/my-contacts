import React from 'react';
import {Well} from 'react-bootstrap';
import axios from 'axios';

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
      console.log(data)
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
            <p>{this.state.temp}</p>
          </Well>
          <p>{this.props.lat}</p>
          {this.state.long}
        </div>
      );
  }

}

export default WeatherInfo;
