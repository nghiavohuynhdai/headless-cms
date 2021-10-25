import React from 'react'
//core components
import SpeakingAnswerShortQuestion from "../../../components/Practice/Speaking/AnswerShortQuestion";
import SpeakingReadAloud from "../../../components/Practice/Speaking/ReadAloud";
import SpeakingRepeatSentence from "../../../components/Practice/Speaking/RepeatSentence";
import SpeakingRetellLecture from "../../../components/Practice/Speaking/RetellLecture";
import SpeakingDescribeImage from "../../../components/Practice/Speaking/DescribeImage";
//material-ui core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: "center"
  },
  category: {
    width: "80%"
  }
});

export default function SpeakingTest(props) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.category}>
        {props.testType === "read-aloud" && (
          <SpeakingReadAloud/>
        )}
        {props.testType === "retell-lecture" && (
          <SpeakingRetellLecture/>
        )}
        {props.testType === "repeat-sentence" && (
          <SpeakingRepeatSentence/>
        )}
        {props.testType === "describe-image" && (
          <SpeakingDescribeImage/>
        )}
        {props.testType === "answer-short-question" && (
          <SpeakingAnswerShortQuestion/>
        )}
      </div>
    </div>
  )
}