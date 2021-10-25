import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import blogsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/blogsStyle";
import {makeStyles} from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import React from "react";
import CardBody from "components/Card/CardBody";
import Warning from "components/Typography/Warning";

export default function TwelfthSection(props) {
  const styles = theme => ({
    ...teamsStyle,
    ...blogsStyle,
    equalHeight: {
      [theme.breakpoints.up("sm")]: {
        height: 280
      },
      [theme.breakpoints.up("md")]: {
        height: 210
      },
    }
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
            xs={12} md={5}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h4>You Are Not Alone</h4>
            <h2 className={classes.title}>What PTE Magic Platform Provides?</h2>
            <h4>
              Want access to some of the material we cover in class without signing up for a full course? We offer mock
              tests and other PTE exam tips and material on our site.
            </h4>
            <h3>Few Things You Might Need To Know</h3>
            <h4>
              <ul style={{textAlign: "left"}}>
                <li>PTE Magic has 7+ study centre</li>
                <li>PTE Magic has 15,000+ members</li>
                <li>PTE Magic has study centres in Australia and Vietnam</li>
                <li>PTE Magic has a pass rate 90%+</li>
              </ul>
            </h4>
          </GridItem>
          <GridItem xs={12} md={7}>
            <GridContainer>
              <GridItem
                xs={12} sm={6}
                className={
                  classes.mlAuto + " " + classes.mrAuto
                }
              >
                <GridContainer>
                  <GridItem xs={12}>
                    <Card className={classes.equalHeight}>
                      <CardBody>
                        <Warning>
                          <h4 className={classes.cardTitle} style={{color: "unset"}}>
                            Real repeated exam questions
                          </h4>
                        </Warning>
                        <p>
                          PTE Magic tries to collect all repeated questions from our community
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12}>
                    <Card className={classes.equalHeight}>
                      <CardBody>
                        <Warning>
                          <h4 className={classes.cardTitle} style={{color: "unset"}}>
                            PTE Question Banks
                          </h4>
                        </Warning>

                        <p>
                          PTE Magic has more than 4,000 questions
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </GridItem>

              <GridItem
                xs={12} sm={6}
                className={
                  classes.mlAuto + " " + classes.mrAuto
                }
              >
                <GridContainer>
                  <GridItem xs={12}>
                    <Card className={classes.equalHeight}>
                      <CardBody>
                        <Warning>
                          <h4 className={classes.cardTitle} style={{color: "unset"}}>
                            Scored Practice Test
                          </h4>
                        </Warning>
                        <p>
                          PTE Magic can score your practice test or mock test by our AI system.
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12}>
                    <Card className={classes.equalHeight}>
                      <CardBody>
                        <Warning>
                          <h4 className={classes.cardTitle} style={{color: "unset"}}>
                            Artificial Intelligence (AI) scoring
                          </h4>
                        </Warning>
                        <p>
                          AI is used in our system to score PTE Speaking, Writing and Mock Test
                        </p>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </GridItem>

        </GridContainer>
      </div>
    </div>

  )
}