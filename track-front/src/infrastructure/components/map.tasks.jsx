import React from "react";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

const Tasks = ({
  taskName,
  tag,
  timeSpend,
  showEditPopUp,
  deleteTask,
  timeStart,
  timeEnd,
}) => {
  return (
    <div className="xs:flex bg-white flex-col items-center justify-center md:border flex md:items-center md:justify-between flex-wrap p-4 shadow-md md:flex-row m-3">
      <div>
        <h4 className="xs:text-center text-lg text-slate-500">{taskName}</h4>
      </div>
      <div>
        <p className="xs:text-center text-lg text-slate-500">
          {tag}
        </p>
      </div>

      <div>
        <p className="xs:text-center text-lg text-indigo-300 ">
        {timeStart} - {timeEnd}
        </p>
      </div>
      <div className="xs:text-center text-xl text-slate-500 ">
        <span>{timeSpend}</span>
      </div>
      <div className=" flex gap-4 text-lg">
        <FiEdit onClick={showEditPopUp} className="cursor-pointer text-indigo-300" />
        <FiTrash2 onClick={deleteTask} className="cursor-pointer text-red-300" />
      </div>
    </div>
  );
};

export default Tasks;
