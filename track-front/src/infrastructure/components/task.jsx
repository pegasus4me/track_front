import React, { useState, useEffect } from "react";
import StartButton from "./Startbutton";
import StopButton from "./StopButton";
import { useStopwatch } from "react-timer-hook";
import Tags from "./tags";
import { setDate } from "../actions/date";
import { getUserData } from "../api/auth";
import { getTimeDifference } from "../actions/date";
import { addNewTask } from "../api/task";
const Task = () => {
  const { seconds, minutes, hours, days, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });
  const [taskName, setTaskName] = useState("");
  const [tag, setTag] = useState("");
  const [timeStart, setTimeStart] = useState("");

  const stop = async () => {
    try {

      const getUserTimeZone = await getUserData();
      let dates = setDate(getUserTimeZone.timezone);
      let timeEnd = `${dates.hours}:${dates.minutes}:${dates.seconds}`;
      let diff = getTimeDifference(timeStart, timeEnd);
      
      let data = {
        notes: taskName,
        time_spend: `${diff.hours}:${diff.minutes}:${diff.seconds}`,
        timezone: getUserTimeZone.timezone,
        tag: tag,
        time_start: timeStart,
        time_end: timeEnd,
      };
      const addNewTaskToDB = await addNewTask(data);
      console.log(addNewTaskToDB);
      reset(); // Réinitialise le compteur
      pause(); // Arrête le compteur
      // return addNewTaskToDB;
    } catch (error) {
      console.log(error);
    }
  };

  const startTime = async () => {
    try {
      const getUserTimeZone = await getUserData();
      let dates = setDate(getUserTimeZone.timezone);
      setTimeStart(`${dates.hours}:${dates.minutes}:${dates.seconds}`);
      reset(); // Réinitialise le compteur
      start();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="xs:flex bg-white flex-col items-center justify-center md:border flex md:items-center md:justify-between flex-wrap p-2 shadow-md md:flex-row">
      <div>
        <input
          type="text"
          className="xs:w-auto lg:w-96 p-2 focus:outline-indigo-200 m-1"
          placeholder="Task Name"
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <Tags selectedTag={(e) => setTag(e.currentTarget.value)} />
      </div>
      <div className="xs:text-center text-xl text-slate-500 ml-[30%]">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>

      <div>
        {isRunning ? (
          <StopButton stopTime={stop} />
        ) : (
          <StartButton startTime={startTime} />
        )}
      </div>
    </div>
  );
};

export default Task;
