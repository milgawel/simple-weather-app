import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
  padding: 1em;
  /* background-color: rgba(222, 222, 222, 0.5); */
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  text-align: center;
  font-size: 1.4em;
  padding: 0.3em 0.4em;
  border-radius: 1em;
  border: 1px solid #e95312;
  outline: none;
`;

const Button = styled.button`
  font-size: 1.5em;
  background-color: #e95312;
  width: 100px;
  color: white;
  border-radius: 1em;
  border: 1px solid #e95312;
  margin-left: 0.3em;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  &:hover {
    color: #e95312;
    background-color: #fff;
  }
`;

const CityInput = props => {
  return (
    <Form>
      <label htmlFor="city">
        <Input
          type="text"
          placeholder="wprowadź miasto"
          id="city"
          name="city"
          onChange={props.change}
        />
      </label>
      <Button>
        <i className="fas fa-search"></i>
      </Button>
    </Form>
  );
};

export default CityInput;
