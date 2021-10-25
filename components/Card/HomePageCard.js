import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import Card from "./Card";
import PropTypes from "prop-types";

const HomePageCard = (props) => {
  const styles = theme => ({
    cardTitle: {
      fontSize: 18,
      fontWeight: 700,
      textAlign: "center"
    },
    description: {
      color: "#666"
    },
    header: {
      textAlign: "center",
      paddingBottom: 0,
      paddingLeft: 0
    },
    body: {
      paddingTop: 0
    },
    circle: {
      width: 220,
      height: 220,
      borderRadius: "50%",
      margin: "auto",
      marginBottom: -160,
      zIndex: -1,
      background: theme.color.lightYellow,
    },
    img: {
      zIndex: 3
    }
  })

  const useStyles = makeStyles(styles);

  const classes = useStyles()
  const {title, img, content} = props
  return (
    <Card plain blog>
      <CardHeader className={classes.header} plain >
        <div>
          <div className={classes.circle}>
          </div>
          <img className={classes.img} src={img} alt="..." />
        </div>
      </CardHeader>
      <CardBody className={classes.body} plain>
        <h4 className={classes.cardTitle}>
          {title}
        </h4>
        <p className={classes.description}>
          {content}
        </p>
      </CardBody>
    </Card>
  )
}
HomePageCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string

}
export default HomePageCard