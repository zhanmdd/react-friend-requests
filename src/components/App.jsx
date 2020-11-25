import React from "react";
import Header from "./Header";
import {Grid} from "@material-ui/core";
import Content from './Content';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: "#f4f4f2",
        minHeight: "100vh"
    }
});    

const App = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} direction="column">
            <Grid item><Header/></Grid>
            <Grid item  container>
                <Grid item xs={false} sm={2}/>
                <Grid item container xs={12} sm={8}>
                    <Content/>
                </Grid>
                <Grid item xs={false} sm={2}/>
            </Grid>
        </Grid>
    );
};

export default App;