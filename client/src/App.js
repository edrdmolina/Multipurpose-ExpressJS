import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  useEffect(() => getData());

  async function getData() {
    const res = await axios.get('/api/jokes/joke');
    console.log(res)
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;