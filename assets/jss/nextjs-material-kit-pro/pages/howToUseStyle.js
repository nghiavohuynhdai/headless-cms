import {
    container,
    title,
    main,
    mainRaised,
    mrAuto,
    whiteColor,
    mlAuto
  } from "assets/jss/nextjs-material-kit-pro.js";
  
  const howToUseStyle = {
    main,
    mainRaised,
    mrAuto:{
      ...mrAuto,
      marginRight: '0px',
    },
    mlAuto,
    container: {
      ...container,
      zIndex: 1
    },
    header:{
        color: "#222d39",
        fontWeight: 600,
        lineHeight: 1.6,
        fontSize: "30px",
        textAlign: 'center',
        marginBottom: "30px",
    },
    bodyContainer:{
        padding: "120px 0px",
        // margin: "0px 15%"
        maxWidth: "1024px",
    },
    signUpFreeContainer:{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        padding: "0px 70px !important",
    },
    banner:{
      "&>div>div>div>h1":{
        fontWeight: 700,
      }
    },
    signUpFree:{
        color: "#222d39",
        margin: "32px 0",
        fontSize: "26px",
        fontWeight: 500,
        textAlign: "center",
    },
    signUpFree2:{
      color: "#222d39",
      margin: "32px 0",
      fontSize: "26px",
      fontWeight: 500,
      textAlign: "center",
      lineHeight: 1.6,
  },
    signUpFreeContent:{
        fontsize: "15px",
        fontWeight: 400,
        color: '#677294',
        marginBottom: "16px",
        textAlign: 'center',
    },
    signUpFreeContent2:{
      fontsize: "15px",
      fontWeight: 400,
      color: '#677294',
      marginBottom: "16px",
      textAlign: 'center',
      marginBottom: "45px",
  },
    bigHead: {
        color: "#fff",
        textAlign: "center",
        fontSize: '50px',
        fontWeight: 700,
      },
    bold:{
        color: "red",
        textTransform: "uppercase",
    },
    blog1:{
      paddingBottom:"50px",
      "@media (max-width: 1279px)":{
        paddingBottom: "100px"
      }
    },
    blog1matches:{
      paddingBottom: "100px",
    },
    blog3:{
      paddingBottom:"50px",
      paddingTop: "40px",
      "@media (max-width: 1279px)":{
        paddingBottom: "100px",
        paddingTop:"0px",
      }
    },
    blog3matches:{
      paddingBottom:"100px",
      paddingTop: "40px",
    },

    dots:{
      width: "20px",
      height: "20px",
      backgroundColor: "rgba(255,161,39,.161)",
      display: "block",
      left: "-9px",
      top: "15px",
      zIndex: 2,
      position: "absolute",
      borderRadius: "50%",
    },
    dot1:{
      marginTop: "-4px",
      marginLeft: "-4px",
      background: "#feb85d",
      position: "absolute",
      borderRadius: "50%",
      left: "50%",
      top: "50%",
      width: "8px",
      height: "8px",
    },
    video:{
      width: "100%",
      height: '500px',
      marginTop: "5%",

    }
  };
  
  export default howToUseStyle;
  