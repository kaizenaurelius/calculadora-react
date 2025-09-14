
import './App.css';
import Button from './components/Button';
import kaizenLogo from './imgs/ChatGPT Image 1 sept 2025, 13_02_16.png'

function App() {
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
        <div className='row-calculator'> 
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
        </div>
        <div className='row-calculator'>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>-</Button>
        </div>
        <div className='row-calculator'>
          <Button>7</Button>
          <Button>8</Button>
          <Button>9</Button>
          <Button>*</Button>
        </div>
        <div className='row-calculator'>
          <Button>=</Button>
          <Button>0</Button>
          <Button>.</Button>
          <Button>/</Button>          
        </div>
        <div className='row-calculator'></div>
      </div>
    </div>
  )
}

export default App;
