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
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import blogPostPageStyle from "assets/jss/nextjs-material-kit-pro/pages/blogPostPageStyle.js";

import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import logo from "assets/img/New-pte-magic-logo-1.png";
import Banner from "components/Parallax/Banner.js";
import question from "assets/img/short-question.jpg";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

import CardHeader from "../../components/Card/CardHeader";
import { CardContent } from "@material-ui/core";
import CardFooter from "../../components/Card/CardFooter";
import Card from "../../components/Card/Card.js";

const styles = (theme) => ({
  card: {
    fontSize: "18px",
    fontFamily: "Poppins",
    borderRadius: "10px",
    marginRight: "20px",
    marginTop: "20px",
  },
  bottom: {
    display: "flex",
    "& a": {
      fontSize: "14px",
      fontFamily: "Poppins",
    },
    "& p": {
      fontSize: "14px"
    }
  },
  date: {
    position: "absolute",
    top: -30,
    backgroundColor: "#fff",
    color: "#5e2ced",
    borderRadius: "6px",
    textAlign: "center",
    maxWidth: "80px",
    fontSize: "30px",
    fontWeight: "700",
    padding: "15px",
  },

  cardContainer: {
    padding: "100px 25px 0",
  },
  oneCard: {
    height: "400px",
  },
  cardImage: {
    borderRadius: "10px",
    width: "100%",
  },
  noPreview: {
    backgroundColor: "#e5e4e3",
    height: "170px",
    borderRadius: "10px",
    textAlign: "center",
    "& p": {
      fontSize: "50px",
      paddingTop: "100px",
      color: "#fff",
    },
  },
  cardContent: {
    marginBottom: 20,
    "& p": {
      color: "#677294",
    },
  },
  cardFooter: {
    fontFamily: "Montserrat",
    color: "rgba(61,68,89,.5)",
    fontSize: "14px",
    fontWeight: 400,
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
  hrefLink: {
    color: "#000",
    "&: hover": {
      color: "#5e2ced",
    },
    fontFamily: "'Poppins', sans-serif",
    fontSize: "20px",
    fontWeight: 400,
    textTransform: "capitalize",
    lineHeight: "1.5em",
  },
  icon: {
    margin: "0 5px",
  },
  bubble: {
    marginTop: 3 
  },
  
  postDate: {
    position: "absolute",
    width: "83px",
    height: "71px",
    borderRadius: "4px",
    backgroundColor: "#fbfbfd",
   left: "15px",
    top: "0px", 
    borderRadius: "4px",
    textAlign: "center",
    color: "#5e2ced",
    zIndex: "1",
    "& h2": {
      fontSize: "35px",
      fontWeight: "600",
      marginTop: "4.5px",
      lineHeight: "1em",
    },
    "& span": {
      display: "block",
      fontSize: "15px",
      fontWeight: "400",
      marginTop: "-5px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "20px",
    },
    [theme.breakpoints.up("xl")]: {
      left: "20px",
    },
  },
  postDate2: {
    width: "83px",
    height: "71px",
    borderRadius: "4px",
    backgroundColor: "#fbfbfd",
    borderRadius: "4px",
    textAlign: "center",
    color: "#5e2ced",
    zIndex: "1",
    "& h2": {
      fontSize: "35px",
      fontWeight: "600",
      marginTop: "4.5px",
      lineHeight: "1em",
    },
    "& span": {
      display: "block",
      fontSize: "15px",
      fontWeight: "400",
      marginTop: "-5px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "20px",
    },
    [theme.breakpoints.up("xl")]: {
      left: "20px",
    },
  },
});

const useStyles = makeStyles(styles);

export default function BlogCard(props) {

  const { date, title, subtitle, img, href, day, month } = props;
  // const d = new Date(date.split("T")[0]);
  // const dateDetail = d.toDateString().split(" ");
  // const day = dateDetail[2];
  // const month = dateDetail[1];
  const d = new Date(date);
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <Card className={classes.oneCard}>
        <CardHeader cardHeaderReading>
          {img ? (
            <>
            <img className={classes.cardImage} src={img.url} />
            <GridItem
                  className={
                    img
                      ? classes.postDate
                      : classes.postDate2
                  }
                >
                  <a href="#">
                    <h2>
                      {d.getUTCDate()}
                      <span>
                        {d.toLocaleString("en-us", { month: "short" })}{" "}
                      </span>
                    </h2>
                  </a>
                </GridItem>
                </>
          ) : (
            <div className={classes.noPreview}>
              <p>No Preview</p>
            </div>
          )}
        </CardHeader>
        <CardContent className={classes.cardContent}>
          <a className={classes.hrefLink} href={href}>
            {title}
          </a>
          <p>{subtitle}</p>
        </CardContent>
        {/* <div className={classes.date}>
          {day} <br /> {month}
        </div> */}

        <CardFooter className={classes.cardFooter}>
          <div className={classes.bottom}>
            <a className={classes.hrefLink} href={href}>
              Read More
            </a>
            <ArrowRightAltIcon className={classes.icon} />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
