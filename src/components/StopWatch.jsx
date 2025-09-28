import { useRef } from "react";
import { useState } from "react";

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  let timerData = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    timerData.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handleStop = () => {
    console.log("clicked on stop");
    clearInterval(timerData.current);
  };
  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)} </h1>
      <button
        onClick={handleStart}
        className="bg-green-600 text-white p-1 mx-2 rounded px-4"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="bg-red-600 text-white p-1 mx-2 rounded px-4"
      >
        Stop
      </button>
    </>
  );
}
