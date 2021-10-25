import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import React from "react";
import blogsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/blogsStyle";
import CardHeader from "components/Card/CardHeader";
import image from "assets/img/Legal-Advice.png";
import Card from "components/Card/Card";

export default function SeventhSection(props) {
  const styles = theme => ({
    ...teamsStyle,
    ...blogsStyle
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
            xs={12}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h4>Important Thing You Should Know</h4>
            <h2 className={classes.title}>What Is The PTE Academic?</h2>
          </GridItem>
        </GridContainer>
        <Card plain blog className={classes.card}>
          <GridContainer>
            <GridItem xs={12} sm={6}>
              <CardHeader image plain>
                <a href="#pablito" onClick={e => e.preventDefault()}>
                  <img src={image} alt="..." />
                </a>
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${image})`,
                    opacity: "1"
                  }}
                />
                <div
                  className={classes.coloredShadow}
                  style={{
                    backgroundImage: `url(${image})`,
                    opacity: "1"
                  }}
                />
              </CardHeader>
            </GridItem>
            <GridItem xs={12} sm={6}>

              <h3 className={classes.cardTitle}>
                PTE Academic Overrall
              </h3>
              <p >
                When you apply for a visa, the government will require that you
                demonstrate a clear knowledge of the English language. PTE Academic
                test is one of trusted English certificate by numbers of universities and governments.
              </p>
              <p >
                Your test results will determine whether your grasp of the language is competent, proficient or superior.
              </p>

              <h3 className={classes.cardTitle}>
                What Is Exam Structure Of PTE Academic?
              </h3>
              <p>
                The PTE Academic, covers four main categories, including:
                  <ol>
                    <li>Listening</li>
                    <li>Reading</li>
                    <li>Writing</li>
                    <li>Speaking</li>
                  </ol>
                To pass with a “Superior English” rating, you’ll need a score of at least 79 in each component of the test.
              </p>
              <p>
                You’ll take the test via a computer in a single, three-hour session that takes place at a secure Pearson test
                centre. While it’s relatively straightforward, there are more than 20 different variations in question format,
                ranging from multiple choice to essays.
              </p>
              <p>
                As such, it’s important to walk into the testing centre as prepared as possible.<strong><b> That’s where we come in.</b></strong>
              </p>
            </GridItem>
          </GridContainer>
        </Card>
      </div>
    </div>

  )
}