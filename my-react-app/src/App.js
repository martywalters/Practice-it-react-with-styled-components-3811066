import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Fix typo here
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <h1>Welcome to My React App!</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
