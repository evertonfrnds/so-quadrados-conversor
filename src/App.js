import React from 'react';
import './App.css';
import {Container, Header, Footer, Line, InputContainer, ResultContainer, Input} from './styles.js'
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
    <Header>
      Só quadrados conversor
      <Line/>
    </Header>
    <Container>
      <InputContainer>
        <Input placeholder="Digite aqui"/>
      </InputContainer>
      <ResultContainer>

      </ResultContainer>
    </Container>
    <Footer>

    </Footer>

    <GlobalStyles/>
    </>
  );
}

export default App;
