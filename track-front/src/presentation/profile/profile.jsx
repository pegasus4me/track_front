import React, { useState, useEffect } from "react";
import { getUserData } from "../../infrastructure/api/auth";
import Structure from "./structure";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    getName();
  }, []);

  async function getName() {
    let getName = await getUserData();
    setName(getName.username);
    setEmail(getName.email);
    setTimezone(getName.timezone);
    setRole(getName.role);
  }
  return (
    <>
      <Structure
        username={name}
        email={email}
        timezone={timezone}
        role={role}
      />
    </>
  );
};

export default Profile;
