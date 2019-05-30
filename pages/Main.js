import React from 'react';
import LazyHero from 'react-lazy-hero';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function MyLandingPage() {

  const classes = useStyles();

  return (
        <div>
          <LazyHero imageSrc="/static/inuyasha.jpg">
          </LazyHero>

          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" className={classes.title}>
                  Home
                </Typography>  
                <Link href="/">
                  <Button color="inherit">
                    Login
                  </Button>
                </Link>
              </Toolbar>
            </AppBar>
            
          </div>
        </div>
    
  );
}

export default MyLandingPage;