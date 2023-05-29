import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./infrastructure/components/navbar";
import Register from "./presentation/authentification/register/register";
import Login from  "./presentation/authentification/login/login"
import Task from "./presentation/task/task";
import Dashboard from "./presentation/dashboard/dashboard";
import Profile from "./presentation/profile/profile";
import Footer from "./infrastructure/components/footer";
import "./tailwind.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Task />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
