import React from 'react'
//core components
import WritingWriteEssay from "../../../components/Practice/Writing/WriteEssay";
import WritingSummarizeWrittenText from "../../../components/Practice/Writing/SummarizeWrittenText";
//material-ui core
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: "center"
  },
  category: {
    width: "80%"
  }
});
export default function WritingTest(props) {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <div className={classes.category}>
        {props.testType === "summarize-written-text" && (
          <WritingSummarizeWrittenText/>
        )}
        {props.testType === "write-essay" && (
          <WritingWriteEssay/>
        )}
      </div>
    </div>
  )
}