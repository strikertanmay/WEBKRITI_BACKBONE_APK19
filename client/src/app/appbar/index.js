import React from 'react';
import classnames from 'classnames';

import { Link } from 'react-router-dom';

import {
    withStyles,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
} from '@material-ui/core';

import {
    Person,
} from '@material-ui/icons';

import styles from './styles';

const Appbar = ({ isLoggedIn, className, classes, ...props }) => {
    return (
        <AppBar 
            className={classnames(classes.root, className)}
            {...props}
        >
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.title}>
                    Ambulance Service
                </Typography>
                
                <Link to="/login">
                    <IconButton onClick={() => {}}>
                        <Person className={classes.icon} />    
                    </IconButton>
                </Link>
            
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(styles)(Appbar);