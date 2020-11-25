import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    buttonStyle: {
        color: "red",
        border: "1px solid black"
    }
});

export default function SampleButton(){
    const classes = useStyles();

    return <Button className={classes.buttonStyle}>Small Button</Button>
}