import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { getAllTask } from "../../api/task";
import LoadSpinner from "../load.spinner";
import { converDurationToNumber } from "../../actions/totalTimeSpend";
// display le total Time passé sur toutes les task
const TotalTime = () => {
  
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(<LoadSpinner />);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      let res = await getAllTask();

      let newData = res.map((task) => {
        return {
          taskid: task.id,
          name: task.notes,
          duration: converDurationToNumber(task.time_spend).slice(5, 8),
          time : task.time_spend
        };
      });
      setData(newData);
      console.log(newData)
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {data.length !== 0 ? (
         <BarChart
        className="w-full"
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="duration" fill="#8884d8" />
        </BarChart>
       
      ) : (
        spinner
      )}
    </div>
  );
};

export default TotalTime;
