import React from 'react'
import Router from 'next/router'
import Header from "../../../components/Header/Header";
import logo from "../../../assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "../../../components/Header/HeaderLinksPTE";
import Grid from "@material-ui/core/Grid";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { makeStyles } from '@material-ui/core/styles';
import {Paper} from "@material-ui/core";
import ReadingTest from "../../../components/Practice/Reading/ReadingTest";

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

export default function Reading() {
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
      <BreadCrumb title="Reading"/>
      <Grid className={classes.categories}>
        <Grid container spacing={1}>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("introduction")}>
              Introduction
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("choose-multiple-answers")}>
              Choose multiple answers
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("choose-single-answer")}>
              Choose single answer
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("fill-in-the-blanks")}>
              Fill in the blanks
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("fill-in-the-blank-words")}>
              Fill in the blank words
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("re-order-paragraph")}>
              Reorder paragraph
          </Grid>
        </Grid>
      </Grid>
      <ReadingTest testType={testType}/>
    </Grid>
  )
}