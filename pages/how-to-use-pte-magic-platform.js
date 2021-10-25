import React from "react";
import { connect } from "react-redux";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from "../components/Header/Header";
import Head from "next/head";
import HeaderLinksPTE from "../components/Header/HeaderLinksPTE";
import logo from "../assets/img/New-pte-magic-logo-1.png";
import { makeStyles } from "@material-ui/core/styles";
import PTEFooter from "../components/Footer/PTEFooter";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import howToUseStyle from "../assets/jss/nextjs-material-kit-pro/pages/howToUseStyle";
import "assets/jss/nextjs-material-kit-pro/pages/howToUseAnimation.css";
import ScrollAnimation from "react-animate-on-scroll";
import loginImg from "assets/img/login-img.png";
import Banner from "components/Parallax/Banner.js";
import henryAccount from "assets/img/henry-account.png";
import signIn from "assets/img/sign-in.png";
import explore from "assets/img/explore.png";
import dotItems from "assets/img/dot_items.png";
import one from "assets/img/1.png";
import two from "assets/img/2.png";
import three from "assets/img/3.png";
import four from "assets/img/4.png";

const useStyles = makeStyles(howToUseStyle);

const HowToUsePteMagicPlatform = () => {
  const classes = useStyles();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  const matches = useMediaQuery('(min-width:1280px)');
  return (
    <div>
      <Head>
        <title>How to use PTE Magic Platform</title>
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

      <Banner title={"How To Use PTE Magic Platform"} className={classes.banner}/>
        
      {matches && <div style={{display: "flex", justifyContent: "center"}}>
      <div className={classes.bodyContainer}>
        <GridContainer>
          <GridItem className={classes.header}>
            <ScrollAnimation animateIn="fadeIn">
              <div>4 Basic Steps to Practice on PTE Magic Platform</div>
            </ScrollAnimation>
          </GridItem>
        </GridContainer>

        <GridContainer style={{ position: "relative" }}>
          <div className={classes.dots}>
            <span className={classes.dot1}></span>
          </div>
          <img
            src={dotItems}
            alt="Dots"
            style={{
              width: "50%",
              height: "102%",
              position: "absolute",
              zIndex: 1,
              top: "30px",
            }}
          />
          <div style={{ postion: "absolute", zIndex: 2, width: "100%" }}>
            <GridContainer className={classes.blog1}>
              <GridItem lg={6} className="signUpFreeContainer fadeInLeft">
                <img
                  src={one}
                  alt="three"
                  style={{ width: "41px", height: "59px" }}
                />
                <div className={classes.signUpFree}>Sign Up a Free Account</div>
                <div className={classes.signUpFreeContent}>
                  To Create a Magic PTE Practice Acoount
                </div>
                <div className={classes.signUpFreeContent}>
                  1 Open: <b className={classes.bold}>Create a free account</b>
                </div>
                <div className={classes.signUpFreeContent}>
                  2 The signup form will appear. Enter the required information{" "}
                </div>
              </GridItem>
              <GridItem lg={6} className="imgRight fadeInRight">
                <img src={loginImg} alt="LoginPicture" />
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.blog2}>
              <GridItem lg={6} className="img fadeInRight">
                <img src={henryAccount} alt="Henry" />
              </GridItem>
              <GridItem lg={6} className="signUpFreeContainer fadeInLeftDelay">
                <img
                  src={two}
                  alt="three"
                  style={{ width: "41px", height: "59px" }}
                />
                <div className={classes.signUpFree}>Activate Your Account</div>
                <div className={classes.signUpFreeContent}>
                  After completing the Sign Up form above - Step 1, you will
                  receive an email to activate your account.
                </div>
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.blog3}>
              <GridItem lg={6} className="signUpFreeContainer fadeInLeft">
                <img
                  src={three}
                  alt="three"
                  style={{ width: "41px", height: "59px" }}
                />
                <div className={classes.signUpFree}>Sign In</div>
                <div className={classes.signUpFreeContent}>
                  1 Open: <b className={classes.bold}>Login PTE Magic</b>
                </div>
                <div className={classes.signUpFreeContent}>
                  2 Click on the words “Sign In” at the top right of the page.
                  Using Your Email or Password to login
                </div>
              </GridItem>
              <GridItem lg={6} className="imgRight fadeInRight">
                <img src={signIn} alt="Sign In" />
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.blog4}>
              <GridItem lg={6} className="img fadeInRight">
                <img src={explore} alt="Explore" />
              </GridItem>
              <GridItem  lg={6} className="signUpFreeContainer fadeInLeftDelay">
                <img
                  src={four}
                  alt="four"
                  style={{ width: "41px", height: "59px" }}
                />
                <div className={classes.signUpFree}>Explore Magic Platform</div>
                <div className={classes.signUpFreeContent}>
                  Few things before you start your journey.
                </div>
                <div className={classes.signUpFreeContent}>
                  1 Make sure you are using:{" "}
                  <b className={classes.bold}>Google Chrome</b> for the best
                  experience.
                </div>
                <div className={classes.signUpFreeContent}>
                  2 If you have any technical issues, please contact us via
                  Chatbot on the bottom right corner.
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
        <iframe
          src="https://www.youtube.com/embed/Lou2vDZhdgM?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0"
          className={classes.video}
        />
      </div>
      </div>}

      {!matches && <div style={{display: "flex", justifyContent: "center"}}>
      <div className={classes.bodyContainer}>
        <GridContainer>
          <GridItem className={classes.header}>
            <ScrollAnimation animateIn="fadeIn">
              <div>4 Basic Steps to Practice on PTE Magic Platform</div>
            </ScrollAnimation>
          </GridItem>
        </GridContainer>

        <GridContainer>
          <div style={{ width: "100%" }}>
            <GridContainer className={classes.blog1}>
              <GridItem md={12} className="signUpFreeContainerCenter fadeInLeft">
                <img
                  src={one}
                  alt="three"
                  style={{ width: "41px", height: "59px" }}
                />
                <div className={classes.signUpFree}>Sign Up a Free Account</div>
                <div className={classes.signUpFreeContent}>
                  To Create a Magic PTE Practice Acoount
                </div>
                <div className={classes.signUpFreeContent}>
                  1 Open: <b className={classes.bold}>Create a free account</b>
                </div>
                <div className={classes.signUpFreeContent}>
                  2 The signup form will appear. Enter the required information{" "}
                </div>
              </GridItem>
              <GridItem md={12} className="imgCenter fadeInRight">
                <img src={loginImg} alt="LoginPicture" style={{width: 'inherit'}}/>
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.blog2}>
              <GridItem md={12}className="signUpFreeContainerCenter fadeInLeft">
                <img
                  src={two}
                  alt="three"
                  style={{ width: "41px", height: "59px" }}
                />
                <div className={classes.signUpFree2}>Activate Your Account</div>
                <div className={classes.signUpFreeContent2}>
                  After completing the Sign Up form above - Step 1, you will
                  receive an email to activate your account.
                </div>
              </GridItem>
              <GridItem md={12}className="imgCenter fadeInRight">
                <img src={henryAccount} alt="Henry"  style={{width: 'inherit'}} />
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.blog3}>
              <GridItem md={12} className="signUpFreeContainerCenter fadeInLeft">
                <img
                  src={three}
                  alt="three"
                  style={{ width: "41px", height: "59px" }}
                />
                <div className={classes.signUpFree}>Sign In</div>
                <div className={classes.signUpFreeContent}>
                  1 Open: <b className={classes.bold}>Login PTE Magic</b>
                </div>
                <div className={classes.signUpFreeContent}>
                  2 Click on the words “Sign In” at the top right of the page.
                  Using Your Email or Password to login
                </div>
              </GridItem>
              <GridItem md={12} className="imgCenter fadeInRight">
                <img src={signIn} alt="Sign In"  style={{width: 'inherit'}}/>
              </GridItem>
            </GridContainer>

            <GridContainer className={classes.blog4}>
              <GridItem md={12} className="signUpFreeContainerCenter fadeInLeft">
                <img
                  src={four}
                  alt="four"
                  style={{ width: "41px", height: "59px" }}
                />
                <div className={classes.signUpFree2}>Explore Magic Platform</div>
                <div className={classes.signUpFreeContent}>
                  Few things before you start your journey.
                </div>
                <div className={classes.signUpFreeContent}>
                  1 Make sure you are using:{" "}
                  <b className={classes.bold}>Google Chrome</b> for the best
                  experience.
                </div>
                <div className={classes.signUpFreeContent}>
                  2 If you have any technical issues, please contact us via
                  Chatbot on the bottom right corner.
                </div>
              </GridItem>
              <GridItem md={12} className="imgCenter fadeInRight">
                <img src={explore} alt="Explore"  style={{width: 'inherit'}}/>
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>

        <iframe
          src="https://www.youtube.com/embed/Lou2vDZhdgM?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0"
          className={classes.video}
        />
      </div>
      </div>}
      <PTEFooter />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state);
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HowToUsePteMagicPlatform);
