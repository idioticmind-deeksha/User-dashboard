import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Project from "./dashboard/Project";
import Report from "./dashboard/Report";
import Profile from "./dashboard/Profile";

function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/project" element={<Project />}/>
      <Route path="/report" element={<Report />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
