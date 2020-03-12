import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';



function getBaseURL() {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : ''
}


function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("api/welcome?name=myEmperor")
      .then(res => res.json())
      .then(greeting => setGreeting(greeting))
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <h1>Hosted might Emperor on heroku </h1>
      <header className="App-header">{greeting}</header>
    </div>
  );
}

export default App;