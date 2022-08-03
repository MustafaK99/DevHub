import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Board from './pages/Board/Board';
import Home from './pages/Home';
import NavBar from './components/Navbar/NavBar';
import Chat from './pages/Chat';
import Git from './pages/Git';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register/Register';

function App() {
  return (

    <div className="App">
      <div className="content">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/board" element={<Board/>} />
            <Route path="/chat" element={<Chat/>} />
            <Route path='/git' element={<Git/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/Register' element={<Register/>} />


          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
