import React from 'react';
import classnames from 'classnames';

import {
    withStyles,
    Grid,
    Typography,
    ButtonBase,
} from '@material-ui/core';

import styles from './styles';

import Ambulance from './ambulance.png';

const AddAmbulanceCard = ({ data, onClick, theme, classes, ...props }) => {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <ButtonBase className={classes.root} onClick={onClick}>
                <div className={classes.cardTitle}>
                    <Typography className={classes.articleTitle} color="secondary" style={{ textAlign: 'center' }}>
                        Add new service
                    </Typography>
                </div>

                {/* <div className={classes.cardContent}>
                    <img src={Ambulance} className={classes.articleImage} />
                </div> */}

                <div className={classes.bottomHighlight} />
            </ButtonBase>
        </Grid>
    )
}

export default withStyles(styles)(AddAmbulanceCard);