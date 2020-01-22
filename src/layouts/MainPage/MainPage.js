import React, { Component } from 'react';
import styled from 'styled-components';
import CityInput from 'components/CityInput/CityInput';
import Card from 'components/Card/Card';

const MainWindow = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  font-family: sans-serif;
  height: 100%;
`;

const Header = styled.h2`
  text-align: center;
  color: #e95312;
`;

class WeatherApp extends Component {
  state = {
    requestedCity: '',
    city: 'jeden',
    date: '11.11.2020',
    picture: '01',
  };

  fetchCity = city => {
    fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=s9wGCHoGfpd6EPFPsGyniPfgHgRJh4l4&q=${city}`,
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ requestedCity: data[0].LocalizedName });
      })
      .catch(err => console.log(err));
  };

  handleRequestCity = (e, data) => {
    e.preventDefault();
    this.fetchCity(data);
  };

  handleRequestData = () => {
    fetch()
      .than()
      .than()
      .catch(err => console.log(err));
  };

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
