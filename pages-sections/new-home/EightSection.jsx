import React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import TesttimonialCarousel from "../../components/CustomCarousel/TestimonialCarousel";

//icons
import apple from "assets/img/home/apple.svg";
import chplay from "assets/img/home/chplay.svg";
import pc from "assets/img/home/pc.png";
import mobile from "assets/img/home/mobile.png";
import TestimonialCarousel from "../../components/CustomCarousel/TestimonialCarousel";
import jenydoe from "../../assets/img/new-home/jenydoe.jpeg";
import jondoe from "../../assets/img/new-home/jondoe.jpeg";

const useStyles = makeStyles(theme => ({
  ...teamsStyle,
  root: {
    marginTop: 100,
    [theme.breakpoints.down("sm")]: {
      marginTop: 60
    },
  },
  sectionHeader: {
    textAlign: "center",
    "& h2": {
      textTransform: "uppercase",
      fontSize: 14,
      lineHeight: 1.2,
      fontWeight: 700,
      color: "rgb(255, 208, 0)",
      margin: 0,
    },
    "& h3": {
      fontSize: 24,
      fontWeight: 500,
      color: "rgb(15, 33, 55)",
      marginTop: 5,
      lineHeight: 1.67,
    },
  },
  cardContainer: {
    borderRadius: 5,
    boxShadow: "none !important",
    backgroundColor: "white",
    padding: "40px 60px",
  },
  cardItem: {
    "& img": {
      width: "95%",
      boxShadow: "0 2px 8px rgb(84 70 35 / 15%), 0 1px 3px rgb(84 70 35 / 15%)",
      height: 213,
    },
    "& h2": {
      fontSize: 22,
      lineHeight: 1.3,
      fontWeight: 700,
    },
  },
  cardItemDesktop: {
    "& img": {
      width: "95%",
      boxShadow: "0 2px 8px rgb(84 70 35 / 15%), 0 1px 3px rgb(84 70 35 / 15%)",
      height: 213,
    },
    "& h2": {
      fontSize: 22,
      lineHeight: 1.3,
      fontWeight: 700,
    },
    ["@media (max-width:800px)"]: {
      marginLeft: "150px",
    },
    ["@media (max-width:650px)"]: {
      marginLeft: "100px",
    },
    ["@media (max-width:500px)"]: {
      marginLeft: "-10px",
    },
  },
  textField: {
    border: "1px solid #000000",
    height: "50px",
    padding: 10,
    paddingLeft: 20,
    width: "370px",
    borderRadius: 5,
    marginRight: 15,
    ["@media (max-width:550px)"]: {
      width: "100%",
    },
  },
  signUpContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
  },
  signUpButtons: {
    display: "flex",
    flexDirection: "row",
    marginTop: 24,
    marginLeft: "-45px",
    ["@media (max-width:1200px)"]: {
      flexDirection: "column",
    },
  },
  signUpButton: {
    backgroundColor: "#FB2E54",
    border: "1px solid #808080",
    borderRadius: "9px",
    color: "#ffffff",
    height: "50px",
    width: "100px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#FB2E54",
      border: "1px solid #000000",
      color: "#ffffff",
    },
    ["@media (max-width:550px)"]: {
      width: "100%",
    },
  },
  osButton: {
    marginRight: 15,
    padding: 15,
    backgroundColor: "#FB2E54",
    border: "1px solid #EB5757",
    color: "white",
    maxHeight: 36,
    height: "100%",
    width: "auto",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fdf5f2",
      border: "1px solid #EB5757",
      color: "#EB5757",
    },
    ["@media (max-width:1200px)"]: {
      width: "170px",
      marginLeft: "30px",
    },
  },
  chplayButton: {
    marginRight: 15,
    padding: 15,
    backgroundColor: "#FBAA45",
    border: "1px solid #EB5757",
    color: "white",
    maxHeight: 36,
    height: "100%",
    width: "auto",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#fdf5f2",
      border: "1px solid #EB5757",
      color: "#EB5757",
    },
    ["@media (max-width:1200px)"]: {
      marginTop: "20px",
      width: "170px",
      marginLeft: "30px",
    },
  },
  hr: {
    marginTop: 120,
    width: "100%",
  },
  miniTitle: {
    fontSize: 7,
    display: "block",
  },
  title: {
    fontSize: 10,
    display: "block",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  webApp: {
    width: "480px !important",
    height: "280px !important",
    ["@media (max-width:650px)"]: {
      display: "none !important",
    },
  },
}));

const EightSection = () => {
  const classes = useStyles();
  const breakPoints = [
    {
      width: 1, itemsToShow: 1
    },
    {
      width: 550, itemsToShow:2, itemsToScroll: 2, pagination: false
    },
  ]
  const components = [
    {
      overview: "Closed to the real test",
      feedback:
        "PTE Magic practice platform is useful and closed to the real test. I only practised on this platform and got the score which was higher than I expected. I totally recommend it.",
      avatar: jenydoe,
      name: "Grace Lieu",
      userRole: "PTE Magic's Student",
    },
    {
      overview: "84+ PTE after 2",
      feedback:
        "The learning platform which is constantly updated with most repeated questions has been a great help to me in revision. This was my first time taking the exam, with only two months to prepare for a target score 69+, ending up with 84+",
      avatar: jondoe,
      name: "Jeny Doe",
      userRole: "PTE Magic's Student",
    },
    {
      overview: "Quick to achieve target",
      feedback:
        "Today i got my desired score. I was lacking in Speaking from last one year i can't reach above 60 as my requirement was 65 in all modules, but today i got 79 in speaking, writing and listening 65 and Reading 68.",
      avatar: jenydoe,
      name: "Karam Sandhu",
      userRole: "PTE Magic's Student",
    },
    {
      overview: "Useful Platform to practice",
      feedback:
        "I recommend subscribing to their platform. Their staff will also provide you guidance on what you need to improve on after a mock test. Their practice questions are all helpful in preparing you for the real exam.",
      avatar: jondoe,
      name: "Radino Estoria",
      userRole: "PTE Magic's Student",
    },
    // {
    //   overview: "Modern look & trending design",
    //   feedback:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.",
    //   avatar: jenydoe,
    //   name: "Jeny Doe",
    //   userRole: "Manager of HP .Co",
    // },
    // {
    //   overview: "Modern look & trending design",
    //   feedback:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.",
    //   avatar: jondoe,
    //   name: "Jeny Doe",
    //   userRole: "Manager of HP .Co",
    // },
  ];
  return (
    <div className={`${classes.root} ${classes.container}`}>
      <div className={classes.sectionHeader}>
        <h2>TESTIMONIAL</h2>
        <h3>What our happy students say about us</h3>
        {/* <TestimonialCarousel components={components} itemPerPage={2} /> */}
        <TestimonialCarousel components={components} breakPoints={breakPoints} />
      </div>
    </div>
  );
};

export default EightSection;
