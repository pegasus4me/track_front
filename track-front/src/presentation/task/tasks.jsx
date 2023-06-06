import React, { useState, useEffect, useCallback } from "react";
import Container from "../../infrastructure/components/container";
import Task from "../../infrastructure/components/task";
import MapTasks from "../../infrastructure/components/map.tasks";
import { getAllTask } from "../../infrastructure/api/task";
import { deleteTaskById } from "../../infrastructure/api/task";
import toast, { Toaster } from "react-hot-toast";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);
  const getTasks = async () => {
    try {
      let res = await getAllTask();
      setTasks(res);
    } catch (error) {
      console.log("err", error);
    }
  };

  const deleteOne = useCallback(async (id) => {
    try {
      const res = await deleteTaskById(id);
      if (res.msg === "row deleted") {
        toast.success("Task deleted successfully");

        getTasks();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="max-w-[70%] m-auto">
      <div className="mt-5">
        <Task />
      </div>
      {/* current week task done */}

      <Container>
        {tasks.msg !== "User doesn't have data" ? (
          tasks.map((task) => (
            <MapTasks
              key={task.id}
              taskName={task.notes}
              tag={task.tag}
              timeSpend={task.time_spend}
              timeStart={task.time_start.slice(11, 16)}
              timeEnd={task.time_end.slice(11, 16)}
              deleteTask={() => deleteOne(task.id)}
            />
          ))
        ) : (
          <p className="text-center text-2xl font-medium text-slate-300 ">
            Create new Task 🚀
          </p>
        )}
      </Container>
      <Toaster position="top-left" reverseOrder={false} />
    </div>
  );
};

export default Tasks;

/**
 * 
 *  {tasks.length !== 0 ? (
                        tasks.map((task) => (
                            <MapTasks
                            key={task.id}
                            taskName={task.notes}
                            tag={task.tag}
                            timeSpend={task.time_spend}
                            timeStart={task.time_start.slice(11,16)}
                            timeEnd={task.time_end.slice(11,16)}
                            // deleteTask={deleteOne(task.id)}
                        
                        />
                        ))
                    ) : (
                        <p>No Task</p>
                    )}
 */

/**
                     * 
                     *  {
                        tasks.map((task) => (
                            <MapTasks
                            key={task.id}
                            taskName={task.notes}
                            tag={task.tag}
                            timeSpend={task.time_spend}
                            timeStart={task.time_start.slice(11,16)}
                            timeEnd={task.time_end.slice(11,16)}
                            // deleteTask={deleteOne(task.id)}
                        
                        />
                        ))
                    }
                     */
