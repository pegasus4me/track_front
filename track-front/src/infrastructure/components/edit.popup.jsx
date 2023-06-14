import React, { useEffect, useState } from "react";
import { getAllTask } from "../api/task";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { updateTaskById } from "../api/task";
import Tags from "./tags";
const Edit = ({ currentTaskId, closeModal, update, currentTask }) => {
  // function qui recupere un id en function de la task sur la quelle j'ai cliqué
  
  
  const [taskName, setTaskName] = useState("");
  const [hour, setHour] = useState("")
  const [minute , setMinute] = useState("")
  const [second, setSecond] = useState("")
  const [tag, setTag] = useState("")
  const [timeZone, setTimeZone] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  useEffect(() => {
    setTimeZone(currentTask.timezone)
    setStart(currentTask.time_start)
    setEnd(currentTask.time_end)
    console.log(currentTask)
  },[])

  const updateTask = async () => {
    try {
    
      let updatetedTask = {
        notes : taskName,
        tag : tag,
        time_spend : `${hour}:${minute}:${second}`,
        time_start : start,
        time_end : end,
        timezone : timeZone,
      }
      // passer la MAJ sur le la route de modification
       const updateData = await updateTaskById(currentTaskId, updatetedTask)
      console.log('dsd',updateData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white border w-[30%] h-[50%] relative rounded-lg p-5 ">
        <p className="text-slate-500 font-medium">task id :{currentTaskId}</p>
        <div>
          <AiOutlineCloseCircle
            className="absolute top-2 right-2 cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="max-w-[100%] mt-10 mb-12">
          <input
            type="text"
            className="w-full p-2 focus:outline-indigo-200 mb-5 border rounded-sm"
            placeholder="update task Name"
            onChange={(e) => setTaskName(e.target.value)}
          />
          {/* update time as well */}
          <div>
            <label className="font-display font-medium text-slate-800 mb-2">
              update time spend
            </label>
            <div className="flex max-w-[100%] mt-1 gap-2 p-2">
              <input
                type="text"
                placeholder={currentTask.time_spend.split(":")[0]}
                className="w-[50%] focus:outline-none border rounded-sm p-1"
                onChange={(e) => setHour(e.target.value)}
              />
              <input
                type="text"
                placeholder={currentTask.time_spend.split(":")[1]}
                className="w-[50%] focus:outline-none border rounded-sm p-1"
                onChange={(e) => setMinute(e.target.value)}
              />
              <input
                type="text"
                placeholder={currentTask.time_spend.split(":")[2]}
                className="w-[50%] focus:outline-none border rounded-sm p-1"
                onChange={(e) => setSecond(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Tags selectedTag={(e) => setTag(e.currentTarget.value)} />
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <button
            className="text-white bg-indigo-500 hover:bg-indigo-400 focus:ring-indigo focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex w-full "
            onClick={updateTask}
          >
            Update this task 📝
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
