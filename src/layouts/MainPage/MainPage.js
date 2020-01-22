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
    requestedCity: 'jakie miasto?',
    city: 'jeden',
    date: '11.11.2020',
    picture: '01',
  };

  handleRequestCity = (e, data) => {
    e.preventDefault();
    this.setState({ requestedCity: data });
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
