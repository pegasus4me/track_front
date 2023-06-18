import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { totalSpend } from "../../actions/totalTimeSpend";
import { getAllTask } from "../../api/task";
import LoadSpinner from "../load.spinner";

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
          time: task.time_spend,
        };
      });
      setData(newData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {data.length !== 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        spinner
      )}
    </div>
  );
};

export default TotalTime;
