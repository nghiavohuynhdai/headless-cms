import React from 'react'
//core components
import ReadingMultipleAnswers from "../../../components/Practice/Reading/MultipleAnswers";
import ReadingSingleAnswer from "../../../components/Practice/Reading/SingleAnswer";
import ReadingReOrderParagraph from "../../../components/Practice/Reading/ReOrderParagraph";
import ReadingFillInTheBlanks from "../../../components/Practice/Reading/FillInTheBlanks";
import ReadingFillInTheBlanksW from "../../../components/Practice/Reading/FillInTheBlanksW";
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

export default function ReadingTest(props) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.category}>
        {props.testType === "choose-multiple-answers" && (
          <ReadingMultipleAnswers/>
        )}
        {props.testType === "re-order-paragraph" && (
          <ReadingReOrderParagraph/>
        )}
        {props.testType === "fill-in-the-blank-words" && (
          <ReadingFillInTheBlanksW/>
        )}
        {props.testType === "choose-single-answer" && (
          <ReadingSingleAnswer/>
        )}
        {props.testType === "fill-in-the-blanks" && (
          <ReadingFillInTheBlanks/>
        )}
      </div>
    </div>
  )
}