import {
    container,
    title,
    main,
    mainRaised,
    mrAuto,
    whiteColor,
    mlAuto
  } from "assets/jss/nextjs-material-kit-pro.js";
  
  const aboutUsStyle = {
    main,
    mainRaised,
    mrAuto,
    mlAuto,
    container: {
      ...container,
      zIndex: 1
    },
    title: {
      ...title,
      "&, & + h4": {
        color: whiteColor
      }
    },
    textCenter: {
      textAlign: "center"
    },
    block: {
      color: "inherit",
      padding: "0.9375rem",
      fontWeight: "500",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "3px",
      textDecoration: "none",
      position: "relative",
      display: "block"
    },
    inlineBlock: {
      display: "inline-block",
      padding: "0px",
      width: "auto"
    },
    list: {
      marginBottom: "0",
      padding: "0",
      marginTop: "0"
    },
    left: {
      float: "left!important",
      display: "block"
    },
    right: {
      padding: "15px 0",
      margin: "0",
      float: "right"
    },
    icon: {
      width: "18px",
      height: "18px",
      top: "3px",
      position: "relative"
    },
    socialButtons: {
        "& li": {
          display: "inline-block"
        }
    },
    leftGrid:{
        padding: "60px",
        background: "#efd9ca",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    upperIcon:{
        position: "relative",
        margin: "30px 0",
    },
    lowerIcon: {
        position: "relative",
        textAlign: 'right',
        margin: "30px 0",
    },
    pentagon:{
        position: "absolute",
        left:"20px",
        bottom: "15px",
    },
    triangle:{
        position: "inherit",
        bottom: '15px',
        right: "25px",
    },
    leftText:{
        textAlign: "center",
        fontWeight: 700,
        fontSize: "30px",
        lineHeight: 1.6,
        color: "black",
        fontFamily: "Apercu",
    },
    rightGrid:{
        background: "#141c3a",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    rightGrid600:{
      background: "#141c3a",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "300px",
  },
    rightText: {
        color: "white",
        fontWeight: 400,
        textAlign: "center",
        fontSize: '18px',
        fontFamily: "Apercu",
    },
    questionSide: {
        background: 'yellow',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "45px",
        fontWeight: "bold",
        color: "black",
        lineHeight: 1.6,
        textAlign: "center",
    },
    questionSide600: {
      background: 'yellow',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "45px",
      fontWeight: "bold",
      color: "black",
      lineHeight: 1.6,
      textAlign: "center",
      minHeight: "300px",
  },
    answerSide: {
        background: "#141c3a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px",
    },
    anwserOption: {
        background: "white",
        minHeight: "100px",
        width: "100%",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px",
        margin: "10px 0",
        color: "black",
        fontWeight: 700,
        fontSize: "16px",
        boxSizing: 'border-box',
        "&:hover": {
            background: "#efd9ca",
            textDecoration: 'underline',
            color: "black"
        },
        "&:focus": {
            background: "#efd9ca",
            textDecoration: 'underline',
            color: "black"
        }
    },
    startButton:{
      width: "50%",
      background: "yellow", 
      color: "black",
      fontSize: "16px",
      fontWeight: "bold",
      fontFamily: "Apercu",
      textTransform: "none",
      "&:hover": {
        background: "yellow", 
        color: "black",
      },
      "&:focus": {
        background: "yellow", 
        color: "black",
      }
    },
    page: {
      height: "100%",
    }
  };
  
  export default aboutUsStyle;
  