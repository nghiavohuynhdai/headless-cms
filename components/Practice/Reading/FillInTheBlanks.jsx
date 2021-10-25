import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";

//benit-ui
import { FillInTheBlankRFIB } from 'benit-ui'

//redux
import {connect} from "react-redux";
import {getReadingFillInTheBlanks} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)

function ReadingFillInTheBlanks(props) {
  const classes = useStyles()
  let [fillInTheBlankRFIB, setFillInTheBlankRFIB] = React.useState()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let [index, setIndex] = React.useState(0)
  let {
    readingFillInTheBlanks, getReadingFillInTheBlanks
  } = props

  React.useEffect(() => {
    getReadingFillInTheBlanks()
  }, [])

  React.useEffect(() => {
    if(readingFillInTheBlanks[index]){
      let question = readingFillInTheBlanks[index]
      let answerKeys = Object.keys(question).filter(k => k.includes("answer"))
      let choices = {}
      let columns = {}
      let answer = []
      answerKeys.forEach((key,index) => {
        if (question[key] !== null && question[key].trim() !== ""){
          let correct = null
          question.expectAnswer.split(', ').forEach((value,i) => {
            if (key === 'answer'+value){
              correct = i+1
            }
          })
          choices[`task-`+index] = {
            'id' : `task-`+index,
            'text' : question[key],
            'correct' : correct
          }
        }
      })
      question.expectAnswer.split(', ').forEach((value,index) => {
        answerKeys.forEach((key,i) => {
          if (key === 'answer'+value){
            answer.push(" " + question[key])
            columns['column-'+index] = {
              'id' : 'column-'+index,
              'taskIds' : []
            }
          }
        })

      })
      columns['column-data'] = {
        'id' : 'column-data',
        'taskIds' : Object.keys(choices)
      }
      setFillInTheBlankRFIB({
        isChecked: checkAnswer,
        question: {
          answer: answer.toString(),
          columns: columns,
          choices: choices,
          text: question.text,
        },
      })
    }
  }, [index, checkAnswer, readingFillInTheBlanks[index]])

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

  React.useEffect(() => {
    console.log(fillInTheBlankRFIB)
  }, [fillInTheBlankRFIB])
  return (
    <div id="fib-r">
      {fillInTheBlankRFIB && (
        <FillInTheBlankRFIB data={fillInTheBlankRFIB}/>
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
    readingFillInTheBlanks: practice.reading.readingFillInTheBlanks
  };
};

const mapDispatchToProps = {
  getReadingFillInTheBlanks
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadingFillInTheBlanks);
