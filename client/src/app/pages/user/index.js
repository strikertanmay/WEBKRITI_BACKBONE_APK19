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

import AmbulanceCard from '../../ambulance-card';

import styles from './styles';

class User extends React.Component {
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
        }
    }

    componentDidMount() {
        // fetch list
    }

    chooseService = service => () => {
        this.setState({
            selected: service,
            showSelected: true,
        })
    }

    render() {
        const { classes } = this.props;

        const {
            selected,
            showSelected,
            list,
        } = this.state;

        return (
            <Fade in={true}>
                <div className={classes.pageRoot}>
                    <Typography>
                        {
                            !showSelected && "Please select from one of the following ambulance services."
                        }
                    </Typography>

                    {
                        !showSelected ?

                        <Grid container spacing={24} className={classes.cardContainer}>
                            
                            {
                                list.map((ambulance, index) => <AmbulanceCard key={index} data={ambulance} onClick={this.chooseService(ambulance)} />)
                            }

                        </Grid> :

                        <Grid container spacing={24} 
                        className={classes.cardContainer}
                        style={{
                            position: 'relative',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexGrow: 2,
                        }} >
                            <Typography
                                style={{
                                    position: "absolute",
                                    top: 160,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    fontWeight: "bold",
                                }}
                            >
                                You've selected the following.
                            </Typography>
                    
                            <AmbulanceCard data={selected}/>  
                        </Grid>
                    }

                </div>
            </Fade>
        )
    }
}

export default withStyles(styles)(User);