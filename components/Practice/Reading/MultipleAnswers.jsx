import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//benit-ui
import {MultipleChoicesR} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getReadingMultipleAnswers} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)

function ReadingMultipleAnswers(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let [index, setIndex] = React.useState(0)
  let {
    readingMultipleAnswers, getReadingMultipleAnswers
  } = props

  React.useEffect(() => {
    getReadingMultipleAnswers()
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
    <div id="fib-r">
      {readingMultipleAnswers[index] && (
        <MultipleChoicesR
          data={readingMultipleAnswers[index]}
          isChecked={checkAnswer}
        />
      )}
      <Button className={classes.button} onClick={onAnswer}>
        Answer
      </Button>
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
    readingMultipleAnswers: practice.reading.readingMultipleAnswers
  };
};

const mapDispatchToProps = {
  getReadingMultipleAnswers
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadingMultipleAnswers);
