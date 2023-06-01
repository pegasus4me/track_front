import React from 'react';
import Container from '../../infrastructure/components/container';
import Task from '../../infrastructure/components/task';
const Tasks = () => {
    return (
        <div className='max-w-[70%] m-auto  xs:max-w-[100%]'>
            <div className='mt-5'>
                <Task />
            </div>
        </div>
    );
}

export default Tasks;
