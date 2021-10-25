import React from "react";
import { makeStyles } from "@material-ui/core";

import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import person1 from "assets/img/person1.png";
import person2 from "assets/img/person2.jpg";
import person3 from "assets/img/person3.jpg";
import person4 from "assets/img/person4.png";
import person5 from "assets/img/person5.jpg";
import person6 from "assets/img/person6.jpg";
import person7 from "assets/img/person7.jpg";
import person8 from "assets/img/person8.jpg";
import commenter1 from "assets/img/commenter1.png";
import commenter2 from "assets/img/commenter2.png";
import bee from "assets/img/bee.png";
import presentationStyle from "../../assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import Quote from "components/Typography/Quote.js";
import FormatQuote from "@material-ui/icons/FormatQuote";
import CardBody from "components/Card/CardBody";
import ArrowForwardSharpIcon from "@material-ui/icons/ArrowForwardSharp";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "../../components/CustomButtons/Button";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import Banner from "components/Parallax/Banner.js";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  ...presentationStyle,
  initialLetter: {
    fontSize: "35px",
    lineHeight: "70px",
    initialLetter: 2,
  },
  contentCenter:{
    paddingLeft:"100px"
  },
  aboutUsContent: {
    color: "#000",
    fontFamily: ' "Roboto", "Sans-serif" ',
    fontSize: "16px",
    fontWeight: 400,
    marginBottom: "16px",
  },
  thisIs: {
    fontSize: "40px",
    color: "#000",
    fontWeight: 500,
    marginBottom: "7px",
    marginTop: "30px",
  },
  platform: {
    fontSize: "32px",
    color: "#000",
    fontWeight: 500,
    marginTop: "12px",
    marginBottom: "7px",
  },
  video: {
    backgroundSize: "cover",
    backgroundPosition: "50%",
    width: "100%",
    height: "auto",
  },
  videoContainer: {
    padding: "10px",
  },
  pteMagicTeam: {
    fontWeight: "bold",
    textAlign: "center",
  },
  explorePte: {
    marginTop: "30px",
    color: "#677294",
    font: '600 16px/25px "Poppins",sans-serif',
    fontWeight: "600",
    width: "fit-content",
    margin: "auto",
    marginTop: "30px !important",
    marginBottom: "150px !important",
    display: "flex",
    alignItems: "center",
    columnGap: "10px",
    animationDelay: "0.2s",
    borderBottom: "1px solid #677294",
    transition: "all .1s linear",
    "&:hover": {
      columnGap: "15px",
      color: "#051441",
    },
  },
  carouselText: {
    color: "#677294",
    fontSize: "32px",
    lineHeight: "48px",
    paddingBottom: "70px",
    fontWeight: 600,
  },

  card: {
    marginBottom: "20px",
    position: "relative",
    width: "250px",
    height: "357px",
    borderRadius: "15px",
    overflow: "hidden",
    cursor: "pointer",
    transition: ".5s",
    "&:hover img": {
      opacity: ".4",
      transition: ".5s",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "410px",
    },
  },
  cardImage: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "2",
    transition: ".5s",
    overflow: "hidden",
    objectFit: "cover",
    "& img": {
      display: "block",
      width: "100%",
    },
    "&:hover img": {
      transform: "translateY(-120px)",
      transition: "0.5s",
    },
  },
  details: {
    position: "absolute",
    bottom: "0",
    left: "0",
    background: "#fff",
    width: "100%",
    height: "120px",
    zIndex: "1",
    padding: "20px",
    textAlign: " center",
    display: " flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    "& h2": {
      margin: "0",
      color: "#333",
    },
  },
  containerflex: {
    marginLeft: "-15px",
    marginRight: "10px",
  },
  socialIconsItems: {
    marginRight: "10px",
    width: "0px",
    "& a": {
      fontSize: "30px",
      color: "gray",
    },
  },
  imgHolder: {
    display: "flex",
    justifyContent: "center",
  },
}));

function FeedbackSection(props) {
  const classes = useStyles();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const reviewContent = [
    {
      img: person1,
      user: "Moni Vuong",
      facebook: "https://www.facebook.com/moni.vuong",
    },
    {
      img: person2,
      user: "Hoang Anh Truong",
      facebook: "https://www.facebook.com/hoanganh.truong306",
    },
    {
      img: person3,
      user: "Peter Pham",
      facebook: "",
    },
    {
      img: person4,
      user: "Narenda",
      facebook: "https://www.facebook.com/narendra.ptemagic",
    },
    {
      img: person5,
      user: "Yen Banh",
      facebook: "https://www.facebook.com/yen.banh.9",
    },
    {
      img: person6,
      user: "Thang Nguyen",
      facebook: "https://www.facebook.com/thang.gia",
    },
    {
      img: person7,
      user: "Nathan Truong",
      facebook: "https://www.facebook.com/ttlong1",
    },
    {
      img: person8,
      user: "Kay Chen",
      facebook: "https://www.facebook.com/kay.ptemagic.9",
    },
  ];

  const reviewContent2 = [
    {
      img: commenter1,
      user: "Maxi Hsu",
      content:
        "PTE MAGIC has an excellent platform and mock tests. After 2 weeks intensive classes and having a 1:1 review with Kay, I got my target score. I highly recommend to those who are struggling to get their target score. Big thank you to Moni and Kay for your help. Thank you PTE MAGIC 🥰🥰🥰",
    },
    {
      img: commenter2,
      user: "Annie Nguyen",
      content:
        "PTE Magic is the best PTE centre with the most passionate and lovely teachers. I wouldn't have been able to achieve my 79+ target without the great help of Moni, who I admire a lot. Thank you so much!! 💕💕 Big thank you to Moni and Kay for your help. Thank you PTE MAGIC 🥰🥰🥰💫",
    },
    {
      img: commenter1,
      user: "Maxi Hsu",
      content:
        "PTE MAGIC has an excellent platform and mock tests. After 2 weeks intensive classes and having a 1:1 review with Kay, I got my target score. I highly recommend to those who are struggling to get their target score. Big thank you to Moni and Kay for your help. Thank you PTE MAGIC 🥰🥰🥰",
    },
    {
      img: commenter2,
      user: "Annie Nguyen",
      content:
        "PTE Magic is the best PTE centre with the most passionate and lovely teachers. I wouldn't have been able to achieve my 79+ target without the great help of Moni, who I admire a lot. Thank you so much!! 💕💕 Big thank you to Moni and Kay for your help. Thank you PTE MAGIC 🥰🥰🥰💫",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleBack = () => {
    if (activeIndex == 0) {
      setActiveIndex(reviewContent.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex == reviewContent.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <div>
      <div className={classes.container}>
        <GridContainer className={classes.contentCenter}>
          <GridItem md={5} sm={12} xs={12}>
            <div className={classes.carouselText}>We've heard things like</div>
            <div style={{ display: "flex", columnGap: "8px" }}>
              <Button round color="purple" justIcon onClick={handleBack}>
                <ArrowBackIosIcon />
              </Button>
              <Button round color="purple" justIcon onClick={handleNext}>
                <ArrowForwardIosIcon />
              </Button>
            </div>
          </GridItem>
          <GridItem md={7} sm={12} xs={12}>
            <CustomCarousel
              components={reviewContent2}
              activeIndex={activeIndex}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

export default FeedbackSection;
