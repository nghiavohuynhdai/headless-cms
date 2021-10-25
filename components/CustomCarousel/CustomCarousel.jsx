import React from "react"
import PropTypes from "prop-types"
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    textAlign: "center",
    background: 'url("https://old.ptemagicpractice.com/wp-content/themes/saasland/assets/css/../img/new/testimonial_bg.png")',
    height: 465,
    backgroundRepeat: "no-repeat",
    backgroundSize: 450,
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: 400
  },
  content: {
    maxWidth: 348,
    margin: "72px 45px 0px 60px",
    fontStyle: "italic"
  }
}))

function CustomCarousel(props) {
  const classes = useStyles();

  const { activeIndex, components, ...rest } = props

  return (
    <div className={classes.itemContainer}>
      <Carousel
        animation="slide"
        // navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        // swipe={true}
        timeout={500}
        // autoPlay={true}
        // stopAutoPlayOnHover
        // {...rest}
        index={activeIndex}
        navButtonsAlwaysInvisible={true}
      >
        {components.map((item, i) => <div >
          <img src={item.img} />
          <p className={classes.content}>{item.content}</p>
          <h5>{item.user}</h5>
        </div>)}
      </Carousel></div>
  )
}

CustomCarousel.PropTypes = {
  components: PropTypes.array.isRequired
}

export default CustomCarousel;
// old.ptemagicpractice.com/wp-content/themes/saasland/assets/css/../img/new/testimonial_bg.png