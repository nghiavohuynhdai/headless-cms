import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

export default function SixthSection(props) {
  const styles = theme => ({
    ...teamsStyle
  })
  const useStyles = makeStyles(styles);

  const classes = useStyles()

  return (
    <div
      className={classes.team }
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12} md={4}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h4>Why you need</h4>
            <h2 className={classes.title}>PTE Academic ?</h2>
          </GridItem>
          <GridItem
            xs={12} md={4}
            className={
              classes.mlAuto + " " + classes.mrAuto
            }
          >
            <p className={classes.paragraph}>Planning to move to Australia, New Zealand or UK? If so, congratulations! Both countries are replete with natural wonders, gorgeous vistas and culture at every turn. However, there are a few requirements you’ll need to meet before you can take up a visa in either spot. </p>
          </GridItem>
          <GridItem
            xs={12} md={4}
            className={
              classes.mlAuto + " " + classes.mrAuto
            }
          >
            <p className={classes.paragraph}>In your quest to secure this visa, you’ll have to complete a number of steps, including passing the <strong><b>Pearson Test of English (PTE) Academic.</b></strong></p>
          </GridItem>
        </GridContainer>
      </div>
    </div>

  )
}