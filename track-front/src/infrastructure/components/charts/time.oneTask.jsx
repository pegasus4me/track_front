import React, { useState, useEffect } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { getAllTask } from "../../api/task";
import { converDurationToNumber } from "../../actions/totalTimeSpend";

/*
display le total time passé sur chaque task ex : vivatech : 30h / solidity: 2h / ectt...
*/

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const TimeTask = () => {
  const [data, setData] = useState([]);
  console.log("odododd", data);
  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    try {
      let res = await getAllTask();
      let newData = res.map((task) => {

        const durationperTask = converDurationToNumber(task.time_spend) / 60000;
        return {
          taskid: task.id,
          name: task.notes,
          "duration/min": durationperTask.toFixed(2),
          time: task.time_spend,
        };
      });
      setData(newData);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="duration/min"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        
        ))}
      </Pie>
    </PieChart>
  );
};

export default TimeTask;
