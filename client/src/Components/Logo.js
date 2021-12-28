// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Images
import Logo2 from '../Images/Logo2.png';

// Styles
const useStyles = createUseStyles({
    Logo: {
        height: '150px',
        width: '150px',
        margin: '0px auto',
        border: '1px solid black',
        borderRadius: '25%',
        padding: '25px 20px 20px 20px',
        backgroundColor: 'rgba(0,0,0,0.75)',
        boxShadow: '5px 5px 25px black',
        animation: '$reveal 1.5s ease-in forwards'
    },
    '@keyframes reveal': {
        from: { opacity: '0'},
        to: { opacity: '1'},
    }
})

function Logo() {
    const classes = useStyles();
    return <img src={Logo2} alt='Logo' className={classes.Logo} />
}

export default Logo
