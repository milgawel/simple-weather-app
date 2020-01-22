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
    city: '',
  };

  handleChange = e => {
    this.setState({
      city: e.target.value,
    });
  };

  render() {
    return (
      <MainWindow>
        <Header>AccuPogoda</Header>
        <CityInput change={this.handleChange} />
        {this.state.city}
        <Card />
      </MainWindow>
    );
  }
}

export default WeatherApp;
