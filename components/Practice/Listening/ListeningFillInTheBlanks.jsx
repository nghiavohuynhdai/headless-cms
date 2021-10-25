import React from 'react';
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//benit-ui
import {FillInTheBlankText} from "benit-ui";
//redux
import {connect} from "react-redux";
import {getListeningFillInTheBlanks} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)
function ListeningFillInTheBlanks(props) {
  const classes = useStyles()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let {
    listeningFillInTheBlanks, getListeningFillInTheBlanks
  } = props

  React.useEffect(() => {
    getListeningFillInTheBlanks()
  }, [])

  const onAnswer = () => {
    setCheckAnswer(!checkAnswer)
  }

  return (
    <div>
      {listeningFillInTheBlanks[0] && (
        <FillInTheBlankText
          data={listeningFillInTheBlanks[0]}
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
    listeningFillInTheBlanks: practice.listening.listeningFillInTheBlanks
  };
};

const mapDispatchToProps = {
  getListeningFillInTheBlanks
};

export default connect(mapStateToProps, mapDispatchToProps)(ListeningFillInTheBlanks);
