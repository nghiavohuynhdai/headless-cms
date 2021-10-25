import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import { Grid } from "@material-ui/core";
import logoclient from "../../assets/img/new-home/logoclients.png";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  ...teamsStyle,
  root: {
    padding: "120px 0px",
    backgroundColor: "rgb(246, 251, 249)",
    backgroundImage:
      "url(https://react-next-landing.redq.io/_next/static/images/map-18b073154fe6a34a0819d1c79f404288.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "25% center",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0px"
    },
  },
  sectionHeader: {
    textAlign: "center",
    "& img": {
      maxWidth: 400,
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
  gridItem: {
    display: "flex",
    flexDirection: "column",
  },
  imageLogos: {
    width: "50%",
    padding: "0 15px",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
  },
  sectionContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  innerContent: {
    padding: "0 15px",
    "& h3": {
      fontSize: "48px",
      fontWeight: 400,
      [theme.breakpoints.down("sm")]: {
        fontSize: "26px"
      },
    },
    "& p": {
      fontSize: "16px",
      fontWeight: 400,
      marginBottom: 33,
    },
  },
}));

const SeventhSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={`${classes.container} ${classes.sectionContent}`}>
        <img className={classes.imageLogos} src={logoclient} alt="logoclient" />
        <div className={classes.innerContent}>
          <h3>Start your stress-free PTE preparation today.</h3>
          <p>
            You are just one step closer to your dream. Master PTE with this powerful tool.
          </p>
          <Link href='/platform' >
            <Button className={classes.signUpButton}>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
