import React, { useState, useEffect } from "react";
import { getUserData } from "../../infrastructure/api/auth";
import { getAllTask } from "../../infrastructure/api/task";
import Structure from "./structure";
const Profile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");
  const [role, setRole] = useState("");
  const [task, setTask] = useState([])
  

  useEffect(() => {
    getName();
    getTasks();
  }, []);

  async function getName() {
    let getName = await getUserData();
    setName(getName.username);
    setEmail(getName.email);
    setTimezone(getName.timezone);
    setRole(getName.role);
  }
  async function getTasks() {
       const task = await getAllTask()
       setTask(task)

  }
    return (
    <>
      <Structure
        username={name}
        email={email}
        timezone={timezone}
        role={role}
        values={task}
      />
    </>
  );
};

export default Profile;
