import React, { Component } from 'react';
import styled from 'styled-components';
import CityInput from 'components/CityInput/CityInput';
import Card from 'components/Card/Card';

const MainWindow = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  font-family: sans-serif;
  max-height: 100%;
`;

const Header = styled.h2`
  text-align: center;
  color: #e95312;
`;

class WeatherApp extends Component {
  state = {
    locationKey: '',
    city: '',
    picture: '',
    temperature: '',
    text: '',
    isDayTime: false,
  };

  fetchCity = city => {
    fetch(
      // `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=s9wGCHoGfpd6EPFPsGyniPfgHgRJh4l4&q=${city}`,
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=	8NohnMk0lcfUPmDAdCiaKBIwZYSQ5t46&q=${city}`,
    )
      .then(response => response.json())

      .then(data => {
        console.log(data);
        this.setState({
          city: data[0].LocalizedName,
          locationKey: data[0].Key,
        });

        this.handleRequestData(this.state.locationKey);
      })
      .catch(err => console.log(err));
  };

  handleRequestData = key => {
    fetch(
      // `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=s9wGCHoGfpd6EPFPsGyniPfgHgRJh4l4`,
      `http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=	8NohnMk0lcfUPmDAdCiaKBIwZYSQ5t46`,
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          picture: data[0].WeatherIcon,
          temperature: data[0].Temperature.Metric.Value,
          text: data[0].WeatherText,
          isDayTime: data[0].IsDayTime,
        });
        window.localStorage.setItem('weatherData', JSON.stringify(this.state));
      })
      .catch(err => console.log(err));
  };

  handleRequestCity = (e, data) => {
    e.preventDefault();
    this.fetchCity(data);
  };

  componentDidMount() {
    const data = JSON.parse(window.localStorage.getItem('weatherData'));
    this.fetchCity(data.city);
  }

  render() {
    return (
      <MainWindow>
        <Header>AccuPogoda</Header>
        <CityInput change={this.handleRequestCity} />
        <Card data={this.state} />
      </MainWindow>
    );
  }
}

export default WeatherApp;
