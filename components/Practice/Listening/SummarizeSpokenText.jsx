import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//benit-ui
import {SummariesSpokenText} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getListeningSummarizeSpokenText} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)
function ListeningSummarizeSpokenText(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let {
    listeningSummarizeSpokenText, getListeningSummarizeSpokenText
  } = props

  React.useEffect(() => {
    getListeningSummarizeSpokenText()
  }, [])

  const onAnswer = () => {
    setCheckAnswer(!checkAnswer)
  }

  return (
    <div>
      {listeningSummarizeSpokenText[0] && (
        <SummariesSpokenText
          data={listeningSummarizeSpokenText[0]}
          isChecked={checkAnswer}
        />
      )}
      <Button className={classes.button} onClick={onAnswer}>
        Answer
      </Button>
    </div>
  );
}

const mapStateToProps = ({practice}) => {
  return {
    listeningSummarizeSpokenText: practice.listening.listeningSummarizeSpokenText
  };
};

const mapDispatchToProps = {
  getListeningSummarizeSpokenText
};

export default connect(mapStateToProps, mapDispatchToProps)(ListeningSummarizeSpokenText);
