import React from 'react'
//core components
import ListeningWriteFromDictation from "../../../components/Practice/Listening/WriteFromDictation";
import ListeningHighLightIncorrectWords from "../../../components/Practice/Listening/HighLightIncorrectWords";
import ListeningHighLightCorrectSummary from "../../../components/Practice/Listening/HighLightCorrectSummary";
import ListeningMultipleAnswers from "../../../components/Practice/Listening/MultipleAnswers";
import ListeningSingleAnswer from "../../../components/Practice/Listening/SingleAnswer";
import ListeningFillInTheBlanks from "../../../components/Practice/Listening/ListeningFillInTheBlanks";
import ListeningSelectMissingWord from "../../../components/Practice/Listening/SelectMissingWord";
import ListeningSummarizeSpokenText from "../../../components/Practice/Listening/SummarizeSpokenText";
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

export default function ListeningTest(props) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.category}>
        {props.testType === "select-missing-words" && (
          <ListeningSelectMissingWord/>
        )}
        {props.testType === "highlight-correct-summary" && (
          <ListeningHighLightCorrectSummary/>
        )}
        {props.testType === "highlight-incorrect-words" && (
          <ListeningHighLightIncorrectWords/>
        )}
        {props.testType === "choose-multiple-answers" && (
          <ListeningMultipleAnswers/>
        )}
        {props.testType === "write-from-dictation" && (
          <ListeningWriteFromDictation/>
        )}
        {props.testType === "summarize-spoken-text" && (
          <ListeningSummarizeSpokenText/>
        )}
        {props.testType === "choose-single-answer" && (
          <ListeningSingleAnswer/>
        )}
        {props.testType === "fill-in-the-blanks" && (
          <ListeningFillInTheBlanks/>
        )}
      </div>
    </div>
  )
}