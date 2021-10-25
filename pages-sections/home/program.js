/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
// import screen from "assets/img/screen.png";


const styles = {
container: {
    textAlign: "center",
},
programs: {
display: "flex",
justifyContent: "center"
},
programBox: {
    background: "gold",
    borderRadius: "10px",
    margin: "2%",
    "& p": {
        textAlign: "left !important",
        color: "#4d375d",
        fontWeight: "bold"
    }
},
title: {
  textDecoration: "none",
  fontWeight: "700",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: `"Roboto Slab", "Times New Roman", serif`
},
section: {
    // marginTop: -30,
    // height: "80vh"
},
subTitle: {
    backgroundColor: "gold",
    fontWeight: "700",
    borderRadius: "0 10px 0 10px",
    color: "#6930c3"
}
}

const useStyles = makeStyles(styles);

export default function Program() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
      <div className={classes.section}>
    <div className={classes.container}>
    <h1 className={classes.title}>Tell us about your <span style={{color: "#ffe227"}}>goal</span></h1>
    <h2>We'll show you the <span style={{color: "#6930c3"}}>customized program </span>just for you</h2>

    <GridContainer className={classes.programs}>
        <GridItem className={classes.programBox} xs={4} md={2}>
            <h5 className={classes.subTitle}>SPEAKING</h5>
            <p>Master the languages of the web: HTML, CSS, and JavaScript. This path will prepare you to build basic websites and then build interactive web apps.</p>
            </GridItem>
        <GridItem className={classes.programBox} xs={4} md={2}>
        <h5 className={classes.subTitle}>LISTENING</h5>
        <p>Master the languages of the web: HTML, CSS, and JavaScript. This path will prepare you to build basic websites and then build interactive web apps.</p>
        </GridItem>
        <GridItem className={classes.programBox} xs={4} md={2}>
        <h5 className={classes.subTitle}>READING</h5>
        <p>Master the languages of the web: HTML, CSS, and JavaScript. This path will prepare you to build basic websites and then build interactive web apps.</p>
        </GridItem>
        <GridItem className={classes.programBox} xs={4} md={2}> 
        <h5 className={classes.subTitle}>WRITING</h5>
        <p>Master the languages of the web: HTML, CSS, and JavaScript. This path will prepare you to build basic websites and then build interactive web apps.</p>
        </GridItem>
    </GridContainer>
    </div>
    </div>
  );
}
