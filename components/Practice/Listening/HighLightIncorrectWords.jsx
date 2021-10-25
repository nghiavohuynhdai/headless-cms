import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
import Button from "@material-ui/core/Button";
//benit-ui
import {HighlightIncorrectWords} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getListeningHighlightIncorrectWords} from "../../../store/mock-data/actions";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)

function ListeningHighLightIncorrectWords(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let {
    listeningHighlightIncorrectWords, getListeningHighlightIncorrectWords
  } = props

  React.useEffect(() => {
    getListeningHighlightIncorrectWords()
  }, [])

  const onAnswer = () => {
    setCheckAnswer(!checkAnswer)
  }

  return (
    <div>
      {listeningHighlightIncorrectWords[0] && (
        <HighlightIncorrectWords
          data={listeningHighlightIncorrectWords[0]}
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
    listeningHighlightIncorrectWords: practice.listening.listeningHighlightIncorrectWords
  };
};

const mapDispatchToProps = {
  getListeningHighlightIncorrectWords
};

export default connect(mapStateToProps, mapDispatchToProps)(ListeningHighLightIncorrectWords);
