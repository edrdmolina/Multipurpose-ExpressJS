// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Styles
import BannerImage from '../Images/BannerImage.jpg';
const useStyles = createUseStyles({
    Banner: {
        height: '50vh',
        width: '100%',
        backgroundImage: `url(${BannerImage})`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',


        '& h1': {
            fontSize: '50px',
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.75)',
            display: 'inline',
            padding: '3rem',
            borderRadius: '10px',
            textAlign: 'center',
            animation: '$reveal 1.5s ease-in forwards'
        }
    },
    '@keyframes reveal': {
        from: { opacity: '0'},
        to: { opacity: '1'},
    }
})

function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.Banner}>
            <h1>Multipurpose Express API</h1>
        </div>
    )
}

export default Banner
