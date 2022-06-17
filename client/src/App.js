import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Board from './Board';
import Home from './Home';
import NavBar from './NavBar';
import Chat from './Chat';
import Git from './Git';
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
          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
