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
    displayImg: {
        width: "100%",
        borderRadius: "15px"
    },
    describeSection: {
        marginTop: "auto",
        marginBottom: "auto",
        "& h6": {
            borderTop: "solid black 1px",
            width: "100%",
            margin: "10px 0",
            paddingTop: "20px",
        }
    },
    titleSection: {
        display: "flex",
        justifyContent: "space-between",
    },
    star: {
        margin: "0 10px",
        marginTop: -10
    },
    container: {
        textAlign: "left !important",
        maxWidth: "1100px",
        margin: "50px 0 0 0"
    }
}

const useStyles = makeStyles(styles);

export default function RightStructure(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const { img, firstPara, secondPara,thirdPara,title } = props;
  const classes = useStyles();
  return (
    <div>
        <GridContainer className={classes.container}>

            <GridItem xs={12} md={6} className={classes.describeSection}>
                <div className={classes.titleSection}>
                <h6>{title}</h6>
                <div className={classes.star}>
                <i aria-hidden="true" class="fas fa-star"></i></div>
                <h6> </h6>
                </div>
                {firstPara}
                {secondPara}
                {thirdPara}
            </GridItem>
            <GridItem xs={12} md={6}>
                <img className={classes.displayImg} src={img} />
            </GridItem>
        </GridContainer>
    </div>
  );
}
