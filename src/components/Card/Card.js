import React from 'react';
import styled from 'styled-components';
// import weatherIcons from 'assets';
// const icons = [...weatherIcons];

const Content = styled.div`
  margin: 10px auto 20px auto;
  width: 90%;
  flex-grow: 1;
  border: 1px solid #e95312;
  border-radius: 1em;
  background-color: #fff;
  display: ${props => (props.active ? 'block' : 'none')};
`;

const time = new Date();

const Card = ({ data }) => {
  return (
    <Content active={data.requestedCity}>
      <h1>{data.requestedCity}</h1>
      <p>{time.toLocaleTimeString()}</p>
      <img
        src={`https://developer.accuweather.com/sites/default/files/${data.picture}-s.png`}
        alt="obrazek"
      />
      <p>temperatura</p>
      <p>bezchmurnie</p>
      <p>ciśnienie</p>
    </Content>
  );
};

export default Card;
