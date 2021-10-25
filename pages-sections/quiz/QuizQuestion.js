/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import useMediaQuery from '@material-ui/core/useMediaQuery';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// sections for this page
import Button from "components/CustomButtons/Button.js";
import Link from "next/link";
import quizStyle from "assets/jss/nextjs-material-kit-pro/pages/quizStyle.js";

const useStyles = makeStyles(quizStyle);

export default function Quiz(props) {
  const { handleClickToQuiz, question, answers, lastQuiz ,handleShowResult} = props;
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();

  const matches = useMediaQuery('(max-width:600px)');
  
  return (
    <div className={classes.page}>
      <GridContainer style={{height: "100%",marginTop: "82px" }}>
        {matches ? (<GridItem xs={12} sm={6} className={classes.questionSide600}>
          <div>{question}</div>
        </GridItem>)
        :
        (<GridItem xs={12} sm={6} className={classes.questionSide}>
          <div>{question}</div>
        </GridItem>)
        }
        {!lastQuiz ? (
          <GridItem xs={12} sm={6} className={classes.answerSide}>
            {answers.map((answer) => {
              return (
                <div
                  className={classes.anwserOption}
                  onClick={handleClickToQuiz}
                >
                  {answer}
                </div>
              );
            })}
          </GridItem>
        ) : (
          <GridItem xs={12} sm={6} className={classes.answerSide}>
            {answers.map((answer) => {
              return (
                  <Button className={classes.anwserOption} onClick={handleShowResult}>{answer}</Button>
              );
            })}
          </GridItem>
        )}
      </GridContainer>

    </div>
  );
}
