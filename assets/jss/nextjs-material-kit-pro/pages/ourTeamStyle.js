import {
  container,
  title,
  main,
  mainRaised,
  mrAuto,
  whiteColor,
  mlAuto,
} from "assets/jss/nextjs-material-kit-pro.js";
import knott from "assets/img/knott.jpg";
import kendall from "assets/img/faces/kendall.jpg";


const aboutUsStyle = {
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  container: {
    ...container,
    zIndex: 1,
  },
  title: {
    ...title,
    "&, & + h4": {
      color: whiteColor,
    },
  },
  textCenter: {
    textAlign: "center",
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
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative",
  },
  socialButtons: {
    "& li": {
      display: "inline-block",
    },
  },
  img:{
    cursor: "pointer",
    width: "100%",
    display: "block",
  },
  imageContainer:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "15px",
  },
  blogContainer: {
    backgroundImage: `url(${knott})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: 'right top',
    minHeight: "1000px",
    marginTop: "82px",
    width: "100%",
    padding: "80px 40px 40px 40px",
  },
  blogInfo:{
    display: "flex",
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: "center",
    color: "white"
  },
  header: {
    fontSize: "60px",
    fontWeight: 900,
  },
  job: {
    fontSize: "20px",
    fontWeight: 600,
  },
  bio: {
    fontSize: "20px",
    fontWeight: 400,
    margin: '20px 0 !important',
  },
  description: {
    fontSize: "14px",
  },
  imgBlog: {
    textAlign: "center",
  },
  imgName: {
    fontSize: "30px",
    marginBottom: "15px",
    fontWeight: 500,
    color: "#484747",
    fontFamily: 'Crimson Text',
    opacity: "1 !important",
    
  },
  imgJob: {
    fontSize: "24px",
    fontWeight: 400,
    fontFamily: "Karla",
    opacity: "1 !important",
  },

  container: {
    position: "relative",
    padding: "5%",
    "&:hover": {
      opacity: 1,
    }
  },
  overlay:{
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 15,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "92%",
    height: "100%",
    opacity: "0",
    transition: "0.9s ease",
    background: "white", 
    "&:hover": {
      opacity: "0.6",
    }
  },
  body:{
    width: "85%",
    margin: "0 7%",
  },
  community:{
    fontFamily: "Crimson Text",
    color: "#484747",
  },
  valueImgContainer: {
    paddingLeft: '0px',
    paddingRight: "0px",
    marginBottom: "10px",
  },
  ourValue: {
    paddingLeft: '0px',
    paddingRight: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: "10px",
  },
  valueHeader: {
    fontSize: "25px",
    fontWeight: 500,
    color: "#484747",
    marginBottom: "15px",
  },
  valueText:{
    fontSize: '16px',
    fontWeight: 400,
    color: "#484747",
    width: "100%",
  },
  videoFrame:{
    paddingLeft: "0px",
    paddingRight: '0px',
  },
  exprienceContainer:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  exprienceText: {
    fontSize: "25px",
    fontWeight: 500,
    color: "#484747",
    marginBottom: "15px",
  },
  exprienceText1:{
    fontSize: "25px",
    fontWeight: 500,
    color: "#484747",
  }
};

export default aboutUsStyle;
