import { useEffect, useState, useRef } from 'react'
import './App.css'
import Timer from './Timer';

function App() {
  const [score, setScore] = useState<number>(0);
  const intervalRef = useRef(0);
  
  useEffect(() => {
    document.addEventListener('mouseup', handleGameEnd);
    return () => document.removeEventListener('mouseup', handleGameEnd);
  }, []);

  const handleGameStart = () => {
    setScore(0);
    const startTime = Date.now()
    const intervalId = setInterval(() => {
      setScore(Date.now() - startTime);
    }, 100);
    intervalRef.current = intervalId;
  }

  const handleGameEnd = () => {
    clearInterval(intervalRef.current)
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
            {"Hold Me Baby <3"}
        </button>
      </div>
    </>
  )
}

export default App
