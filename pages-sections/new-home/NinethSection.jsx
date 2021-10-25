import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Accordion from "../../components/Accordion/Accordion";
import Button from "@material-ui/core/Button";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import Link from "next/link";

const useStyles = makeStyles(theme=>({
  ...teamsStyle,
  root: {
    marginTop: 120,
    textAlign: "center",
    maxWidth: "1140px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      margin: "60px 30px 0 30px"
    },   
  },
  sectionHeader: {
    textAlign: "center",
    marginBottom: "60px",
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
  accordionContainer:{
    marginTop: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },    
  },
  exploreButton: {
    backgroundColor: "#fadb06",
    border: "1px solid #fadb06",
    color: "#000000",
    height: "100%",
    minWidth: "150px",
    padding: "8px 22px",
    height: "46px",
    margin: "50px 10px",
    "&:hover": {
      backgroundColor: "#fadb06",
      border: "1px solid #fadb06",
      color: "#000000",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "30px 10px",
    },
  },
}));
const collapses = [
    {   title: "What is PTE Academic and why do I need it?",
        content: "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact. Email and Chat . We try to reply quickly, so you need not to wait too long for a response!."
    },
    {   title: "How is PTE Academic scored?",
        content: "Please read the documentation carefully . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum ."
    },
    {   title: "How much does the PTE Academic cost?",
        content: "At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum ."
    },
    {   title: "Where can I book my PTE Academic test?",
        content: "We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us ."
    },
]

const NinethSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.sectionHeader}>
            <h2>FREQUENTLY ASKED QUESTIONS</h2>
            <h3>Want to ask something from us?</h3>
        </div>
        <div className={classes.accordionContainer}>
            <Accordion  collapses={collapses}/>
        </div>
        <Link href='/platform' >
          <div className={classes.exploreContainer}>
            <Button className={classes.exploreButton}>Getting Started</Button>
          </div>
        </Link>
    </div>
  );
};

export default NinethSection;
