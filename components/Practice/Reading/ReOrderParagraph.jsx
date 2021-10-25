import React from "react";
import { ReadingReOrderParagraph } from "benit-ui";
//core components
import NavBarPractice from "../../NavBar/NavBarPractice";
//redux
import {connect} from "react-redux";
import {getReadingReOrderParagraph} from "../../../store/mock-data/actions";
import Button from "@material-ui/core/Button";
import styles from '../../../assets/jss/nextjs-material-kit-pro/components/buttonPracticeStyle'
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(styles)

function ReadingReOrderParagraphQ(props) {
  const classes = useStyles()
  let [ropData, setRopData] = React.useState()
  let [checkAnswer, setCheckAnswer] = React.useState(false)
  let {
    readingReOrderParagraph, getReadingReOrderParagraph
  } = props

  React.useEffect(() => {
    getReadingReOrderParagraph()
  }, [])

  React.useEffect(() => {
    if (readingReOrderParagraph[0]) {
      let expectAnswer = readingReOrderParagraph[0].expectAnswer
        .replace(/\s/g, "")
        .split(",");
      expectAnswer.length === 5
        ? (setRopData({
          choices: [
            {
              text: readingReOrderParagraph[0].answerA,
              label: "A",
              correct: expectAnswer[0],
            },
            {
              text: readingReOrderParagraph[0].answerB,
              label: "B",
              correct: expectAnswer[1],
            },
            {
              text: readingReOrderParagraph[0].answerC,
              label: "C",
              correct: expectAnswer[2],
            },
            {
              text: readingReOrderParagraph[0].answerD,
              label: "D",
              correct: expectAnswer[3],
            },
            {
              text: readingReOrderParagraph[0].answerE,
              label: "E",
              correct: expectAnswer[4],
            },
          ],
        }))
        : (setRopData({
          choices: [
            {
              text: readingReOrderParagraph[0].answerA,
              label: "A",
              correct: expectAnswer[0],
            },
            {
              text: readingReOrderParagraph[0].answerB,
              label: "B",
              correct: expectAnswer[1],
            },
            {
              text: readingReOrderParagraph[0].answerC,
              label: "C",
              correct: expectAnswer[2],
            },
            {
              text: readingReOrderParagraph[0].answerD,
              label: "D",
              correct: expectAnswer[3],
            },
          ],
        }))
    }
  }, [readingReOrderParagraph[0]])

    const onAnswer = () => {
      setCheckAnswer(!checkAnswer)
    }
    return (
      <div style={{ marginBottom: 15, marginLeft: 200 }}>
        {ropData && (
          <>
            <ReadingReOrderParagraph data={ropData} />
            {checkAnswer ? (
              <div style={{marginLeft:18}}>
                <p style={{ fontWeight: 600, display:"contents" }}>Answer:</p>
                {readingReOrderParagraph[0].expectAnswer}</div>
            ) : (
              <div>{""}</div>
            )}
          </>
        )}
        <Button className={classes.button} onClick={onAnswer}>
          Answer
        </Button>
      </div>
    );
}

const mapStateToProps = ({practice}) => {
  return {
    readingReOrderParagraph: practice.reading.readingReOrderParagraph
  };
};

const mapDispatchToProps = {
  getReadingReOrderParagraph
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadingReOrderParagraphQ);
