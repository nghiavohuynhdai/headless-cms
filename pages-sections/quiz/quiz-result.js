/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import InputAdornment from "@material-ui/core/InputAdornment";
import NavPills from "components/NavPills/NavPills";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "assets/img/New-pte-magic-logo-1.png";
import bg12 from "assets/img/bg12.jpg";

// core components

import {
  mrAuto,
  mlAuto,
  blackColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/nextjs-material-kit-pro.js";

import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import InfoArea from "components/InfoArea/InfoArea";
import InfoAreaNumber from "components/InfoArea/InfoAreaNumber";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomInput from "components/CustomInput/CustomInput.js";

// sections for this page
import SectionDescription from "pages-sections/home/SectionDescription";
import SectionComponents from "pages-sections/presentation-page/SectionComponents.js";
import SectionCards from "pages-sections/presentation-page/SectionCards.js";
import SectionContent from "pages-sections/presentation-page/SectionContent.js";
import SectionSections from "pages-sections/presentation-page/SectionSections.js";
import SectionExamples from "pages-sections/presentation-page/SectionExamples.js";
import SectionFreeDemo from "pages-sections/presentation-page/SectionFreeDemo.js";
import SectionOverview from "pages-sections/presentation-page/SectionOverview.js";
import SectionPricing from "pages-sections/presentation-page/SectionPricing.js";

import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";

import ViewCarousel from "@material-ui/icons/ViewCarousel";
import Mail from "@material-ui/icons/Mail";

import Code from "@material-ui/icons/Code";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Dashboard from "@material-ui/icons/Dashboard";
import AccessTime from "@material-ui/icons/AccessTime";
import AttachMoney from "@material-ui/icons/AttachMoney";

import bg9 from "assets/img/bg9.jpg";
import takeQuiz from "assets/img/take-quiz.png";
import enrollNow from "assets/img/enroll-now.png";
import ecommerceHeader from "assets/img/examples/ecommerce-header.jpg";
import banner from "assets/img/benit/banner.svg";

import LanguageIcon from "@material-ui/icons/Language";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import EventNoteIcon from "@material-ui/icons/EventNote";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import CollectionsBookmarkIcon from "@material-ui/icons/CollectionsBookmark";

const styles = (theme) => ({
  ...presentationStyle,
  mrAuto,
  mlAuto,
  congRats: {
    marginTop: "0px",
    fontSize: 28,
    marginLeft: "8px",
  },
  cardContent: {
    fontSize: 18,
    marginLeft: "8px",
  },
  formClickSignup: {
    width: "100%",
    height: "auto",
    //border: "2px solid gold",
    marginBottom: "10px",
    marginLeft: "8px",
    backgroundColor: "#F0F8FF",
  },
  textFormSignUp: {
    fontSize: 23,
    lineHeight: 1,
    marginTop: "12px",
    marginBottom: "10px",
  },
  btnClick: {
    backgroundColor: "#fff",
    border: "1px solid gold",
    "&:hover": {
      backgroundColor: "gold",
    },
  },
  btnIconNetwork: {
    marginLeft: "30px",
  },
  btnSocialNetwork: {
    marginRight: "10px",
  },
});

const useStyles = makeStyles(styles);

export default function QuizResult() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      {/* <Header
        brand={<img src={logo} alt={"logo"} />}
        color="gold"
        links={<HeaderLinksPTE />}
      /> */}
      <div className={classes.features5}>
        <GridContainer className={classes.margin0}>
          <GridItem
            xs={12}
            sm={8}
            md={8}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2
              className={classes.title}
              style={{ color: "black", textAlign: "center" }}
            >
              Are you ready for PTE Magic Online ?
            </h2>
          </GridItem>
          <div className={classes.container}>
            <GridContainer
              className={classes.gridContainer}
              style={{ margin: "0!important" }}
            >
              <GridItem xs={12} md={12} sm={6} className={classes.gridItem}>
                <GridContainer>
                  <GridItem xs={12} md={4} sm={6}>
                    <h2 className={classes.congRats}> ✨Congratulations🎉 </h2>
                    <p className={classes.cardContent}>
                      You have finally completed the test, we believe that the
                      test will give you motivation to study hard. Let PTE Magic
                      accompany you.
                    </p>
                    <GridItem className={classes.btnIconNetwork}>
                      <Button
                        className={classes.btnSocialNetwork}
                        justIcon
                        round
                        color="facebook"
                      >
                        <i className={" fab fa-facebook-f"} />
                      </Button>
                      <Button
                        className={classes.btnSocialNetwork}
                        justIcon
                        round
                        color="twitter"
                      >
                        <i className={" fab fa-twitter"} />
                      </Button>
                      <Button
                        className={classes.btnSocialNetwork}
                        justIcon
                        round
                        color="in"
                      >
                        <i className={" fab fa-linkedin-in"} />
                      </Button>
                    </GridItem>
                  </GridItem>

                  <GridItem xs={12} md={8} sm={6}>
                    <GridContainer className={classes.formClickSignup}>
                      <GridItem xs={4} md={6} sm={6}>
                        <GridItem className={classes.jobSection}>
                          <GridItem>
                            <h4>Perfect Your Timings</h4>
                            <p>
                              While you may feel confident with all sections on
                              the PTE, you also need to consider your timing.
                              Whilst having the correct knowledge is important,
                              if you can’t convey this knowledge in the
                              allocated timeframe you will not score as highly
                              as you should on the test.
                            </p>
                          </GridItem>
                          <GridItem>
                            <h4>Identify Areas For Improvement</h4>
                            <p>
                              With a practice test, teachers are able to
                              identify areas where students need to improve,
                              before taking the actual PTE Academic Exam. This
                              gives students enough time to study and learn new
                              information to achieve the best score possible on
                              their PTE.
                            </p>
                          </GridItem>
                          <GridItem>
                            <h4>Identify Where Students Are Succeeding</h4>
                            <p>
                              Similarly to the point above, a practice test will
                              help students identify sections of the test they
                              are excelling in. This allows them to create an
                              accurate revision timetable that has less time
                              dedicated to the sections of the test they are
                              already succeeding in.
                            </p>
                          </GridItem>
                        </GridItem>
                      </GridItem>
                      <GridItem xs={12} md={6} sm={6}>
                        <GridItem className={classes.jobSection}>
                          <GridItem>
                            <h3 className={classes.textFormSignUp}>
                              Become fluent in English
                            </h3>
                            <Button
                              style={{
                                backgroundColor: "gold!important",
                                color: "",
                              }}
                            >
                              start for free
                            </Button>
                            <h4>or try starting with</h4>
                          </GridItem>
                          <GridItem>
                            <h3>Reading</h3>
                            <p>
                              Reading skills are the foundation of the learning
                              process. The curriculum at PTE places a great deal
                              of emphasis on skill development and throughout
                              Kindergarten onwards, students will participate in
                              daily reading activities.
                            </p>
                            <Button
                              className={classes.btnClick}
                              color="github"
                              simple
                            >
                              Start Reading
                            </Button>
                          </GridItem>
                          <GridItem>
                            <h3 className={classes.textFormSignUp}>Speaking</h3>
                            <p>
                              How to practice English pronunciation skills
                              correctly? The stress of the first golden key word
                              for us to listen to understand and speak English
                              like a native. Capturing important sounds is the
                              best way to understand spoken English, especially
                              as two people talking to each other.
                            </p>
                            <Button
                              className={classes.btnClick}
                              color="github"
                              simple
                            >
                              Start Speaking
                            </Button>
                          </GridItem>
                          <GridItem>
                            <h4>or explore on your own</h4>
                            <p>
                              Discover all our Toeic or all our Ielts content.
                            </p>
                          </GridItem>
                        </GridItem>
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
      <Footer
        theme="dark"
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=njsmkp-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Home
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="http://blog.creative-tim.com/?ref=njsmkp-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={(e) => e.preventDefault()}
                    className={classes.block}
                  >
                    Ebook
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="#pablito"
                    onClick={(e) => e.preventDefault()}
                    className={classes.block}
                  >
                    PTE Course
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/contact-us?ref=njsmkp-e-ecommerce"
                    target="_blank"
                    className={classes.block}
                  >
                    Contact us
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              Copyright &copy; {1900 + new Date().getYear()}{" "}
              <a
                href="https://benit.io/"
                target="_blank"
                className={classes.aClasses}
              >
                BENIT
              </a>{" "}
              All Rights Reserved.
            </div>
          </div>
        }
      >
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Getting Started</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href="#pablo">How To Use Magic Platform</a>
              </li>
              <li>
                <a href="#pablo">About Us</a>
              </li>
              <li>
                <a href="#pablo">FAQs</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>PTE Practice Test Resources</h5>
            <ul className={classes.linksVertical}>
              <li>
                <a href="#pablo">PTE Practice Test</a>
              </li>
              <li>
                <a href="#pablo">Exam Tips</a>
              </li>
              <li>
                <a href="#pablo">PTE Speaking</a>
              </li>
              <li>
                <a href="#pablo">PTE Reading</a>
              </li>
              <li>
                <a href="#pablo">PTE Listening</a>
              </li>
            </ul>
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <h5>Follow Us</h5>
            <ul className={classes.socialButtons}>
              <li>
                <Button justIcon simple href="#pablo" color="twitter">
                  <i className="fab fa-twitter" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="facebook">
                  <i className="fab fa-facebook-square" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="dribbble">
                  <i className="fab fa-dribbble" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="google">
                  <i className="fab fa-google-plus-g" />
                </Button>
              </li>
              <li>
                <Button justIcon simple href="#pablo" color="instagram">
                  <i className="fab fa-instagram" />
                </Button>
              </li>
            </ul>
            <h5>Numbers Don{"'"}t Lie</h5>
            <h4>
              100,000+ <small>members</small>
            </h4>
          </GridItem>
        </GridContainer>
      </Footer>
    </div>
  );
}
