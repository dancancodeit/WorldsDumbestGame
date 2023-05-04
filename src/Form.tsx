import { useRef, useState } from "react";

function Form ({score}: {score: number}) {
    const [name, setName] = useState("")
    const inputRef = useRef(null)
  
    const submitScore = () => {
        const postScore = async () => {
          setName("")
          await fetch('/.netlify/functions/createScore', {
            method: "POST",
            body: JSON.stringify({score, name: name ? name : "NO_NAME"})
          });
        }
        postScore();
        window.location.reload();
    }

    return <>
        <h5>You scored {score} Submit your score to the leaderboard!</h5>
        <input ref={inputRef} value={name} onChange={(value) => setName(value.target.value)} placeholder="enter your name here"></input>
        <button onClick={submitScore}>Submit</button>
    </>
}

export default Form;