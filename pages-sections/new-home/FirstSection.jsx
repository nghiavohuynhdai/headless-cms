import React from "react";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "1140px",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
    "& img": {
      width: "40%",
    },
    "& h1": {
      fontSize: 55,
      lineHeight: 1.1,
      color: "#000000",
      fontWeight: 700,
      marginTop: 0,
      [theme.breakpoints.down("sm")]: {
        fontSize: 24,
        marginBottom: 0,
      },
    },
    "& h2": {
      fontSize: 20,
      fontWeight: 400,
      color: "#000000",
      marginBottom: 30,
      [theme.breakpoints.down("sm")]: {
        fontSize: 15,
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0px 30px",
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
  },
  signUpButton: {
    backgroundColor: "#5333f7",
    border: "1px solid #5333f7",
    color: "#ffffff",
    height: "100%",
    minWidth: "150px",
    padding: "8px 22px",
    height: "46px",
    "&:hover": {
      backgroundColor: "#5333f7",
      border: "1px solid #5333f7",
      color: "#ffffff",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
      padding: "6px 20px",
      minWidth: "110px"
    },
  }
}));

const FirstSection = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        {/* <h1>PTE Academic preparation</h1>
        <h1>made easier for you</h1>
        <h2>Over 120,000 students have joined PTE Magic to study without the barriers of cost or location</h2> */}
        <div
          dangerouslySetInnerHTML={{
            __html: props.data.saveContent,
          }}
        ></div>
      </div>
      <div className={classes.signUpContainer}>
        <Link href="/platform/">  
          <Button className={classes.signUpButton}>GET STARTED</Button>
        </Link>
      </div>
    </div>
  );
};

export default FirstSection;
