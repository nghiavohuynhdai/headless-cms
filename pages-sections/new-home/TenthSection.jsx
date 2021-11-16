import React from "react";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/img/new-home/slack-logo.png";
import Button from "@material-ui/core/Button";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import Link from "next/link";

const useStyles = makeStyles(theme =>({
  ...teamsStyle,
  root: {
    marginTop: 100,
    marginBottom: 120,
    textAlign: "center",
    maxWidth: "1140px",
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      margin: "60px 30px"
    },
  },
  sectionHeader: {
    marginBottom: "40px",
    marginLeft: "25%",
    marginRight: "25%",
    "& h1": {
        fontSize: 48,
        lineHeight: 1.25,
        color: "#000000",
        fontWeight: 400,
        marginTop: "40px",
      },
    "& h2": {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 2.1,
        color: "#000000",
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: 28
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0%",
      marginRight: "0%",
      "& h1": {
        fontSize: 28,
        marginTop: "40px",
      },
      "& h2": {
        fontSize: 15,
        marginLeft: "0%",
        marginRight: "0%",
      },
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "0%",
      marginRight: "0%",
      "& h1": {
        fontSize: 36,
        marginTop: "40px",
      },
      "& h2": {
        fontSize: 16,
        marginLeft: "0%",
        marginRight: "0%",
      },
    },
  },
  joinButton: {
    backgroundColor: "#fadb06",
    border: "1px solid #fadb06",
    color: "#000000",
    height: "100%",
    minWidth: "150px",
    padding: "8px 22px",
    height: "46px",
    margin: "35px 10px",
    "&:hover": {
      backgroundColor: "#fadb06",
      border: "1px solid #fadb06",
      color: "#000000",
    },
    [theme.breakpoints.down("sm")]: {
      margin:0
    },
  },
  loginButton: {
    backgroundColor: "#ffffff",
    textTransform: "none",
    border: "1px solid #ffffff",
    color: "#000000",
    height: "100%",
    minWidth: "150px",
    padding: "8px 22px",
    height: "46px",
    margin: "35px 10px",
    "&:hover": {
      backgroundColor: "#ffffff",
      border: "1px solid #ffffff",
      color: "#fadb06",
    },
    [theme.breakpoints.down("sm")]: {
      margin: 0
    },
  },
}));

const TenthSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.sectionHeader}>
            {/* <img src={logo} alt="logo-slack" /> */}
            <h1>Begin your PTE practice today</h1>
            <h2>Want to access to some of the material we cover in class without signing up for a full course?
              We offer mock tests and other PTE exam tips and material on our site.
            </h2>
        </div>
        
        <div className={classes.buttonContainer}>
        <Link href='/platform' >
          <Button className={classes.joinButton}>JOIN FOR FREE</Button>
        </Link>
        <Link href='/platform' >
          <Button className={classes.loginButton}>Log in With Email</Button>
        </Link>
      </div>
    </div>
  );
};

export default TenthSection;
