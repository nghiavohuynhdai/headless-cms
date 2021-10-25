import {
    container,
    main,
    mainRaised,
    mrAuto,
    mlAuto
  } from "assets/jss/nextjs-material-kit-pro.js";
  
  const faqStyle = {
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
    bodyContainer:{
        padding: "120px 15px",
        margin: "0px 17%",
    },
    bodyCard:{
        background: "#fbfbfd",
        padding: "120px 15px",
    },
    navigation:{
        background: "#fff",
        padding: "50px 40px",
        textAlign: "center",
        height: "300px",
        width :"300px",
        marginBottom: "20px",
    },
    banner:{
      "&>div>div>div>h1":{
        fontWeight: 700,
      }
    },
    quickNav:{
        marginBottom: "40px",
        fontSize: "22px",
        color: '#222d39',
        fontWeight: 600,
        fontFamily: "Poppins, sans-serif",
    },
    quickNav1: {
      marginBottom: "40px",
      fontSize: "22px",
      color: '#222d39',
      fontWeight: 600,
      fontFamily: "Poppins, sans-serif",
    },
    tabContainer:{
      display: "flex",
      flexDirection:"column",
      alignItems: "center",
    },
    customSupport:{
        fontFamily: "Poppins, sans-serif",
        fontSize: "15px",
        color:"#677294",
        marginBottom: "20px",
        "&:focus":{
            color:"5E2CED",
        }
    },
    payment:{
        fontFamily: "Poppins, sans-serif",
        fontSize: "15px",
        color:"#677294",
        marginBottom: "20px",
        "&:focus":{
            color:"5E2CED",
        }
    },
    customerSupport:{
        fontFamily:"Poppins, sans-serif",
        fontSize: '22px',
        color: "#222d39",
    },
    customerSupport2:{
      fontFamily:"Poppins, sans-serif",
      fontSize: '22px',
      color: "#222d39",
      textAlign: "center",
  },
    refund:{
        fontFamily:"Poppins, sans-serif",
        fontSize: '22px',
        color: "#222d39",
    },
    refund2:{
        fontFamily:"Poppins, sans-serif",
        fontSize: '22px',
        color: "#222d39",
        textAlign: "center",
    },
    tabpanel:{
        "&>div":{
            padding: "0px 20px",
            marginBottom: "20px"
        }
    },
    supportDropdown:{
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: 'center',
      padding: "12px 0px",
      borderWidth: "0px",
      background:"#fbfbfd",
      boxShadow: "none",
      color: "#576370",
      width: "100%",
      textTransform: "none",
      "&:focus":{
        color: "#5E2CED",
        background:"#fbfbfd",
        boxShadow: "none",
      },
      "&:hover":{
        color: "#5E2CED",
        background:"#fbfbfd",
        boxShadow: "none",
      }
    },
    tabs:{
      "&>div>div":{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }
    },
    tab:{
      textTransform: "none", 
      color: "#677294",
      "&:focus":{
        textDecoration: "underline",
        color: "#5E2CED",
      }
    },
    underline:{
      border:"1px solid rgb(239, 239, 239)",
      width: '100%',
    },
    whatPayment:{
      fontFamily: 'Poppins, sans-serif',
      fontSize: "18px",
      fontWeight: 500,
    },
    dropdownContent:{
      fontSize: "15px",
      color: "#677294",
      fontWeight: 400,
      fontFamily: "Poppins, sans-serif",
      marginBottom: '16px',
    },
    paraContainer:{
      display: "block",
      textAlign: "center",
    },
    paraContainer1:{
      marginBottom: "20px",
      textAlign: "center",
    },
    paraShape:{
      marginBottom: "30px",
    },
    paraTitle:{
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: 500,
      fontFamily: 'Poppins, sans-serif',
      color: "#677294",
      marginBottom: "15px",
    },
    paraDetail:{
      fontSize: "15px",
      fontFamily: "Poppins, sans-serif",
      color: '#677294',
      lineHeight: 1.6,
    }
  };
  
  export default faqStyle;
  