import React, { useRef } from "react";
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Feedback } from "@material-ui/icons";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  carouselWrapper: {
    borderRadius: 4,
    position: "relative",
  },
  carouselItem: {
    height: "120px",
    width: "80%",
    backgroundColor: "#FFFFFF",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardTestimonial: {
    boxShadow: "none !important",
    margin: "40px 20px 0px",
    border: "1px solid rgb(242, 244, 247)",
    borderRadius: 5,
    padding: "30px",
    textAlign: "left",
    "& h3": {
      fontSize: "16px !important",
    },
  },
  userStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& img": {
      borderRadius: "50%",
      marginRight: "20px",
    },
  },
  userName: {
    fontWeight: "500 !important",
    fontSize: "16px !important",
    margin: "0px 0px 8px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px !important"
    }, 
  },
  userRole: {
    fontSize: "14px !important",
    margin: "0px !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important"
    }, 
  },
  userFeedback: {
    fontSize: "19px !important",
    fontWeight: 300,
    lineHeight: 1.7,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important"
    }, 
  },
}));

const TestimonialCarousel = (props) => {
  const classes = useStyles();

  /* const { itemPerPage, components } = props; */
  const { breakPoints, components } = props;
  
  let resetTimeout;
  const carouselRef = useRef(null);
  const totalPages = Math.ceil(components.length / 2);
  return (
    <div className="carousel-wrapper">
      <Carousel
        isRTL={false}
        breakPoints={breakPoints}
        className={classes.carouselWrapper}
        ref={carouselRef}
        showArrows={false}
        enableAutoPlay
        pagination={true}
        /** Infinite Loop for Carousel */
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout);
          if (index + 1 === totalPages) {
            resetTimeout = setTimeout(() => {
              if (carouselRef.current != null) {
                carouselRef.current.goTo(0);
              }
            }, 1500);
          }
        }}
      >
        {components.map((item, i) => (
          <Card className={classes.cardTestimonial}>
            <h3>{item.overview}</h3>
            <p className={classes.userFeedback}>{item.feedback}</p>
            <div className={classes.userStyle}>
              <img src={item.avatar.url} alt={item.avatar.alt} />
              <div>
                <p className={classes.userName}>{item.name}</p>
                <p className={classes.userRole}>{item.userRole}</p>
              </div>
            </div>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
