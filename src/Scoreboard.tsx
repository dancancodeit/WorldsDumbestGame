import { useEffect, useState } from "react";

type Score = {
  player_name: string,
  score: number
}
function Scoreboard () {
  const [scores, setScores] = useState<Score[]>([])

  useEffect(() => {
    const getScores = async () => {
      const data = await fetch('http://localhost:9999/.netlify/functions/getScores');
      const respData = await data.json()  
      setScores(respData["scores"])
    }

    getScores();
  }, []);

  return (
    <>
      <h5>High Scores</h5>
      {scores.map(score => <div><a style={{marginRight: 20}}>{score.player_name}</a><a>{score.score}</a></div>)}
    </>
  );
}


export default Scoreboard;