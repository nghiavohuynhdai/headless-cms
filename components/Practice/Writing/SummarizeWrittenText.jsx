import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//benit-ui
import {SummarizeWrittenText} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getWritingSummarizeWrittenText} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)
function WritingSummarizeWrittenText(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let [index, setIndex] = React.useState(0)
  let {
    writingSummarizeWrittenText, getWritingSummarizeWrittenText
  } = props

  React.useEffect(() => {
    getWritingSummarizeWrittenText()
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
      {writingSummarizeWrittenText[index] && (
        <SummarizeWrittenText
          data={writingSummarizeWrittenText[index]}
          // isChecked={checkAnswer}
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
    writingSummarizeWrittenText: practice.writing.writingSummarizeWrittenText
  };
};

const mapDispatchToProps = {
  getWritingSummarizeWrittenText
};

export default connect(mapStateToProps, mapDispatchToProps)(WritingSummarizeWrittenText);
