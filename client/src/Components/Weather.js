// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    Weather: {
        width: '80%',
        margin: '2rem 0',
        boxShadow: '0 15px 25px rgba(0,0,0,0.15)',
        border: '1px solid rgba(200,200,200,0.5)',
        borderRadius: '5px',
    },
    Ribbon: {
        backgroundColor: '#5B6C5D',
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
            background: '#465775',
            borderRadius: '20px 0px 0px 20px',
            zIndex: '3'
        },

        '&::after': {
            content: '""',
            position: 'absolute',
            top: '50px',
            width: '30px',
            height: '10px',
            backgroundColor: '#5B6C5D',
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
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '90%',
        margin: '60px auto 2rem auto',
        color: 'rgba(50,50,50)',
        '& *': { width: '100%', margin: '0.5rem 0' },
        '& h3': {
            fontSize: '24px',
        },
    },
    route: {
        marginLeft: '1rem',

        '& p': {
            display: 'inline',
            fontSize: '18px'
        },
        '& i:hover': {
            color: 'red',
            cursor: 'pointer'
        }
    },
    row: {
        margin: '1rem 0',

        '& ul': {
            marginLeft: '2rem'
        }
    },
    post: { 
        color: 'white',
        backgroundColor: 'red',
        padding: '5px 10px',
        borderRadius: '5px',
        marginRight: '1rem',
        display: 'inline',
        fontSize: '18px'
    },
    copyRoute: {
        marginLeft: '1rem',
        display: 'inline',
        fontSize: '18px'
    },
    codeSnippet: {
        width: '100%',
        height: '200px',
        border: '1px solid black',
        display: 'block'
    },
    description: {
        display: 'inline-block'
    }
})

function Weather() {
    const classes = useStyles();

    function copyRoute(e) {
        let route = e.target.previousSibling.innerText;
        navigator.clipboard.writeText(route)
    }
    return (
        <div className={classes.Weather} id='weather'>
            <div className={classes.Ribbon}>
                <h2>Weather</h2>
            </div>
            <div className={classes.content}>
                <h3>Routes:</h3>
                <div className={classes.route}>
                    <div className={classes.row}>
                        <div className={classes.post}>POST</div>
                        <p>https://multi-purpose-api.herokuapp.com/api/weather/</p>
                        <i 
                            className={`far fa-copy ${classes.copyRoute}`}
                            onClick={copyRoute}
                        ></i>
                    </div>
                    <div className={classes.row}>
                        <p>
                            Returns JSON file with weather data and location data. 
                            Weather data comes from the openweather api one call.
                            Location data comes from using the reverse geolocation api from
                            node-geocoder.
                            <br/>
                            <a 
                                href='https://openweathermap.org/api/one-call-api/#example' 
                                target="_blank" rel="noreferrer noopener"
                            >Example of Weather data</a> <br/>
                            <a 
                                href='https://www.npmjs.com/package/node-geocoder' 
                                target="_blank" rel="noreferrer noopener"
                            >Example of Location data</a> 

                        </p>
                    </div>
                    <div className={classes.row}>
                        <p>
                            Post request requires 4 variables in the request body.
                        </p>
                        <ul>
                            <li>lat: 33.44</li>
                            <li>lon: 94.04</li>
                            <li>units: standard, metric or imperial</li>
                            <li>lang: en</li>
                        </ul>
                    </div>
                </div>
                <div className={classes.route}>
                    <div className={classes.row}>
                        <div className={classes.post}>POST</div>
                        <p>https://multi-purpose-api.herokuapp.com/api/weather/geolocation</p>
                        <i 
                            className={`far fa-copy ${classes.copyRoute}`}
                            onClick={copyRoute}
                        ></i>
                    </div>
                    <div className={classes.row}>
                        <p>
                            Returns JSON file with location data derived from the node-geocoder.
                            <br/>
                            <a 
                                href='https://www.npmjs.com/package/node-geocoder' 
                                target="_blank" rel="noreferrer noopener"
                            >Example of Location data</a> 
                        </p>
                    </div>
                    <div className={classes.row}>
                        <p>
                            Post request requires 2 variables in the request body. Use Zipcode for best results.
                        </p>
                        <ul>
                            <li>Country Code: US</li>
                            <li>Address: City or zipcode.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
