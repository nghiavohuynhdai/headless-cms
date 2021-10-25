import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import feature1 from "../../assets/img/new-home/Practice-with-repeated.png";
import feature2 from "../../assets/img/new-home/Access-yourself-with.png";
import feature3 from "../../assets/img/new-home/Self-study-with-AI.png";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";

const useStyles = makeStyles(theme => ({
  ...teamsStyle,
  root: {
    marginTop: 120,
    [theme.breakpoints.down("sm")]: {
      marginTop: 60,
      padding: "0px 30px"
    },
  },
  sectionHeader: {
    marginBottom: 100,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 40
    },
    "& h2": {
      textTransform: "uppercase",
      fontSize: 14,
      lineHeight: 1.2,
      fontWeight: 700,
      color: "rgb(255, 208, 0)",
      margin: 0,
    },
    "& h3": {
      fontSize: 24,
      fontWeight: 500,
      color: "rgb(15, 33, 55)",
      marginTop: 5,
      lineHeight: 1.67,
      [theme.breakpoints.down("sm")]: {
        fontSize: 20
      },
    },
  },
  gridItem: {
    padding: "0 35px",
    "& img": {
      width: "30%",
    },
    "& h4": {
      fontSize: 20,
      fontWeight: 400,
      margin: "35px 0px 20px",
    },
    "& p": {
      fontSize: 15,
      fontWeight: 400,
      marginBottom: "16px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
  },
}));

const ThirdSection = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.container}`}>
      <div className={classes.sectionHeader}>
        <h2>wHAT'S IN IT FOR YOU?</h2>
        <h3>This PTE tool will help you</h3>
      </div>
      <Grid container>
        <Grid item xs={12} md={4} sm={6} className={classes.gridItem}>
          <img src={feature1} alt="feature-1" />
          <h4>Practice with repeated PTE questions</h4>
          <p>
            PTE question banks are updated regularly and are collected by the PTE aspirants community
            from the real exams. The questions are also sorted according to their frequency repetition rate.
          </p>
        </Grid>
        <Grid item xs={12} md={4} sm={6} className={classes.gridItem}>
          <img src={feature2} alt="feature-2" />
          <h4>Access yourself with Practice Tests</h4>
          <p>
            Magic PTE Mock Tests are designed to simulate te actual PTE Exam testing experience 
            to help users familiarize themselves with the test patterns and identify weaknesses using score reports.
          </p>
        </Grid>
        <Grid item xs={12} md={4} sm={12} className={classes.gridItem}>
          <img src={feature3} alt="feature-3" />
          <h4>Self-study with AI scoring</h4>
          <p>
            This Practice Test platform has been designed with AI (Artificial Intelligence) feature.
            AI scoring means that test takers will be marked by the automated system which mimics the real
            scoring algorithm.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ThirdSection;
