import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//benit-ui
import {HighlightSummary} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getListeningHighlightCorrectSummary} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)

function ListeningHighLightCorrectSummary(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let {
    listeningHighlightCorrectSummary, getListeningHighlightCorrectSummary
  } = props

  React.useEffect(() => {
    getListeningHighlightCorrectSummary()
  }, [])

  const onAnswer = () => {
    setCheckAnswer(!checkAnswer)
  }

  return (
    <div>
      {listeningHighlightCorrectSummary[0] && (
        <HighlightSummary
          data={listeningHighlightCorrectSummary[0]}
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
    listeningHighlightCorrectSummary: practice.listening.listeningHighlightCorrectSummary
  };
};

const mapDispatchToProps = {
  getListeningHighlightCorrectSummary
};

export default connect(mapStateToProps, mapDispatchToProps)(ListeningHighLightCorrectSummary);
