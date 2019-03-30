import React from 'react';
import classnames from 'classnames';

import {
    withStyles,
    Grid,
    Typography,
    Divider,
    ButtonBase,
} from '@material-ui/core';

import styles from './styles';

import Ambulance from './ambulance.png';

const AmbulanceCard = ({ onClick, data, theme, classes, ...props }) => {

    return (
        <Grid item xs={12} sm={6} md={4}>
            <ButtonBase className={classes.root} onClick={onClick}>
                <div className={classes.cardTitle}>
                    <Typography className={classes.articleTitle} color="secondary">
                        Service Name : {data.name}
                    </Typography>
                </div>

                <div className={classes.cardContent}>
                    <img src={Ambulance} className={classes.articleImage} />
                </div>

                <Divider className={classes.divider} />

                <div className={classes.metaInformation}>
                    <Typography className={classes.metaText}>
                        {/* <People /> */}
                        {/* Driver Name */}
                        Ambulance No. {data.number}
                    </Typography>
                    <Typography className={classes.metaText}>
                        {/* <Timer /> */}
                        {/* 3 min */}
                        Phone: {data.phone}
                    </Typography>
                </div>
                <div className={classes.bottomHighlight} />
            </ButtonBase>
        </Grid>
    )
}

export default withStyles(styles)(AmbulanceCard);