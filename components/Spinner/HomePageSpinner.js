import React from "react";
import spinner from "assets/img/spin.png"
import {makeStyles} from "@material-ui/core";

export default function HomePageSpinner(props) {
  const styles = {
    "@keyframes spin": {
      from: {
        transform:"rotate(0deg)",
      },
      to: {
        transform:"rotate(360deg)",
      }
    },
    spinner: {
      WebkitAnimation: "$spin 1.5s linear infinite",
      animation: "$spin 1.5s linear infinite",
    }
  }
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  return (
    <div>
      <img className={classes.spinner} src={spinner} alt={"spinner"}/>
    </div>
  )
}
