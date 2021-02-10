import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./HomeNav.css";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function SignButton() {
    return(
        <a href="/signup" id="sign-link"><Button variant="outlined" id="sign">sign up</Button></a>
    );
}