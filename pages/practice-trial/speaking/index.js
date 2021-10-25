import React from 'react'
import Router from 'next/router'
import Header from "../../../components/Header/Header";
import logo from "../../../assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "../../../components/Header/HeaderLinksPTE";
import Grid from "@material-ui/core/Grid";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { makeStyles } from '@material-ui/core/styles';
import SpeakingTest from "../../../components/Practice/Speaking/SpeakingTest";

const useStyles = makeStyles({
  subCategory: {
    border: "1px solid black",
    borderRadius: "10px",
    textAlign: "center",
    margin: "10px",
    display: "inline-block",
    cursor: "pointer"
  },
  categories: {
    marginLeft: "300px"
  }
});

export default function Speaking() {
  const classes = useStyles()
  let [testType, setTestType] = React.useState("introduction")
  return (
    <Grid>
      <Header
        brand={<img src={logo} alt={"logo"} />}
        color="transparent"
        links={<HeaderLinksPTE />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white",
        }}
      />
      <BreadCrumb title="Speaking"/>
      <Grid className={classes.categories}>
        <Grid container spacing={1}>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("introduction")}>
            Introduction
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("read-aloud")}>
            Read aloud
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("retell-lecture")}>
            Retell lecture
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("repeat-sentence")}>
            Repeat sentence
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("describe-image")}>
            Describe image
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("answer-short-question")}>
            Answer short question
          </Grid>
        </Grid>
      </Grid>
      <SpeakingTest testType={testType}/>
    </Grid>
  )
}