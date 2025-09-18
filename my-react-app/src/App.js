import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Fix typo here
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Button from './examples/Button';
import Footer from './examples/Fooder';
import Header from './examples/Fooder';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response =>
        setData(response.data))
      .catch(error =>
        console.log('Error fetching data', error));
  }, []);



  return (
    <div>
      <Header />
      <h1>My React App</h1>
      <ul>
        {data.map(post => (
          <li
            key={post.id}>{post.title}
          </li>
        ))}
      </ul>
      <Button lable="Click me!" />
      <Footer />
    </div>
  );
}

export default App;
