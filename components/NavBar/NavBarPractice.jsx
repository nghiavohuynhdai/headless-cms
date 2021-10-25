import React from 'react'
//material-ui core
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';

//img
import logo from "assets/img/pte_magic_logo.svg"

const useStyles = makeStyles({
  root: {
    backgroundColor: "#ffbe2e3d",
    width: "100%",
    padding: "10px 0px 10px 20%",
  },
  logo: {
    width: "102px",
    height: "40px"
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "normal",
    color: "#000000",
    marginTop: "10px",
    marginLeft: "10px"
  }
});

export default function NavBarPractice(props) {
  let {
    title
  } = props
  const classes = useStyles()
  return (
    <Grid container direction="row" className={classes.root}>
      <Grid item>
        <img src={logo} alt="logo" className={classes.logo}/>
      </Grid>
      <Grid item className={classes.title}>
        {title}
      </Grid>
    </Grid>
  )
}