// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Components


// Styles
const useStyles = createUseStyles({
    Navbar: {
        width: '100%',
        height: '50px',
        backgroundColor: '#0A1128',
        position: 'sticky',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'rgba(255,255,255,0.5)'
        },
        '& a:hover': {
            color: 'white'
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
