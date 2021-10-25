import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import {makeStyles} from "@material-ui/core/styles";
// import bg7 from "assets/img/bg4.jpg";
import React from "react";

export default function EighthSection() {
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
        <h2 style={{color: "white"}}>“With MAGIC, 79+ Is In Your Hand.”</h2>
        <h5 style={{color: "white"}}>PTE Magic</h5>
      </div>
    </div>

  )
}