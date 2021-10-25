import React from "react";
import mistake from "../assets/img/mistake-to-avoid.png";
import Header from "components/Header/Header.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import PTEFooter from "../components/Footer/PTEFooter";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Banner from "components/Parallax/Banner.js";
import Head from "next/head";
import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import person1 from "assets/img/person1.png";
import person2 from "assets/img/person2.jpg";
import person3 from "assets/img/person3.jpg";
import person4 from "assets/img/person4.png";
import person5 from "assets/img/person5.jpg";
import person6 from "assets/img/person6.jpg";
import person7 from "assets/img/person7.jpg";
import person8 from "assets/img/person8.jpg";
import { makeStyles } from "@material-ui/core/styles";
import { mrAuto, mlAuto } from "assets/jss/nextjs-material-kit-pro.js";

const styles = (theme) => ({
  ...contactUsStyle,
  mrAuto,
  mlAuto,
  ...teamsStyle,
  wrapper: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    width: "100%",
    maxWidth: "1024px",
    [theme.breakpoints.up(992)]: {
      maxWidth: 1024,
    },
    [theme.breakpoints.up(1200)]: {
      maxWidth: 1024,
    },
  },
  imgCenter: {
    marginTop: "70px",
    zIndex: "-1",
    marginLeft: "0px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "200px",
      marginLeft: "0px",
    },
    "& img": {
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        height: "200px",
      },
    },
  },
  textEditor: {
    "& p": {
      color: "#677294",
      fontWeight: "400",
      fontSize: "1rem",
      margin: "0 0px 0 0px ",
      [theme.breakpoints.down("sm")]: {
        margin: "0px 0px",
      },
    },
    "& h2": {
      color: "#677294",
      fontWeight: "500",
      fontSize: "2rem",
      margin: "0 0 0 0px",

      [theme.breakpoints.down("sm")]: {
        margin: "0px 0px ",
      },
    },
  },
  buttonWraper: {
    justifyContent: "center",
  },
  buttonDiscountWrap: {
    justifyContent: "center",
    width: "368px",
    height: "77px",
    margin: "10px 0 10px 0",
    backgroundColor: "#ff0404",
    borderRadius: "13px",
    boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 50%)",
    "& a": {
      boxShadow: "none",
      textDecoration: "none",
    },
    "&:hover": {
      backgroundColor: "#dc3545",
    },
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: "32px",
  },
  buttonInner: {
    textAlign: "center",
    lineHeight: "2.3",

    "& i": {
      color: "#FFF",
      fontSize: "32px",
    },
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
    width: "inherit",
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
  mainWrapper: {
    maxWidth: "1024px",
  },
  imgHolder: {
    display: "flex",
    justifyContent: "center",
  },
});

const useStyles = makeStyles(styles);
function MistakesToAvoid(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);
  const classes = useStyles();
  const { name, img, facebook, linkedIn } = props;

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
  return (
    <div>
      <Head>
        <title>5 mistakes to avoid in PTE Speaking</title>
      </Head>
      <Header
        brand={<img src={logo} alt={"logo"} />}
        color="transparent"
        links={<HeaderLinksPTE />}
        fixed
        changeColorOnScroll={{
          height: 0,
          color: "white",
        }}
      />
      <Banner title="5 mistakes to avoid in PTE Speaking" subtitle="" />
      <div className={classes.container} style={{paddingBottom: "30px"}}>
        <GridContainer md={12} sm={12} xs={12}>
          <GridItem className={classes.imgCenter} md={12} sm={12}>
            <img style={{ maxWidth: "100%" }} src={mistake} alt={"mistake"} />
          </GridItem>

          <GridItem className={classes.textEditor} md={12} sm={12}>
            <div>
              <div>
                <p>
                  For many students, the{" "}
                  <a href="https://ptemagicpractice.com/pte-practice-test/speaking/">
                    PTE Speaking
                  </a>{" "}
                  session is the most challenging of all sections. To help your
                  preparation, we have highlighted 5 common mistakes that
                  students make in their Speaking test that prevents them from
                  getting the desired scores:
                </p>
                <h2>1. Speaking too fast</h2>
                <p>
                  There have been a lot of rumours going around about speaking
                  fast with minimum pauses to get 90. This might help boost
                  fluency, but doing it incorrectly can actually backfire. Some
                  students speak with a high speed to the point that it is hard
                  to understand their speech, thus reducing their pronunciation
                  score. Fluency is not only about speaking rate so exercise
                  your flow of speech.
                </p>
                <h2>2. Too many fillers</h2>
                <p>
                  This is the problem that students have poor pronunciation
                  encounter, especially when reading difficult words. This can
                  also happen in Describe image and Retell lecture. Remember,
                  fluency should be your top priority!
                </p>
                <h2>3. Not checking microphone properly</h2>
                <p>
                  All test takers are given a chance to check their headset
                  prior to commencing the speaking part, however even when the
                  students are unable to hear their voice clearly, they still
                  move on with the test instead of raising issues with the test
                  invigilator. Do not make this mistake and report any problem
                  you have during and after the test again.
                </p>
                <h2>4. Short answers</h2>
                <p>
                  Content is one of the vital aspects in PTE and it is
                  especially important in Describe image and Retell lecture. You
                  are given 40 seconds for the recording, nevertheless, some
                  students only use half of the time to record their answers
                  which mean they do not cover all the points. Make sure to
                  utilise the time wisely to not lose marks on your content.
                </p>
                <h2>5. Wrong pitch</h2>
                <p>
                  Yes, pitch will have a substantial effect on your speaking
                  score. Males candidates should not speak with a pitch that is
                  too low and females should avoid excessively high pitch. To
                  find out the proper pitch for your voice, contact our
                  trainers.
                </p>
                <p>
                  With the right guidance and strategies, everyone can achieve
                  their target score.
                </p>
                <p>
                  We are offering $AUD
                  <b style={{ fontSize: "25px", color: "red" }}>100</b> discount
                  voucher on our Personal Package for international students
                  which include live classes, practice feedback, recent exam
                  questions, mock tests and personal one on one review sessions.
                </p>
                <p>Claim your discount now.</p>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>

      {/* <div className={classes.wrapper}>
        <GridContainer
          style={{ maxWidth: "1024px" }}
          className={classes.mainWrapper}
        >
          <GridItem
            xs={12}
            className={
              classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
            }
          >
            <h2 className={classes.title}>PTE Magic Team</h2>
          </GridItem>
          {reviewContent.map((content) => {
            return (
              <GridItem xs={12} sm={6} lg={3} className={classes.imgHolder}>
                <div className={classes.card}>
                  <div className={classes.cardImage}>
                    <img
                      src={content.img}
                      alt=""
                      style={{ height: "inherit" }}
                    />
                  </div>
                  <div className={classes.details}>
                    <h3>{content.user}</h3>
                    <GridContainer className={classes.containerflex}>
                      <GridItem className={classes.socialIconsItems}>
                        <a href={content.facebook}>
                          <i className="fab fa-facebook"></i>
                        </a>
                      </GridItem>
                      <GridItem className={classes.socialIconsItems}>
                        <a href="#">
                          <i className="fab fa-google"></i>
                        </a>
                      </GridItem>
                      <GridItem className={classes.socialIconsItems}>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </GridItem>
                      <GridItem className={classes.socialIconsItems}>
                        <a href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </GridItem>
                    </GridContainer>
                  </div>
                </div>
              </GridItem>
            );
          })}
        </GridContainer>
      </div> */}

      <PTEFooter />
    </div>
  );
}

export default MistakesToAvoid;
