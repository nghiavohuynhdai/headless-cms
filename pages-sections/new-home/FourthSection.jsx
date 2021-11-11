import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import questionBankView from "assets/img/new-home/question-bank-view.png";
import mockTestView from "assets/img/new-home/mock-test-view.png";
import tipsView from "assets/img/new-home/tips-view.png";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import dashboard from "../../assets/img/new-home/demodashboard.jpg";
import questionbank from "../../assets/img/new-home/demoquestionbank.png";
import mocktest from "../../assets/img/new-home/demomocktest.jpg";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  ...teamsStyle,
  root: {
    padding: "200px 0px",
    overflowX: "hidden",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      padding: "30px 0px",
    },
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
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
  signUpContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButton: {
    backgroundColor: "#fadb06",
    border: "1px solid #fadb06",
    color: "#000000",
    height: "100%",
    minWidth: "150px",
    padding: "8px 22px",
    height: "46px",
    "&:hover": {
      backgroundColor: "#fadb06",
      border: "1px solid #fadb06",
      color: "#000000",
    },
  },
  gridImage: {
    position: "relative",
    backgroundImage:
      "url(https://react-next-landing.redq.io/_next/static/images/dash-bg-991ef0dbfb3602f17696c4bcc4b8e45d.png)",
    backgroundPosition: "left bottom",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    padding: "50px 0px 60px !important",
    [theme.breakpoints.down("sm")]: {
      margin: "0 30px",
    },
  },
  gridContent: {
    paddingLeft: "150px !important",
    "& h2": {
      fontSize: "30px",
      fontWeight: 400,
    },
    "& p": {
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: 2,
      marginBottom: 20,
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 30px !important",
      "& h2": {
        fontSize: "26px",
        fontWeight: 400,
      },
      "& p": {
        fontSize: "15px",
        fontWeight: 300,
        lineHeight: 2,
        marginBottom: 20,
      },
    },
  },
  imageMocktest: {
    width: "100%",
    boxShadow:
      "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important",
  },
  imageBelow: {
    boxShadow:
      "0 10px 16px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%) !important",
    width: "50%",
    position: "absolute",
    left: "58%",
    top: "61%",
    [theme.breakpoints.down("sm")]: {
      left: "50%",
    },
    overflowX: "hidden",
  },
}));

const FourthSection = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} md={6} className={classes.gridImage}>
          <Slide direction={"right"} in={true} timeout={700}>
            <img src={mocktest} className={classes.imageMocktest} />
          </Slide>
          <Slide direction={"up"} in={true} timeout={900}>
            <img src={dashboard} className={classes.imageBelow} />
          </Slide>
        </Grid>
        <Grid item xs={12} md={5} className={classes.gridContent}>
          {/* <h2>Complete mock tests and check your scores with detailed analysis.</h2>
          <p>
            A score report will be automatically generated after each exam attemp which clearly displays
            communicative, enabling as well as the overall score, thus help users identify strengths 
            and tackle weaknesses. This mock exam's structure is similar to the actual pte test.
          </p> */}
          <div
            dangerouslySetInnerHTML={{
              __html: props.data.saveContent,
            }}
          ></div>
          <Link href="/platform">
            <Button className={classes.signUpButton}>HOW IT WORKS</Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default FourthSection;
