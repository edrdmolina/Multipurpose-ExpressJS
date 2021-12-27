// Libraries
import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import axios from 'axios';

// Components
import Background from './Components/Background';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';

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
    backgroundColor: '#FEFCFB'
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
      < Background />
      <main className={classes.Main}>
        < Navbar />
        < Banner />
      </main>
    </div>
  );
}

export default App;
