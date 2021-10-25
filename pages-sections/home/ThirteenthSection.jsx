import React from "react";
import teamsStyle from "../../assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import {makeStyles} from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button";
import {ArrowForward, ArrowRightAlt} from "@material-ui/icons";

export default function ThirteenthSection(props) {
  const styles = theme => ({
    ...teamsStyle,
    yellowButton: {
      ...theme.yellowButton(theme),
    },
    buttonIcon: {
      marginLeft: 8
    }
  })
  const useStyles = makeStyles(styles);

  const classes = useStyles()

  return (
    <div
      className={classes.team + " " + classes.section}
      // style={{backgroundImage: `url(${require("assets/img/assets-for-demo/features-5.jpg")})`}}

    >
      <div className={classes.container } style={{textAlign: "center"}}>
        <h2 style={{color: "white"}}>Contact Us Today If You Need Help</h2>
        <Button className={classes.yellowButton}>Contact Us<ArrowRightAlt className={classes.buttonIcon}/></Button>
      </div>
    </div>

  )
}