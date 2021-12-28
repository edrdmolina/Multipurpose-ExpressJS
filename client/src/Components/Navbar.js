// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Components


// Styles
const useStyles = createUseStyles({
    Navbar: {
        width: '100%',
        maxWidth: '1400px',
        height: '5vh',
        // backgroundColor: '#0A1128',
        backgroundColor: '#465775',
        position: 'fixed',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: '20',
        '& a': {
            textDecoration: 'none',
            color: 'rgba(255,255,255,0.75)',
            fontSize: '20px'
        },
        '& a:hover': {
            color: 'rgba(255,255,255,1)',
        }
    }
})

function Navbar() {
    const classes = useStyles()
    return (
        <div className={classes.Navbar}>
            <a href='#about'>About</a>
            <a href='#weather'>Weather</a>
            <a href='#chuckNorris'>Chuck Norris Jokes</a>
        </div>
    )
}

export default Navbar
