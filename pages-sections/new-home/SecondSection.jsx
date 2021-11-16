import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import platform from "assets/img/new-home/platformImage.jpg";
import laptopFrame from "assets/img/new-home/laptop-frame.png";
import ScrollAnimation from "react-animate-on-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 40,
    textAlign: "center",
    maxWidth: "1140px",
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      padding: "0 30px",
    },
  },
  cardContent: {
    backgroundImage: `url(${platform})`,
    backgroundRepeat: "no-repeat",
    position: "absolute",
    /* % to outer border */
    left: "6%",
    top: "6%",
    bottom: "6%",
    right: "6%",
  },
  trustedTeam: {
    margin: "40px 0px",
    "& h2": {
      fontSize: 28,
      lineHeight: 1.3,
      color: "#111111",
      fontWeight: 700,
      marginBottom: 15,
    },
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  logoImage: {
    margin: "12px 16px",
    "& img": {
      display: "block",
      height: "auto",
      maxWidth: "110px",
      width: "100%",
    },
  },
  hr: {
    width: "100%",
  },
  innerImage: {
    position: "absolute",
    top: "9.5%",
    left: "11%",
    width: "78%",
    paddingTop: "48.8%",
    backgroundSize: "cover",
    zIndex: 15,
    zIndex: 0,
    backgroundImage: `url(${platform})`,
  },
  laptop: {
    position: "relative",
    "& img": {
      width: "100%",
      height: "auto",
      zIndex: 1,
    },
  },
}));

const SecondSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.laptop}>
        <ScrollAnimation animateIn="fadeIn" duration={1.5}>
          <img src={laptopFrame} alt="macbook" />
          <div className={classes.innerImage}></div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default SecondSection;
