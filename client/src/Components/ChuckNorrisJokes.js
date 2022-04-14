// Libraries
import React from 'react';
import { createUseStyles } from 'react-jss';

// Styles
const useStyles = createUseStyles({
    ChuckNorrisJokes: {
        width: '80%',
        margin: '2rem 0',
        boxShadow: '0 15px 25px rgba(0,0,0,0.15)',
        border: '1px solid rgba(200,200,200,0.5)',
        borderRadius: '5px',
    },
    Ribbon: {
        backgroundColor: '#5B6C5D',
        height: '50px',
        width: '375px',
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
    routeRow: { margin: '1rem 0' },
    get: { 
        color: 'white',
        backgroundColor: 'green',
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
    '@media (max-width: 992px)': {
        routeRow: {
            display: 'flex',
            flexDirection: 'column'
        },
        get: { 
            maxWidth: '35px',
        }
    }
})

function ChuckNorrisJokes() {
    const classes = useStyles();

    function copyRoute(e) {
        let route = e.target.previousSibling.innerText;
        navigator.clipboard.writeText(route)
    }
    return (
        <div className={classes.ChuckNorrisJokes} id='chuckNorris'>
            <div className={classes.Ribbon}>
                <h2>Chuck Norris Jokes</h2>
            </div>
            <div className={classes.content}>
                <h3>Routes:</h3>
                <div className={classes.route}>
                    <div className={classes.routeRow}>
                        <div className={classes.get}>GET</div>
                        <p>https://multi-purpose-api.herokuapp.com/api/jokes/</p>
                        <i 
                            className={`far fa-copy ${classes.copyRoute}`}
                            onClick={copyRoute}
                        />
                        
                    </div>
                    <div className={classes.row}>
                        <p>
                            Returns a JSON file with a list of 90 Chuck Norris Jokes.
                            All jokes derived from web scraping
                            <a 
                                href='https://deadliestjokes.fandom.com/wiki/Chuck_Norris' 
                                target="_blank" rel="noreferrer noopener"
                            > Deadliest Jokes Wiki</a> using 
                            <a 
                                href='https://www.npmjs.com/package/cheerio' 
                                target="_blank" rel="noreferrer noopener"
                            > cheerio</a>.
                        </p>
                    </div>
                </div>
                <div className={classes.route}>
                    <div className={classes.routeRow}>
                        <div className={classes.get}>GET</div>
                        <p>https://multi-purpose-api.herokuapp.com/api/jokes/joke</p>
                        <i 
                            className={`far fa-copy ${classes.copyRoute}`}
                            onClick={copyRoute}
                        />
                    </div>
                    <div className={classes.row}>
                        <p>
                            Returns a JSON file with a single random joke from a list of 90 Chuck Norris Jokes.
                            All jokes derived from web scraping
                            <a 
                                href='https://deadliestjokes.fandom.com/wiki/Chuck_Norris' 
                                target="_blank" rel="noreferrer noopener"
                            > Deadliest Jokes Wiki</a> using 
                            <a 
                                href='https://www.npmjs.com/package/cheerio' 
                                target="_blank" rel="noreferrer noopener"
                            > cheerio</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChuckNorrisJokes
