
import './App.css';
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
        <div className='row-calculator'></div>
        <div className='row-calculator'></div>
        <div className='row-calculator'></div>
        <div className='row-calculator'></div>
        <div className='row-calculator'></div>
      </div>
    </div>
  )
}

export default App;
