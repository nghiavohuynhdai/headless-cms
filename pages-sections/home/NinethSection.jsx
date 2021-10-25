import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React from "react";

export default function NinethSection(props) {
  const styles = theme => ({
    ...teamsStyle
  })
  const useStyles = makeStyles(styles);

  const classes = useStyles()

  return (
    <div
      className={classes.team}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12} md={4}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h4>PTE Magic</h4>
            <h2 className={classes.title}>PTE Practice Online</h2>
          </GridItem>
          <GridItem
            xs={12} md={4}
            className={
              classes.mlAuto + " " + classes.mrAuto
            }
          >
            <p className={classes.paragraph}>Even the most confident of students can find the process of taking an exam
              stressful. The exam environment can often bring out nerves in students, making them doubt their abilities
              and falter under pressure.
              <br/>
              For this reason, <strong><b>PTE Magic</b></strong> provides online practice test to ensure our students
              become familiar with the test </p>
          </GridItem>
          <GridItem
            xs={12} md={4}
            className={
              classes.mlAuto + " " + classes.mrAuto
            }
          >
            <p className={classes.paragraph}>environment and have time to work on any limitations which may be holding
              them back. Completing a practice test at PTE Magic ensures you are away from all distractions and can
              completely focus on your test.
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>

  )
}