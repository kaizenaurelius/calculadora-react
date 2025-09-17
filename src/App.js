
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import kaizenLogo from './imgs/ChatGPT Image 1 sept 2025, 13_02_16.png'
import { useState, useEffect } from 'react';
import { evaluate } from 'mathjs'

function App() {

  const [inputValue, setInputValue] = useState('')

  const insertInputToScreen = value => {

      setInputValue(inputValue + value) 
  }

    const showResult = () => {
      setInputValue(evaluate(inputValue)) 
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key } = event;
      // Números y operadores permitidos
      const validKeys = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','.'];
      if (validKeys.includes(key)) {
        setInputValue((prev) => prev + key);
      } else if (key === 'Enter' || key === '=') {
        if (inputValue) setInputValue(evaluate(inputValue).toString());
      } else if (key === 'Backspace') {
        setInputValue((prev) => prev.slice(0, -1));
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [inputValue]);

 

  return (
    <div className='App'>

      <div className='kaizentob-logo-container'>
        <img
          className='kaizentob-logo' 
          src={kaizenLogo}
          alt='logo'
        />
      </div>

      <div className='calculator-container'>

        <Screen 
          input={inputValue}
        />


        <div className='row-calculator'> 
          <Button 
            handleClick = {insertInputToScreen}
            >1</Button>
          <Button 
            handleClick = {insertInputToScreen}
            >2</Button>
          <Button 
            handleClick = {insertInputToScreen}
            >3</Button>
          <Button 
            handleClick = {insertInputToScreen}
            >+</Button>
        </div>
        <div className='row-calculator'>
          <Button
            handleClick={insertInputToScreen}
          >4</Button>
          <Button
            handleClick={insertInputToScreen}
          >5</Button>
          <Button
            handleClick={insertInputToScreen}
          >6</Button>
          <Button
            handleClick={insertInputToScreen}
          >-</Button>
        </div>
        <div className='row-calculator'>
          <Button
            handleClick={insertInputToScreen}
          >7</Button>
          <Button
            handleClick={insertInputToScreen}
          >8</Button>
          <Button
            handleClick={insertInputToScreen}
          >9</Button>
          <Button
            handleClick={insertInputToScreen}
          >*</Button>
        </div>
        <div className='row-calculator'>
          <Button
            handleClick={showResult}
            disabled={!inputValue}
          >=</Button>
          <Button
            handleClick={insertInputToScreen}
          >0</Button>
          <Button 
            handleClick={insertInputToScreen}
          >.</Button>
          <Button
            handleClick={insertInputToScreen}
          >/</Button>          
        </div>
        <div className='row-calculator'>
          <ClearButton
            handleClear={() => setInputValue('')}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  )
}

export default App;
