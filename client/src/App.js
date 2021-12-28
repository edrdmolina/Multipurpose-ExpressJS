// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Components
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import About from './Components/About';
import Weather from './Components/Weather';
import ChuckNorrisJokes from './Components/ChuckNorrisJokes';

// Styles
const useStyles = createUseStyles({
  App: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  Main: {
    width: '100%',
    maxWidth: '1400px',
    boxShadow: '0px 0px 10px 10px rgba(0,0,0,0.5)',
    minHeight: '100vh',
    backgroundColor: '#F7EDF0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      < Navbar />
      <main className={classes.Main}>
        < Banner />
        < About />
        < Weather />
        < ChuckNorrisJokes />
      </main>
    </div>
  );
}

export default App;
