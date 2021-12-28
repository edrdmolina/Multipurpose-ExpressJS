// Libraries
import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import axios from 'axios';

// Components
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';

// Styles
const useStyles = createUseStyles({
  App: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Main: {
    width: '100%',
    maxWidth: '1200px',
    boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.5)',
    minHeight: '100vh',
    backgroundColor: '#FEFCFB',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

function App() {
  const classes = useStyles();
  useEffect(() => getData());

  async function getData() {
    const res = await axios.get('/api/jokes/joke');
    console.log(res)
  }

  return (
    <div className={classes.App}>
      < Navbar />
      <main className={classes.Main}>
        < Banner />
        < About />
      </main>
    </div>
  );
}

export default App;
