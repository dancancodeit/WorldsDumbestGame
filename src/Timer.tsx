
function Timer({milliseconds}: {milliseconds: number}) {
    const seconds = Math.round(milliseconds / 1000);
    const minutes = Math.round(seconds / 60);
    const hours = Math.round(minutes / 60);
    const millis = milliseconds.toString().slice(-1)


    return <>{hours}:{minutes}:{seconds}:{millis}</>
}

export default Timer;