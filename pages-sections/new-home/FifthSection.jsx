import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import template from "../../assets/img/new-home/Essential-pte-template.png";
import guide from "../../assets/img/new-home/Guide-with-tips.png";
import community from "../../assets/img/new-home/PTE-community.png";
import answer from "../../assets/img/new-home/real-answer.png";
import scoring from "../../assets/img/new-home/AI-Scoring.png";
import coaching from "../../assets/img/new-home/PTE-coaching.png";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";

const useStyles = makeStyles(theme => ({
  ...teamsStyle,
  root: {
    marginTop: 120,
    [theme.breakpoints.down("sm")]: {
      marginTop: 50
  },
  },
  sectionHeader: {
    marginBottom: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: 60
  },
    "& img": {
      maxWidth: 550,
      width: "100%",
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
    },
  },
  textField: {
    border: "1px solid #000000",
    height: "36px",
    padding: 10,
    maxWidth: 277,
    width: "100%",
    borderRadius: 5,
    marginRight: 15,
  },
  signUpContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 14,
  },
  signUpButton: {
    backgroundColor: "#e16259",
    border: "1px solid #000000",
    color: "#ffffff",
    maxHeight: 36,
    height: "100%",
    width: 76,
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#e16259",
      border: "1px solid #000000",
      color: "#ffffff",
    },
  },
  gridItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0 30px",
    margin: "0px 0px 70px",
    "& img": {
      paddingRight: 20,
      width: "27%",
    },
    "& h4": {
      fontSize: 20,
      fontWeight: 400,
      lineHeight: 1.5,
      color: "rgb(15, 33, 55)",
      marginBottom: 15,
    },
    "& p": {
      fontSize: "15px",
      color: "rgb(93, 100, 109)",
      marginBottom: "0px",
      marginTop: "0px",
      fontWeight: 400,
      lineHeight: 1.88,
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0px 0px 50px"
  },
  },
}));

const FifthSection = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.root} ${classes.container}`}>
      <div className={classes.sectionHeader}>
        <h2>TOP-NOTCH FEATURES</h2>
        <h3>to help you succeed with PTE Academic</h3>
      </div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <img src={template} alt="light" />
          <div>
            <h4>Essential PTE templates</h4>
            <p>
              Download our templates which you can easily apply in the real test in order to
              avoid making grammartical or word-choice errors and score higher
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <img src={guide} alt="award" />
          <div>
            <h4>PTE guide with tips and tricks</h4>
            <p>
              Grab our Ebook with exam structure and score breakdown for
              PTE Speaking, Writing, Reading and Listening for better time management
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <img src={community} alt="mail" />
          <div>
            <h4>PTE community</h4>
            <p>
              Join our PTE groups to discuss recent test questions, share knowledge and tips
              on how to get 60, 65 or 79 with other aspirants
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <img src={answer} alt="heartchat" />
          <div>
            <h4>Real questions with answers</h4>
            <p>
              Check your answers for all 4 modules after each tasks to evaluate your performance indentify areas
              for improvements
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <img src={scoring} alt="target" />
          <div>
            <h4>AI scoring for Speaking & Writing-related tasks</h4>
            <p>
              Practice and receive scores for Pronunciation, Fluency, and Content in Speaking
              as well as Grammar and Spelling in Writing
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.gridItem}>
          <img src={coaching} alt="shakehand" />
          <div>
            <h4>PTE coaching and video courses</h4>
            <p>
              Enrol in our PTE classes if you need extra support or grab 2-hour
              Express Video course which covers all essential strategies
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default FifthSection;
