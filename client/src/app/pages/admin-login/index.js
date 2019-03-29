import React from 'react';
import {
    withStyles,
    Paper,
    Typography,
    Divider,
    TextField,
    Button,
    Fade,
} from '@material-ui/core';

import styles from './styles';

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: "", 
        },
    }

    componentDidMount() {

    }

    handleForm = name => event => this.setState({
        credentials: {
            ...this.state.credentials,
            [name]: [event.target.value],
        },
    })

    render() {
        const { classes } = this.props;

        const { credentials } = this.state;

        return (
            <Fade in={true}>
                <div className={classes.pageRoot}>
                    <Paper className={classes.formContainer}>
                        <div className={classes.formWrapper}>
                            <Typography variant="h6" className={classes.formTitle}>Admin Login</Typography>
                            <Divider variant="middle" className={classes.formDivider} />
                            <form>
                                <TextField 
                                    onChange={this.handleForm('username')} 
                                    className={classes.formControl}
                                    inputProps={{
                                        className:classes.textFieldInput,
                                    }} 
                                    variant="outlined" 
                                    label="Username" 
                                    value={credentials.username}
                                    autoCorrect="off" 
                                    autoCapitalize="off" 
                                    spellCheck="false"
                                    autoFocus />
                                <TextField 
                                    onChange={this.handleForm('password')} 
                                    className={classes.formControl}
                                    inputProps={{
                                        className:classes.textFieldInput,
                                    }} 
                                    variant="outlined" 
                                    type="password" 
                                    label="Password" 
                                    value={credentials.password} 
                                    autoCorrect="off" 
                                    autoCapitalize="off" 
                                    spellCheck="false" />
                                <Button 
                                    type="submit" 
                                    className={classes.formControl} 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={this.login} >
                                    Login
                                </Button>
                            </form>
                        </div>
                    </Paper>
                </div>
            </Fade>
        )
    }
}

export default withStyles(styles)(Login);