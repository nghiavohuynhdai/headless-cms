import React from 'react';

//benit-ui
import {AnswerShortQuestion} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getSpeakingAnswerShortQuestion} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)
function SpeakingAnswerShortQuestion(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let [index, setIndex] = React.useState(0)
  let {
    speakingAnswerShortQuestion, getSpeakingAnswerShortQuestion
  } = props

  React.useEffect(async() => {
    getSpeakingAnswerShortQuestion()
  }, [])

  const onAnswer = () => {
    setCheckAnswer(!checkAnswer)
  }

  const toPrevious = () => {
    setCheckAnswer(false)
    if (index !== 0) {
      setIndex(index - 1)
    }
  }

  const toNext = () => {
    setCheckAnswer(false)
    setIndex(index + 1)
  }

  return (
    <div>
      {speakingAnswerShortQuestion[index] && (
        <AnswerShortQuestion
          data={speakingAnswerShortQuestion[index]}
        />
      )}
      <Button className={classes.button} onClick={toPrevious}>
        Previous
      </Button>
      <Button className={classes.button} onClick={toNext}>
        Next
      </Button>
    </div>
  );
}

const mapStateToProps = ({practice}) => {
  return {
    speakingAnswerShortQuestion: practice.speaking.speakingAnswerShortQuestion
  };
};

const mapDispatchToProps = {
  getSpeakingAnswerShortQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakingAnswerShortQuestion);
