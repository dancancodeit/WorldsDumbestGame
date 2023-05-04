import { useEffect, useState } from "react";

type Score = {
  playerName: string,
  score: number
}
function Scoreboard () {
  const [scores, setScores] = useState<Score[]>([])

  useEffect(() => {
    const getScores = async () => {
      const data = await fetch('/.netlify/functions/getScores');
      const respData = await data.json()
      setScores(respData as Score[])
    }

    getScores();

  }, []);

  return <>{scores}</>;
}


export default Scoreboard;