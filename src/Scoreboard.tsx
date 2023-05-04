import { useEffect, useState } from "react";

type Score = {
  player_name: string,
  score: number
}

function Scoreboard () {
  const [scores, setScores] = useState<Score[]>([])

  useEffect(() => {
    const getScores = async () => {
      const data = await fetch('/.netlify/functions/getScores');
      const respData = await data.json()  
      setScores(respData["scores"])
    }

    getScores();
  }, []);

  return (
    <div style={{width: 400, display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h5>High Scores</h5>
      <div style={{border: "1px gray solid", width: 300}}>
        {scores.map(score => <div style={{ display: "flex", justifyContent: "space-between"}}><a style={{marginRight: 20}}>{score.player_name}</a><a>{score.score}</a></div>)}
      </div>
      
    </div>
  );
}


export default Scoreboard;