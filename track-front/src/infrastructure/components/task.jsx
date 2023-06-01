import React, { useState, useEffect } from "react";
import StartButton from "./Startbutton";
import StopButton from "./StopButton";
import { useStopwatch } from "react-timer-hook";
const Task = () => {
    const { seconds, minutes, hours, days, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });
    const stop = () => {
        // reset le compteur et m'envoi sous forme d'objet le temps total et les autres donnes que je vais passer au back
    };
    const startTime = () => {

        // decleanche le compteur et renvoi un objet avec les propriétés definies
    };
return (
    <div className="border flex items-center justify-evenly flex-wrap p-2 bg-white shadow-md">
      <div>
        <input
          type="text"
          className="w-96 p-2 focus:outline-indigo-200"
          placeholder="Task Name"
        />
      </div>
      <div>
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <div>
        {isRunning ? (
          <StopButton stopTime={stop} />
        ) : (
          <StartButton startTime={start} />
        )}
      </div>
    </div>
  );
};

export default Task;
