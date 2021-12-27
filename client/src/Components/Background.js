// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    Background: {
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#034078',
        zIndex: '-100'
    }
})

function Background() {
    const classes = useStyles();
    return <div className={classes.Background} />
}

export default Background
