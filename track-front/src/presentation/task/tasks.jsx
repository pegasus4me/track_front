import React,{useState, useEffect, useCallback} from 'react';
import Container from '../../infrastructure/components/container';
import Task from '../../infrastructure/components/task';
import MapTasks from '../../infrastructure/components/map.tasks';
import { getAllTask } from '../../infrastructure/api/task';
const Tasks = () => {

    const [tasks, setTasks] = useState();

    useEffect(() => {
        getTasks(); 
    },[])
    const getTasks = async() => {
        try {
            let res = await getAllTask();
            setTasks(res);
        } catch (error) {
            console.log("err", error)
        }
    }
    console.log(tasks)
    return (
        <div className='max-w-[70%] m-auto'>
            <div className='mt-5'>
                <Task />
            </div>
            {/* current week task done */}
           
                <Container>
                    {tasks.map((task) => (
                        <MapTasks
                        key={task.id}
                        taskName={task.notes}
                        tag={task.tag}
                        timeSpend={task.time_spend}
                        timeStart={task.time_start.slice(11,16)}
                        timeEnd={task.time_end.slice(11,16)}
                        />
                    ))}
                </Container>
            
        </div>
    );
}

export default Tasks;



// <MapTasks />
