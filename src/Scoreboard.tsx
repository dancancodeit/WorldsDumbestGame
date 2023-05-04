import { useEffect, useState } from "react";

// type Score = {
//   playerName: string,
//   score: number
// }
function Scoreboard () {
  const [scores, setScores] = useState<any>([])

  useEffect(() => {
    const getScores = async () => {
      const data = await fetch('/.netlify/functions/getScores');
      console.log(data.json());
      setScores(data.json())
    }

    getScores();

  }, []);

  return <>{scores}</>;
}


export default Scoreboard;