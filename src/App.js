import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Todo from './components/Todo';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import API from './components/API';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/Calculator" element={<Calculator />} />
          <Route path="/List" element={<Todo />} />
          <Route path="/API" element={<API />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
