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
      console.log(data);
    }

    getScores();

  }, []);

  return <>hello</>;
}


export default Scoreboard;