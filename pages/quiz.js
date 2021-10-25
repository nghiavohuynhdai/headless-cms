/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import {useHistory} from "react-router-dom";
// @material-ui/icons
import useMediaQuery from "@material-ui/core/useMediaQuery";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";
// sections for this page
import logo from "assets/img/New-pte-magic-logo-1.png";
import circle from "assets/img/circle.png";
import pentagon from "assets/img/pentagon.png";
import square from "assets/img/square.png";
import triangle from "assets/img/triangle.png";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Button from "components/CustomButtons/Button.js";
import QuizQuestion from "pages-sections/quiz/QuizQuestion.js";
import QuizResult from "pages-sections/quiz/quiz-result.js";

import quizStyle from "assets/jss/nextjs-material-kit-pro/pages/quizStyle.js";

const useStyles = makeStyles(quizStyle);

export default function Quiz() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const [pageShow, setPageShow] = React.useState(0);

  const handleClickToQuiz = (e) => {
    e.preventDefault();
    setPageShow((prev) => prev + 1);
  };

  const [result,setResult] = React.useState(false);

  const handleShowResult = (e) => {
    e.preventDefault();
    setResult(true);
  }

  const questionList = [
    "Why English?",
    "Have you ever learned English? How long have you been studying?",
    "What do you expect from PTE Magic?",
    "Which PTE band score do you aim for?",
    "Study online or offline?",
    "Which English speaking countries do you want to study or travel to?",
    "Out of 4 English skills,which do you feel most confident of?",
  ];

  const anwserList = {
    question1: [
      "I'm curious",
      "I want to communicate with more people",
      "I will take an English test or will look for a job",
    ],
    question2: ["No, I have not", "Less than a year", "More than a year"],
    question3: [
      "I'm looking for useful resources",
      "I want to gain better score in my PTE exam",
      "Both of the two answers",
    ],
    question4: ["50-65", "65-79", "79+"],
    question5: ["Online", "Offline", "Both"],
    question6: [
      "The United State",
      "The United Kingdom",
      "Australia",
      "Singapore",
      "Iceland",
    ],
    question7: ["Reading", "Listening", "Speaking", "Writing"],
  };
  const matches = useMediaQuery("(max-width:600px)");

  console.log(result);
  return (
    <div style={{ height: "800px" }}>
      <Header
        brand={<img src={logo} alt={"logo"} />}
        color="gold"
        links={<HeaderLinksPTE />}
        fixed
      />
        {pageShow === 0 && (
          <GridContainer style={{height: '100%', marginTop: "82px" }}>
            <GridItem xs={12} sm={6} className={classes.leftGrid}>
              <div className={classes.upperIcon}>
                <img src={circle} alt="Circle" />
                <img
                  src={pentagon}
                  alt="Pentagon"
                  className={classes.pentagon}
                />
              </div>
              <div className={classes.leftText}>
                What's your English personality?
              </div>
              <div className={classes.lowerIcon}>
                <img src={square} alt="Square" />
                <img
                  src={triangle}
                  alt="Triangle"
                  className={classes.triangle}
                />
              </div>
            </GridItem>
            {matches ? (
              <GridItem xs={12} sm={6} className={classes.rightGrid600}>
                <p className={classes.rightText}>
                  Figure out which careers, languages, and courses suit your
                  personality interests and strengths best
                </p>
                <Button
                  className={classes.startButton}
                  round
                  onClick={handleClickToQuiz}
                >
                  Start
                </Button>
              </GridItem>
            ) : (
              <GridItem xs={12} sm={6} className={classes.rightGrid}>
                <p className={classes.rightText}>
                  Figure out which careers, languages, and courses suit your
                  personality interests and strengths best
                </p>
                <Button
                  className={classes.startButton}
                  round
                  onClick={handleClickToQuiz}
                >
                  Start
                </Button>
              </GridItem>
            )}
          </GridContainer>
        )}

        {pageShow === 1 && !result && (
          <QuizQuestion
            handleClickToQuiz={handleClickToQuiz}
            question={questionList[0]}
            answers={anwserList.question1}
          />
        )}
        {pageShow === 2 && !result && (
          <QuizQuestion
            handleClickToQuiz={handleClickToQuiz}
            question={questionList[1]}
            answers={anwserList.question2}
          />
        )}
        {pageShow === 3 && !result && (
          <QuizQuestion
            handleClickToQuiz={handleClickToQuiz}
            question={questionList[2]}
            answers={anwserList.question3}
          />
        )}
        {pageShow === 4 && !result && (
          <QuizQuestion
            handleClickToQuiz={handleClickToQuiz}
            question={questionList[3]}
            answers={anwserList.question4}
          />
        )}
        {pageShow === 5 && !result && (
          <QuizQuestion
            handleClickToQuiz={handleClickToQuiz}
            question={questionList[4]}
            answers={anwserList.question5}
          />
        )}
        {pageShow === 6 && !result && (
          <QuizQuestion
            handleClickToQuiz={handleClickToQuiz}
            question={questionList[5]}
            answers={anwserList.question6}
          />
        )}
        {pageShow === 7 && !result && (
          <QuizQuestion
            lastQuiz={true}
            question={questionList[6]}
            answers={anwserList.question7}
            handleShowResult={handleShowResult}
          />
        )}

        {result&&<QuizResult/>}
    </div>
  );
}
