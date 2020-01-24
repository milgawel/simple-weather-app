import React from 'react';
import styled from 'styled-components';
import day from 'assets/background/day.jpg';
import night from 'assets/background/night.jpg';

const Content = styled.div`
  margin: 20px auto 20px auto;
  width: 90%;
  height: 90vh;
  border: 1px solid #e95312;
  border-radius: 1em;
  background-image: url(${props => (props.isDayTime ? day : night)});
  display: ${props => (props.active ? 'flex' : 'none')};
  flex-direction: column;
  background-size: cover;
`;

const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  width: 100%;
  text-align: center;
  font-size: 1.4em;
  color: ${props => (props.isDayTime ? 'black' : 'white')};
`;

const Temperature = styled.p`
  position: relative;
  margin: 0 auto;
  width: 3em;
  height: 2em;
  line-height: 2em;
  border-radius: 1em;
  background-color: white;
  top: -1em;
  text-align: center;
`;

const Img = styled.img`
  width: 60%;
  margin: 20px auto 0 auto;
`;

const Info = styled.div`
  position: relative;
  margin: auto 0 0 0;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.5);
`;

const time = new Date();

const Card = ({ data }) => {
  return (
    <Content active={data.city} isDayTime={data.isDayTime}>
      <Img src={`./images/weatherIcons/${data.picture}-s.png`} alt="obrazek" />

      <Info>
        <Temperature
          isDayTime={data.isDayTime}
          style={{
            fontSize: '3em',
          }}
        >
          {data.temperature}
          <i
            className="far fa-circle"
            style={{
              fontSize: '0.2em',
              fontWeight: 'normal',
              position: 'relative',
              top: '-3em',
              marginRight: '0.4em',
            }}
          ></i>
          <i
            style={{
              fontSize: '0.9em',
            }}
            className="fas fa-thermometer-quarter"
          ></i>
        </Temperature>
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: '2em',
            position: 'relative',
            top: '-20px',
          }}
          isDayTime={data.isDayTime}
        >
          {data.city}
        </Text>
        <Text isDayTime={data.isDayTime}>{time.toLocaleTimeString()}</Text>
        <Text isDayTime={data.isDayTime} style={{ marginTop: '20px', textTransform: 'uppercase' }}>
          {data.text}
        </Text>
      </Info>
    </Content>
  );
};

export default Card;
