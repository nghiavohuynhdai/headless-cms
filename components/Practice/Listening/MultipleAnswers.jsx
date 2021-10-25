import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//benit-ui
import {MultipleChoicesL} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getListeningMultipleAnswers} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)
function ListeningChooseMultipleAnswer(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let [index, setIndex] = React.useState(0)
  let {
    listeningMultipleAnswers, getListeningMultipleAnswers
  } = props

  React.useEffect(() => {
    getListeningMultipleAnswers()
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
      {listeningMultipleAnswers[index] && (
        <MultipleChoicesL
          data={listeningMultipleAnswers[index]}
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
    listeningMultipleAnswers: practice.listening.listeningMultipleAnswers
  };
};

const mapDispatchToProps = {
  getListeningMultipleAnswers
};

export default connect(mapStateToProps, mapDispatchToProps)(ListeningChooseMultipleAnswer);
