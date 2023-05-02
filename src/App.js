import "./styles.css";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [min, setmin] = useState(0);
  const [hour, sethour] = useState(0);

  const firstRef = useRef(null);

  useEffect(() => {
    if (count === 5) {
      setCount(0);
      setmin((prevMin) => prevMin + 1);
    }
    if (min === 2) {
      setmin(0);
      sethour((prevHour) => prevHour + 1);
    }
  }, [count, min]);

  function startTimer() {
    firstRef.current = setInterval(begin, 1000);
  }

  function begin() {
    setCount((prevCount) => prevCount + 1);
  }

  function stopTimer() {
    clearInterval(firstRef.current);
    firstRef.current = null;
  }

  return (
    <div className="App">
      <h1>Stopwatch Counter</h1>
      <h2>
        Counter : {hour} : {min} : {count}{" "}
      </h2>
      <button onClick={startTimer}>Start</button> &nbsp;
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}
