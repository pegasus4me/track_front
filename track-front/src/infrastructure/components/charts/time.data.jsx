import React, { useState, useEffect } from 'react';
import { getAllTask } from '../../api/task';
import { totalSpend } from '../../actions/totalTimeSpend';
const TimeData = () => {

    const [totalTime, settotalTime] = useState([]);

    useEffect(() => {
       total() 
    },[])

    let a = totalSpend(totalTime)
    console.log(a)
    const total = async() => {
            try {
                let res = await getAllTask()
                res.map((task) => {
                    settotalTime(...totalTime,[task])
                })
            } catch (error) {
                console.error(error)
            }
    }
    
    return (
        // recuperer les valeurs depuis le back sortir le total de temps passé 
        <>
            <div className='p-2'>
                <p>total time passed :</p>
            </div>
        </>
    );
}

export default TimeData;
