import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//benit-ui
import {FillInTheBlankRW} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getReadingFillInTheBlanksDropDown} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)

function ReadingSingleAnswer(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let [index, setIndex] = React.useState(0)
  let {
    readingFillInTheBlanksDropDown, getReadingFillInTheBlanksDropDown
  } = props

  React.useEffect(() => {
    getReadingFillInTheBlanksDropDown()
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
      {readingFillInTheBlanksDropDown[index] && (
        <FillInTheBlankRW
          data={readingFillInTheBlanksDropDown[index]}
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
    readingFillInTheBlanksDropDown: practice.reading.readingFillInTheBlanksDropDown
  };
};

const mapDispatchToProps = {
  getReadingFillInTheBlanksDropDown
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadingSingleAnswer);
