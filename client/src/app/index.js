import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'; 
import { BrowserRouter as Router } from 'react-router-dom';
import {
    withStyles,
    CssBaseline,
    MuiThemeProvider,
} from '@material-ui/core';

import AppBar from './appbar';

import UserLogin from './pages/user-login';
import AdminLogin from './pages/admin-login';
import User from './pages/user';
import Admin from './pages/admin';

import styles from './styles';
import theme from './theme';

class App extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline />

                <Router>
                    <div className={classes.root}>
                        <div>
                            <AppBar />
                        </div>

                        <div className={classes.main}>
                            <Switch>
                                <Route exact path="/userLogin" component={UserLogin} />
                                <Route exact path="/adminLogin" component={AdminLogin} />
                                <Route path="/user" component={User} />
                                <Route path="/admin" component={Admin} />
                                <Route render={() => <Redirect to="/userLogin" />} />
                            </Switch>
                        </div>

                    </div>
                </Router>

            </MuiThemeProvider>
        )
    }
}

export default withStyles(styles)(App);
