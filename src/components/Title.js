import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import slideTitleTransition from './transitions/slideTitle.module.css';

const TitleText = styled.h1`
  font-size: 4rem;
  margin-bottom: 2rem;
  color: #1d2bcc;
`;

function Title({ text, apearPage }) {
  return (
    <>
      <CSSTransition
        timeout={500}
        classNames={slideTitleTransition}
        in={apearPage}
      >
        <TitleText>{text}</TitleText>
      </CSSTransition>
    </>
  );
}

export default Title;
