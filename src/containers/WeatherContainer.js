import React from 'react';
import axios from 'axios';
import WeatherInfo from '../components/WeatherInfo';

class WeatherContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: "",
      long: "",
      fetching: true
    };
  }

  componentDidMount() {
    // use fetching to wait for retrieval to complete
    axios.get('https://ipapi.co/json/').then((data) => {
      this.setState({
        lat: data.data.latitude,
        long: data.data.longitude,
        fetching: false
      })
    })

  }

  render() {
    //send state when fetching is done
    return this.state.fetching === true
      ? <p>Loading</p>
      : (<WeatherInfo lat={this.state.lat} long={this.state.long}/>);
  }

}

export default WeatherContainer;
