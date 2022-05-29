import React , {useState} from 'react'
import './App.css'
import Background from './Game/components/Background';
import Car from './Game/components/Car';
import Road from './Game/components/Road';
function App() {
  const [startGame, setstartGame] = useState(false)
  return(
    <div className='container'>
      <div className='game-container'>
        {startGame ? <Background /> : null}
        <Car startGame={startGame} setstartGame = {setstartGame} />
        <Road />
      </div>
    </div>
  );
}

export default App;
