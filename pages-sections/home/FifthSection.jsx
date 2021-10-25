import React from "react";
// import bg7 from "assets/img/bg7.jpg";
import {makeStyles} from "@material-ui/core/styles";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";

export default function FifthSection(props) {
  const styles = theme => ({
    ...teamsStyle
  })
  const useStyles = makeStyles(styles);

  const classes = useStyles()

  return (
    <div
      className={classes.team + " " + classes.section}
      // style={{backgroundImage: `url(${bg7})`}}

    >
      <div className={classes.container } style={{textAlign: "center"}}>
        <h2 style={{color: "white"}}>“PTE Academic - All You Need To Know.”</h2>
        <h5 style={{color: "white"}}>PTE Magic</h5>
      </div>
    </div>

  )
}