import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React from "react";
import cardsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";
import CardBody from "components/Card/CardBody";
import Card from "components/Card/Card";

const TenthSection = (props) => {
  const styles = theme => ({
    ...teamsStyle,
    ...cardsStyle
  })

  const useStyles = makeStyles(styles);

  const classes = useStyles()

  return (
    <>
      <GridContainer>
        <GridItem
          xs={12}
          className={
            classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
          }
        >
          <h4>PTE Magic</h4>
          <h2 className={classes.title}>The Benefits Of Doing Magic PTE Mock Test</h2>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.container}>
        <GridItem xs={12} md={4}>
          <Card color="warning">
            <CardBody color>
              <h5 className={classes.cardTitleWhite}>
                01
              </h5>
              <h4 className={classes.cardTitleWhite}>
                Perfect Your Time Management
              </h4>
              <p>While you may feel confident with all sections on the PTE, you also need to consider your timing.
                Whilst
                having the correct knowledge is important, if you can’t convey this knowledge in the allocated timeframe
                you will not score as highly as you should on the test.</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} md={4}>

          <Card color="warning">
            <CardBody color>
              <h5 className={classes.cardTitleWhite}>
                02
              </h5>
              <h4 className={classes.cardTitleWhite}>
                Identify Areas For Improvement
              </h4>
              <p>With a practice test, teachers are able to identify areas where students need to improve, before
                taking
                the actual PTE Academic Exam. This gives students enough time to study and learn new information to
                achieve the best score possible on their PTE.</p>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} md={4}>
          <Card color="warning">
            <CardBody color>
              <h5 className={classes.cardTitleWhite}>
                03
              </h5>
              <h4 className={classes.cardTitleWhite}>
                Identify Students' Strength
              </h4>
              <p>Similarly to the point above, a practice test will help students identify sections of the test they are
                excelling in. This allows them to create an accurate revision timetable that has less time dedicated to
                the sections of the test they are already succeeding in.</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </>

  )
}


export default TenthSection