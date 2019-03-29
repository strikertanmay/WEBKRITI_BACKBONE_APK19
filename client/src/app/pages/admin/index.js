import React from 'react';
import { Link } from 'react-router-dom';
import {
    withStyles,
    Paper,
    Typography,
    Divider,
    TextField,
    Button,
    Fade,
    Grid,
} from '@material-ui/core';

import AddAmbulanceCard from '../../add-ambulance-card';
import AmbulanceCard from '../../ambulance-card';

import styles from './styles';

class Admin extends React.Component {
    constructor(props) {
        super(props);                                                                                                                                   

        this.state = {
            selected: {},
            showSelected: false,
            list: [
                {
                    name: "A-one",
                    number: "54545",
                    phone: "9898989898",
                },
                {
                    name: "B-two",
                    number: "54542",
                    phone: "9898989898",
                },
                {
                    name: "C-three",
                    number: "5454312",
                    phone: "9898989898",
                },
            ],
            service: {
                name: "",
                number: "",
                phone: "",
            },
            editing: false,
        }
    }

    componentDidMount() {
        // fetch list
    }

    handleForm = name => event => this.setState({
        service: {
            ...this.state.service,
            [name]: [event.target.value],
        },
    })

    openAddService = (service, index) => () => {
        console.log(service);

        let editService = service;

        if(!editService) {
            editService = {
                name: "",
                number: "",
                phone: "",
            }
        }

        console.log(editService);

        this.setState({
            editing: true,
            service: editService,
        });
    }

    addService = () => {
        this.setState({
            list: this.state.list.push({
                ...this.state.service,
            }),
            editing: false,
        })
    }

    render() {
        const { classes } = this.props;

        const {
            selected,
            showSelected,
            list,
            service,
            editing,
        } = this.state;

        return (
            <Fade in={true}>
                <div className={classes.pageRoot}>
                    <Typography>
                        {
                            !editing && "Please select from one of the following ambulance services" 
                        }
                    </Typography>

                    {
                        !editing ?

                        <Grid container spacing={24} className={classes.cardContainer}>
                            {
                                list.map((ambulance, index) => <AmbulanceCard key={index} data={ambulance} onClick={this.openAddService(ambulance, index)} />)
                            }

                            <AddAmbulanceCard onClick={this.openAddService()} />          
                        </Grid> :

                        <Grid container spacing={24} 
                            className={classes.cardContainer}
                            style={{
                                position: 'relative',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexGrow: 2,
                            }} >
                            <span>
                                
                            </span>

                            <Paper className={classes.formContainer}>
                                <div className={classes.formWrapper}>
                                    <Typography variant="h6" className={classes.formTitle}>
                                        Service
                                    </Typography>
                                    <Divider variant="middle" className={classes.formDivider} />
                                    <form>
                                        <TextField 
                                            onChange={this.handleForm('name')} 
                                            className={classes.formControl}
                                            inputProps={{
                                                className:classes.textFieldInput,
                                            }} 
                                            variant="outlined" 
                                            label="Ambulance Name" 
                                            value={service.name}
                                            autoCorrect="off" 
                                            autoCapitalize="off" 
                                            spellCheck="false"
                                            autoFocus />
                                        
                                        <TextField 
                                            onChange={this.handleForm('number')} 
                                            className={classes.formControl}
                                            inputProps={{
                                                className:classes.textFieldInput,
                                            }} 
                                            variant="outlined" 
                                            type="number" 
                                            label="Ambulance Number" 
                                            value={service.number} />

                                        <TextField  
                                            onChange={this.handleForm('phone')} 
                                            className={classes.formControl}
                                            inputProps={{
                                                className:classes.textFieldInput,
                                            }} 
                                            variant="outlined" 
                                            type="number" 
                                            label="Phone Number" 
                                            value={service.phone}  />

                                        <Button 
                                            type="submit" 
                                            className={classes.formControl} 
                                            variant="contained" 
                                            color="primary"
                                            onClick={this.addService} >
                                            Submit
                                        </Button>
                                    </form>                                     

                                </div>
                            </Paper>
                        </Grid>
                    }

                </div>
            </Fade>
        )
    }
}

export default withStyles(styles)(Admin);