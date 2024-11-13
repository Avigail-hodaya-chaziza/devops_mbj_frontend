import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const fetchData = () => {
    fetch('http://localhost:5000/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="App">
      <header className="App-header">
<<<<<<< HEAD
        <h1>Welcome to avigail-chziza React App</h1>
=======
        <h1>Welcome to React App</h1>
>>>>>>> 3f1395ea5c3be6dbfa97eedc4fa44fb94018e5c5
        <button /*onClick={fetchData}*/ className="fetch-button">Fetch backend</button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
