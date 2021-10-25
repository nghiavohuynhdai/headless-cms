/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import PTEFooter from "../../components/Footer/PTEFooter";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";

import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Header from "components/Header/Header";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// sections for this page

import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import repeat from "assets/img/repeat.png";
import LeftStructure from "pages-sections/practice-tests/LeftStructure.js";
import RightStructure from "pages-sections/practice-tests/RightStructure.js";
import Head from "next/head";

const styles = (theme) => ({
  ...presentationStyle,
  section: {
    maxWidth: "1240px",
  },
  main: {
    marginTop: 100,
  },
  banner: {
    width: "100vw",
    height: "530px",
    backgroundColor: "#16163f",
    opacity: "0.8",
    display: "flex",
    justifyContent: "center",
    margin: "100px 0",
    "& p": {
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "600px",
      lineHeight: "50px",
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "300",
      color: "#fff",
      fontFamily: "Merriweather",
    },
  },
  bannerBottom: {
    width: "100vw",
    height: "530px",
    backgroundColor: "#16163f",
    opacity: "0.8",
    display: "flex",
    justifyContent: "center",
    margin: "100px 0 0 0",
    "& p": {
      marginTop: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "600px",
      lineHeight: "50px",
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "300",
      color: "#fff",
      fontFamily: "Merriweather",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  contact: {
    textAlign: "center",
  },
  contactBtn: {
    backgroundColor: "#d3b574",
    color: "#16163f",
    textAlign: "center",
    borderRadius: "0 !important",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#16163f",
    },
    "& i": {
      marginLeft: "15px",
    },
  },
  bigHead: {
    margin: "0 80px",
  },
  subTitle: {
    color: "#4a4a4a",
    fontFamily: '"Montserrat",Sans-serif',
    fontSize: "18px",
    fontWeight: 300,
    textTransform: "capitalize",
    padding: "0 0 0 30px",
  },
  bigHeadTitle: {
    fontSize: "50px",
    padding: "0 0 0 30px",
    border: "solid #d3b574",
    borderWidth: "0 0 0 4px",
    lineHeight: "1.4em",
    color: "#16163f",
    fontWeight: "500",
    fontFamily: `"Merriweather", sans-serif`,
  },
  headDetail: {
    fontFamily: '"Times New Roman", serif',
    fontSize: "16px",
    textAlign: "justify",
    color: "#4a4a4a",
    lineHeight: "30px",
    "& span": {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: "200",
      fontSize: "16px",
      color: "#000",
    },
  },
  divider: {
    width: "100vw",
    marginTop: "5%",
  },
  bannerHead: {
    "&>div>div>div>h1": {
      fontWeight: 700,
    }
  }
});

const useStyles = makeStyles(styles);

export default function Listening() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Practice Test Listening</title>
      </Head>
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
      <div className={classes.bigHeader}></div>
      <Banner title="PTE Practice Test Listening" className={classes.bannerHead} /> 
      <div className={classNames(classes.main)}>
        <GridContainer className={classes.container}>
          <GridContainer className={(classes.bigHead, classes.section)}>
            <GridItem xs={12} md={4}>
              <div className={classes.subTitle}>
                PTE Practice Test Listening
              </div>
              <div className={classes.bigHeadTitle}>PTE Listening Test</div>
            </GridItem>
            <GridItem xs={12} md={4} className={classes.headDetail}>
              There are <b>8 sections</b> on the listening part of the test.
              Each involves listening and demonstrating skill in a slightly
              different way. Let’s take a look at the parts and what to pay
              attention to when taking them.
              <br />
              <br />
            </GridItem>
            <GridItem xs={12} md={4} className={classes.headDetail}>
              <a href="https://ptemagicpractice.com/">PTE Magic</a> is a
              believed platform with regards to getting probably the most
              refreshed <b>practice</b> your <b>PTE listening skill</b>
            </GridItem>
          </GridContainer>
          <div className={classes.divider}></div>
          <div className={classes.banner}>
            <p>“Check Out PTE Listening Test Exam Structure Below”</p>
          </div>
          <div style={{ textAlign: "center" }}>
            <div>PTE Listening Test</div>
            <h2>Exam Structure In PTE Academic</h2>
          </div>
          <div className={classes.divider}></div>
          <div className={classes.section}>
            <LeftStructure
              img={repeat}
              title="Summarize Spoken Text"
              firstPara={
                <p>
                  In this section, test-takers listen to <b>60 to 90 seconds</b>
                  , of text (you can take notes), then they are asked to
                  summarize in <b>59 to 70 words</b>.
                </p>
              }
              secondPara={
                <p>
                  Here it’s important to get the main idea in the answer, get
                  the correct number of words and use{" "}
                  <b>paper grammar, punctuation</b> and <b>spelling</b>. Word
                  choice matters here too. Use the right vocabulary (so listen
                  for key <b>vocabulary</b> words during the oral time) to keep
                  your answer accurate.
                </p>
              }
            />
            <RightStructure
              img={repeat}
              title="Multiple Choice Questions, Multiple Answers"
              firstPara={
                <p>
                  This section has test-takers listening to a{" "}
                  <b>40-90 seconds</b> piece of text. Before the selection
                  begins, it will help you to read the prompt so you are
                  prepared to listen for answers. You can take notes while
                  listening.
                </p>
              }
              secondPara={
                <p>
                  Then you get a <b>multiple choice question</b> more than one{" "}
                  <b>one correct answer</b>. Listen for specifics like people,
                  places, dates but also listen for meaning. Don’t just choose
                  an answer because you heard some of the words in the answer.
                </p>
              }
            />
            <LeftStructure
              img={repeat}
              title="Fill In The Blanks"
              firstPara={
                <p>
                  This section asks listeners to <b>fill in missing words</b>{" "}
                  from the text they have just listened to.
                </p>
              }
              secondPara={
                <p>
                  Use the <b>7 seconds</b> before the audio begins and skim to
                  get familiar. You only hear the audio one time. Try to{" "}
                  <b>Take note quickly</b> while listening to help with what
                  words go in.
                </p>
              }
              thirdPara={
                <p>
                  While listening don’t worry about <b>spelling</b>. Just get
                  the idea of the words. You have time to work out{" "}
                  <b>spelling</b> and <b>capitalization</b>when you fill in the
                  answers.
                </p>
              }
            />
            <RightStructure
              img={repeat}
              title="Highlight Correct Summary"
              firstPara={
                <p>
                  This section asks listeners to hear a selection (only once),
                  then choose the <b>best summary</b> of the selection. While
                  listening jot down <b>keywords, names, places, dates</b> .
                  It’s best to avoid attempting to read the choices while the
                  audio is playing. You will get confused.
                </p>
              }
              secondPara={
                <p>
                  Listen for details, then select the choice that best fits
                  those details.
                </p>
              }
            />
            <LeftStructure
              img={repeat}
              title="Multiple Choice With A Single Answer"
              firstPara={
                <p>
                  Like previous <b>multiple choice</b> , you will listen to a
                  selection one time. Try to read the question for clues before
                  listening. Look in the question for what information the
                  answer will want. For example, is it looking for the main
                  idea, supporting details or an inference?
                </p>
              }
              secondPara={
                <p>
                  There is <b>only ONE correct answer</b> from the choices in
                  this section. The key to the <b>correct anwser</b> is knowing
                  what the question is asking for.
                </p>
              }
            />
            <RightStructure
              img={repeat}
              title="Select Missing Word"
              firstPara={
                <p>
                  In this part of the test, listeners will hear a{" "}
                  <b>20-70 piece</b> of text. Near the end, there will be a beep
                  to represent a missing word which is one of the answer
                  choices. Only one answer is correct.
                </p>
              }
            />
            <LeftStructure
              img={repeat}
              title="Highlight Incorrect Words"
              firstPara={
                <p>
                  This section has you listen to a <b>10-15 second</b> piece of
                  text with a copy on the screen. You must click on the words
                  that are <b>different</b> in the text from what is said aloud.
                </p>
              }
              secondPara={
                <p>
                  Before it <b>begin skim</b> from the choices in this section.
                  The key to the <b>keywords</b> is knowing what the question is
                  asking for <b>nouns</b> and <b>adjectives</b>
                </p>
              }
            />
            <RightStructure
              img={repeat}
              title="Writting from Dictation"
              firstPara={
                <p>
                  Here you can hear a short sentence and be asked to type as
                  much as you can from what you hear. You can take notes while
                  listening. Spelling counts.
                </p>
              }
              secondPara={
                <p>
                  You don't have to get all words, just as many as you can recall into the box
                </p>
              }
            />
          </div>
          <div className={classes.bannerBottom}>
            <GridContainer>
              <p>
                <h1>Contact Us Today</h1>
                <h3>
                  For More Information And Help On Your PTE Listening Test.
                </h3>
              </p>
              <br />
              <GridItem xs={12} md={12} lg={12} className={classes.contact}>
                <Button className={classes.contactBtn}>
                  Contact Us{" "}
                  <i aria-hidden="true" class="fas fa-long-arrow-alt-right"></i>{" "}
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
      <PTEFooter />
    </div>
  );
}
