import React from "react"
import PropTypes from "prop-types"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, makeStyles } from '@material-ui/core'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader";
import { CardContent } from "@material-ui/core";
import CardFooter from "components/Card/CardFooter";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    textAlign: "center",
    height: 465,
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: 400,
  },
  content: {
    maxWidth: 348,
    margin: "72px 45px 0px 60px",
    fontStyle: "italic"
  },
  
}))

function CustomCarousel(props) {
  const classes = useStyles();

  const { activeIndex, components, ...rest } = props
  let slide1 = components[0]
//   console.log("first components", slide1[0].title)


  return (
    <div className={classes.itemContainer}>
      <Carousel
        animation="slide"
        // navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        // swipe={true}
        // timeout={500}
        autoPlay={false}
        // stopAutoPlayOnHover
        // {...rest}
        index={activeIndex}
        navButtonsAlwaysInvisible={true}
      >
          
        {components.map((item, i) => item)}
      </Carousel></div>
  )
}

CustomCarousel.PropTypes = {
  components: PropTypes.array.isRequired
}

export default CustomCarousel;
// old.ptemagicpractice.com/wp-content/themes/saasland/assets/css/../img/new/testimonial_bg.png