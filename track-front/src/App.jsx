import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./infrastructure/components/default/navbar";
import Register from "./presentation/authentification/register/register";
import Login from  "./presentation/authentification/login/login"
import Tasks from "./presentation/task/tasks";
import Dashboard from "./presentation/dashboard/dashboard";
import Profile from "./presentation/profile/profile";
import Footer from "./infrastructure/components/default/footer";
import UpdateProfile from "./presentation/profile/update/profile";
import UpdatePassword from './presentation/profile/update/password'
import "./tailwind.css";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Tasks />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile/update" element={<UpdateProfile />} />
        <Route path="/Profile/updatePassword" element={<UpdatePassword />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
