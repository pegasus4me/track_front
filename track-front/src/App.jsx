import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./infrastructure/components/navbar";
import Register from "./presentation/authentification/register/register";
import Login from  "./presentation/authentification/login/login"
import "./tailwind.css";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
