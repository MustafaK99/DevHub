import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Board from './Board';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  return (

    <div className="App">
      <div className="content">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/board" element={<Board/>} />

          </Routes>

        </Router>
      </div>
    </div>
  );
}

export default App;
