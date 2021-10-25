import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import HomePageCard from "components/Card/HomePageCard";
import card1 from "assets/img/card1.png"
import card2 from "assets/img/card2.png"
import card3 from "assets/img/card3.png"
import card4 from "assets/img/card4.png"
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";


const SecondSection = (props) => {
  const styles = theme => ({
    ...teamsStyle,
    card: {
      padding: 16
    },
    wrapper: {
      display: "flex",
      margin: "auto",
      width: "100%",
      maxWidth: 720,
      [theme.breakpoints.up(992)]: {
        maxWidth: 960,
      },
      [theme.breakpoints.up(1200)]: {
        maxWidth: 1140,
      },
    },


  })

  const useStyles = makeStyles(styles);

  const classes = useStyles()
  const contents = [
    {
      title: "AI Scoring",
      img: card1,
      content: "A Practice Tests platform has been designed with AI (Artificial Intelligence) feature. AI scoring means that test takers will be marked by the automated system which mimics the real scoring algorithm."
    },
    {
      title: "Practice Tests With Score Cards",
      img: card2,
      content: "Magic PTE Mock Test are designed to simulate the actual PTE Exam testing experience to help users familiarize themselves with the test patterns and identify weaknesses using score reports."
    },
    {
      title: "Real Repeated Questions",
      img: card3,
      content: "PTE question bank are updated regularly and are collected by the PTE aspirants community from the real exams. The questions are also sorted according to their frequency repetition rate."
    },
    {
      title: "Self Study Platform",
      img: card4,
      content: "Effective online tools and simulation mock tests to assist PTE aspirants in preparing for upcoming tests to achieve your desired score."
    },
  ]
  return (
    <>
      <GridContainer>
        <GridItem
          xs={12}
          sm={8}
          md={8}
          className={
            classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
          }
        >
          <h2 className={classes.title}>
            <div>Practice Tests Features</div>
            <div>That makes us top notch</div>
          </h2>
        </GridItem>
      </GridContainer>
      <div className={classes.wrapper}>

        <Grid container>
          {contents.map(c => (
              <Grid className={classes.card} item xs={12} sm={6} lg={3}>
                <HomePageCard title={c.title} img={c.img} content={c.content}/>
              </Grid>
            )
          )}

        </Grid>
      </div>
    </>
  )
}


export default SecondSection