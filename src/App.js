
import './App.css';
import Button from './components/Button';
import ClearButton from './components/ClearButton';
import Screen from './components/Screen';
import kaizenLogo from './imgs/ChatGPT Image 1 sept 2025, 13_02_16.png'
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('')

  const insertInputToScreen = value => {
    setInputValue(inputValue + value) 
  }

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
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>          
        </div>
        <div className='row-calculator'>
          <ClearButton>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  )
}

export default App;
