import React from 'react';
import {Grid} from '@material-ui/core';
import Requests from './Requests';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#fff",
        margin: "10px 0",
        borderRadius: "10px",
        border: "1px solid #e8e8e8"
    }
});  

const Content = () => {
    const classes = useStyles();
    return (
        <Grid item container className={classes.root} spacing={3}>
            <Grid item xs={12}>
            <Typography variant="h5" >
                    Your Requests
            </Typography>
            </Grid>
            <Requests/>
        </Grid>
    );
}

export default Content;