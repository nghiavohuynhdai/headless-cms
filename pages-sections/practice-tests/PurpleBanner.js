/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Link from "next/link";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button";
import Grid from "@material-ui/core/Grid";
// import reading from "assets/img/reading.jpg";
import speaking from "../../assets/img/speaking.jpg"
// sections for this page


const styles = {
    banner: {
        width: "100vw",
        height: "530px",
        backgroundColor: "#16163f",
        opacity: "0.8",
        display: "flex",
        justifyContent: "center",
        margin: "100px 0",
        "& p": {
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "600px",
          lineHeight: "50px",
          textAlign: "center",
          fontSize: "50px",
          fontWeight: "300",
          color: "#fff",
          fontFamily: "Merriweather"
    
        }
      },
}

const useStyles = makeStyles(styles);

export default function PurpleBanner(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const { quote } = props;
  const classes = useStyles();
  return (
    <div>
    <div className={classes.banner}><p>{quote}</p></div>
    </div>
  );
}
