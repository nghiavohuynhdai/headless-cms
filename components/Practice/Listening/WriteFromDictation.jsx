import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//benit-ui
import {WriteFromDictation} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getListeningWriteFromDictation} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)
function ListeningWriteFromDictation(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let {
    listeningWriteFromDictation, getListeningWriteFromDictation
  } = props

  React.useEffect(() => {
    getListeningWriteFromDictation()
  }, [])

  const onAnswer = () => {
    setCheckAnswer(!checkAnswer)
  }

  return (
    <div>
      {listeningWriteFromDictation[0] && (
        <WriteFromDictation
          data={listeningWriteFromDictation[0]}
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
    listeningWriteFromDictation: practice.listening.listeningWriteFromDictation
  };
};

const mapDispatchToProps = {
  getListeningWriteFromDictation
};

export default connect(mapStateToProps, mapDispatchToProps)(ListeningWriteFromDictation);
