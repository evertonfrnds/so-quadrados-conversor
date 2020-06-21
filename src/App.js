import React,{useState, useEffect,useRef} from 'react';
import './App.css';
import {Container, Header, Footer, Line, InputContainer,LabelCopy, ResultContainer, Input, ResultArea} from './styles.js'
import GlobalStyles from './styles/GlobalStyles';

const stringValues = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'W', 'X', 'Y', 'Z',
  'Á', 'Â', 'Ã', 'À',
  'É', 'Ê', 'Ẽ', 'È',
  'Í', 'Î', 'Ĩ', 'Ì',
  'Ó', 'Ô', 'Õ', 'Ò',
  "V","Ç",
  'Ú', 'Ũ', 'Û', 'Ù',
  '1','2','3','4','5','6','7','8','9','0'
]

function App() {

  const [input, setInput] = useState('')
  const [result, setResult] = useState('')
  const textAreaRef = useRef(null);

  useEffect(()=>{
    conversor()
  }, [input])

  function verify(value){
    var result = false;
    stringValues.map(item=>{
      if(item == value){
        result = true
      }
    })    
    return result
  }

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    alert("Copiado!");
  };

  function conversor(){
    const arrayString = input.toUpperCase().split('')
    var arrayResult = []
    arrayString.map(function(item){
      arrayResult.push(verify(item)?"■": item)
    })
    const v = arrayResult.join('')
    setResult(v)
  }
  function handleText(event){
    setInput(event.target.value)    
  }

  return (
    <>
    <Header>
      Só quadrados conversor
      <Line/>
    </Header>
    <Container>
      <InputContainer>
        <Input placeholder="Digite aqui" value={input} onChange={handleText}/>
      </InputContainer>
      <ResultContainer>
        <ResultArea value={result} ref={textAreaRef}/>
        {
          document.queryCommandSupported('copy') &&
          <LabelCopy onClick={copyToClipboard}>Copia</LabelCopy>
        }
      </ResultContainer>
    </Container>
    <Footer>
    </Footer>

    <GlobalStyles/>
    </>
  );
}

export default App;
