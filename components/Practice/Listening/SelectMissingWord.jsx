import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//benit-ui
import {SelectMissingWord} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getListeningSelectMissingWord} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)
function ListeningSelectMissingWord(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let [data, setData] = React.useState(null)
  let {
    listeningSelectMissingWord, getListeningSelectMissingWord
  } = props

  React.useEffect(() => {
    getListeningSelectMissingWord()
  }, [])

  const onAnswer = () => {
    setCheckAnswer(!checkAnswer)
  }

  React.useEffect(() => {
    if(listeningSelectMissingWord[0]) {
      setData(listeningSelectMissingWord[0])
    }
  }, [listeningSelectMissingWord])

  return (
    <div>
      {data !== null && (
        <SelectMissingWord
          data={data}
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
    listeningSelectMissingWord: practice.listening.listeningSelectMissingWord
  };
};

const mapDispatchToProps = {
  getListeningSelectMissingWord
};

export default connect(mapStateToProps, mapDispatchToProps)(ListeningSelectMissingWord);
