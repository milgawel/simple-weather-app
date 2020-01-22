import React from 'react';
import MainPage from 'layouts/MainPage/MainPage';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  height: 100vh;
  width: 100%;
  max-width: 415px;
  background-color: rgba(242, 242, 242, 0.8);
`;

function App() {
  return (
    <Wrapper>
      <MainPage />
    </Wrapper>
  );
}

export default App;
