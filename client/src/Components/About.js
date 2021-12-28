// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    About: {
        width: '80%',
        height: '250px',
        margin: '2rem 0',
        boxShadow: '0 15px 25px rgba(0,0,0,0.15)',
        border: '1px solid rgba(200,200,200,0.5)',
        borderRadius: '5px',

        '& p': {
            height: '75%',
            width: '90%',
            marginTop: '60px',
            marginLeft: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(50,50,50)',
            textIndent: '1rem',
            fontSize: '18px',
        }
    },
    Ribbon: {
        backgroundColor: '#1282A2',
        height: '50px',
        width: '200px',
        borderRadius: '15px 5px 5px 0px',
        boxShadow: '2px 2px 5px rgba(0,0,0,0.5)',
        position: 'relative',
        top: '30px',
        left: '-30px',

        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50px',
            width: '30px',
            height: '20px',
            background: 'hsl(193,80%,25%)',
            borderRadius: '20px 0px 0px 20px',
            zIndex: '3'
        },

        '&::after': {
            content: '""',
            position: 'absolute',
            top: '50px',
            width: '30px',
            height: '10px',
            backgroundColor: '#1282A2',
            zIndex: '2'
        },

        '& h2': {
            color: 'white',
            fontSize: '32px',
            display:  'flex',
            height: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        },
    },

})

function About() {
    const classes = useStyles();
    return (
        <div className={classes.About} id='About'>
            <div className={classes.Ribbon}>
                <h2>About</h2>
            </div>
            <p>
                The Multipurpose Express API was designed to serve as a flexible back-end server for
                multiple front-end projects. The API has multiple routes that anyone can use. Below are
                the instructions to use the API routes for Weather and Chuck Norris jokes.
                
                
            </p>
        </div>
    )
}

export default About
