import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./components/Navbar/NavBar";
import Board from "./pages/Board/Board";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Git from "./pages/Git";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Project from "./pages/Project/Project";
import Projects from "./pages/Projects/Projects";
import Register from "./pages/Register/Register";
import NewProject from "./pages/Project/NewProject";
import ProjectEdit from "./pages/Project/ProjectEdit";
import Epics from "./pages/Epics/Epics";
import ViewProject from "./pages/Project/ViewProject";
import NewEpic from "./pages/Epic/NewEpic";
import EditEpic from "./pages/Epics/EpicEdit";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/board" element={<Board />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/git" element={<Git />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/project" element={<Project />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/NewProject" element={<NewProject />} />
            <Route path="/EditProject" element={<ProjectEdit />} />
            <Route path="/ViewProject" element={<ViewProject />} />
            <Route path="/Epics" element={<Epics />} />
            <Route path="/NewEpic" element={<NewEpic />} />
            <Route path="/EditEpic" element={<EditEpic />} />
          </Routes>
        </Router>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
