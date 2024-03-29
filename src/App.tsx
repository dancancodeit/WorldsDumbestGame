import { useEffect, useState, useRef } from 'react'
import './App.css'
import Timer from './Timer';
import Scoreboard from './Scoreboard';
import Form from './Form';

function App() {
  const [score, setScore] = useState<number>(0);
  // const [gameStart, setGameStart] = useState(false);
  const [gameEnd, setGameEnd] = useState(false);
  const intervalRef = useRef(0);
  const gameStart = useRef(false);
  useEffect(() => {
    document.addEventListener('mouseup', handleGameEnd);
    return () => document.removeEventListener('mouseup', handleGameEnd);
  }, []);

  const handleGameStart = () => {
    setScore(0);
    gameStart.current = true;
    setGameEnd(false);
    const startTime = Date.now()
    intervalRef.current = setInterval(() => {
      setScore(Date.now() - startTime);
    });
  }

  const handleGameEnd = () => {
    if (gameStart.current) {
      gameStart.current = false;
      setGameEnd(true);
      clearInterval(intervalRef.current)
    }
  }

  return (
    <>
      <h3>World's Best Game</h3>
      <h5>How long can you hold the button?</h5>
      <Timer milliseconds={score} />
      <div>
        <button 
          onMouseDown={handleGameStart}
          onMouseUp={handleGameEnd}
          >
            {!gameStart ? "Hold Me Baby <3": "Don't Let Gooooo"}
        </button>
      </div>
      <Scoreboard />
      {gameEnd && <Form score={score / 1000} />}
    </>
  )
}

export default App
