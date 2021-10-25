import React from 'react'
import Router from 'next/router'
import Header from "../../../components/Header/Header";
import logo from "../../../assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "../../../components/Header/HeaderLinksPTE";
import Grid from "@material-ui/core/Grid";
import BreadCrumb from "../../../components/BreadCrumb/BreadCrumb";
import { makeStyles } from '@material-ui/core/styles';
import ListeningTest from "../../../components/Practice/Listening/ListeningTest";

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

export default function Listening() {
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
      <BreadCrumb title="Listening"/>
      <Grid className={classes.categories}>
        <Grid container spacing={1}>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("introduction")}>
            Introduction
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("select-missing-words")}>
            Select missing words
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("highlight-correct-summary")}>
            Highlight correct summary
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("highlight-incorrect-words")}>
            Highlight incorrect words
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("choose-multiple-answers")}>
            Choose multiple answers
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("write-from-dictation")}>
            Write from dictation
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("summarize-spoken-text")}>
            Summarize spoken text
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("choose-single-answer")}>
            Choose single answer
          </Grid>
          <Grid item className={classes.subCategory} onClick={() =>setTestType("fill-in-the-blanks")}>
            Fill in the blanks
          </Grid>
        </Grid>
      </Grid>
      <ListeningTest testType={testType}/>
    </Grid>
  )
}