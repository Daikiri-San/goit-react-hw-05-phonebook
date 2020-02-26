import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 3rem;
  max-width: 54rem;
  box-shadow: 0px 2px 8px -3px rgba(0, 0, 0, 0.75);
  padding: 1.4rem 1.6rem;
`;

const Label = styled.label`
  font-size: 2rem;
  cursor: pointer;
`;

const Input = styled.input`
  font-size: 2.2rem;
  width: 100%;
  margin-top: 0.4rem;
  padding: 1.4rem 1.2rem 1.2rem;
  border-radius: 0.6rem;

  &:focus {
    border-color: #1d2bcc;
  }
`;

function Filter({ value, onChangeFilter }) {
  return (
    <Container>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={value}
          onChange={({ target: { value } }) => onChangeFilter(value)}
        />
      </Label>
    </Container>
  );
}

export default Filter;
