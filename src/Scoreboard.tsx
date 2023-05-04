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
      const respData = await data.json();
      console.log(respData);
      setScores(respData)
    }

    getScores();

  }, []);

  return <>{scores}</>;
}


export default Scoreboard;