/*eslint-disable*/
import React from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import "assets/css/nextjs-material-kit-pro.css";
import PhoneIcon from "components/Icon/PhoneIcon.jsx";
import AddressIcon from "components/Icon/AddressIcon.jsx";
import ClockIcon from "components/Icon/ClockIcon.jsx";
import MailIcon from "components/Icon/MailIcon.jsx";
import PinIcon from "components/Icon/PinIcon.jsx";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import PTEFooter from "components/Footer/PTEFooter";
import Link from "next/link";

const styles = (theme) => ({
  ...contactUsStyle,
  contactContainer: {
    display: "flex",
    justifyCOntent: "space-between",
    marginLeft: "-15px",
  },
  contactInfo: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
  },
  infoTitle: {
    color: "#ffffff",
    paddingLeft: "16px",
  },
  infoSection: {
    padding: "16px",
    display: "flex",
    "& span": {
      color: "#000000",
      fontWeight: 500,
    },
    "& a": {
      "&:hover": {
        color: "#218bff",
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  infoDetail: {
    marginLeft: "15px",
    color: "#218bff",
    fontWeight: 500,
  },
  blackCard: {
    backgroundColor: "#364547",
    [theme.breakpoints.up("sm")]: {
      height: "300px",
      width: "100%",
    },
    // height: "400px"
  },
  contactBtn: {
    backgroundColor: "#000000",
  },
  infoHead: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
  },
  pinIcon: {
    padding: "20px",
    width: "10%",
    height: "10%",
  },
  list: {
    marginTop: "-20px",
  },
  socialButtons: {
    display: "flex",
  },
  bannerHead: {
    "&>div>div>div>h1": {
      fontWeight: 700,
    },
  },
  containerContacts: {
    justifyContent: "center",
    margin: "50px auto",
    height: "380px !important",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "auto !important",
    },
  },
});

const useStyles = makeStyles(styles);

export default function ContactUsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Contact Us</title>
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
      <div className={classes.bigHeader}></div>
      <Banner
        title="Contact Us"
        subtitle="We love to hear from you"
        className={classes.bannerHead}
      />
      <div className={classNames(classes.main)}>
        <div className={`${classes.container} ${classes.containerContacts}`}>
          <h2 className={classes.title} style={{ paddingLeft: 12 }}>
            Send us a message
          </h2>
          <GridContainer className={classes.contactContainer}>
            <GridItem md={12} sm={12} className={classes.contactInfo}>
              <h2
                className={classes.title}
                style={{ paddingLeft: 12, fontSize: 25 }}
              >
                Contact Information
              </h2>
              <div className={classes.infoSection}>
                <span>PTE Magic IT Support:</span>&nbsp;
                <a href="/#" className={classes.infoDetail}>
                  {" "}
                  info@ptemagic.com.au
                </a>
              </div>
              <div className={classes.infoSection}>
                <span>PTE Magic Vietnamese Coaching: </span>
                &nbsp;
                <a href="/#" className={classes.infoDetail}>
                  {" "}
                  www.ptemagic.com.vn
                </a>
                <a href="/#" className={classes.infoDetail}>
                  {" "}
                  ptemagic@gmail.com{" "}
                </a>
              </div>
              <div className={classes.infoSection}>
                <span>PTE Magic IT Support:</span>&nbsp;
                <a href="/#" className={classes.infoDetail}>
                  www.ptemagic.com.au
                </a>
                <a href="/#" className={classes.infoDetail}>
                  {" "}
                  admission@ptemagic.com.au{" "}
                </a>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <PTEFooter />
    </div>
  );
}
