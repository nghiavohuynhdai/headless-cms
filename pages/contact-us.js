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
  },
  infoTitle: {
    color: "#ffffff",
    paddingLeft: "16px",
  },
  infoSection: {
    padding: "16px",
    display: "flex",
  },
  infoDetail: {
    marginLeft: "15px",
    color: "#eeee22",
  },
  blackCard: {
    backgroundColor: "#364547",
    [theme.breakpoints.up("sm")]: {
      height: "100%",
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      height: "80%",
    },
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
        <div className={classes.contactContent}>
          <div className={classes.container}>
            <h2 className={classes.title}>Send us a message</h2>
            <GridContainer className={classes.contactContainer}>
              <GridItem md={6} sm={12}>
                <p>
                  You can contact us with anything related to our Products. We
                  {"'"}ll get in touch with you as soon as possible.
                  <br />
                  <br />
                </p>
                <form>
                  <CustomInput
                    labelText="Your Name"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Email address"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Phone"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                  />
                  <CustomInput
                    labelText="Your message"
                    id="float"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 6,
                    }}
                  />
                  <div className={classes.textCenter}>
                    <Button
                      className={classes.contactBtn}
                      color="#000000"
                      round
                    >
                      Contact us
                    </Button>
                  </div>
                </form>
              </GridItem>
              <GridItem md={6} sm={12} className={classes.contactInfo}>
                <div className={classes.blackCard}>
                  <div className={classes.infoHead}>
                    <h2 className={`${classes.title} ${classes.infoTitle}`}>
                      {" "}
                      Info{" "}
                    </h2>
                    <PinIcon className={classes.pinIcon} />
                  </div>
                  <div className={classes.infoSection}>
                    <MailIcon />
                    <p className={classes.infoDetail}> email@mail.com</p>
                  </div>
                  <div className={classes.infoSection}>
                    <PhoneIcon />
                    <p className={classes.infoDetail}> +1 234-567-890</p>
                  </div>
                  <div className={classes.infoSection}>
                    <AddressIcon />
                    <p className={classes.infoDetail}>
                      {" "}
                      Bld Mihail Kogalniceanu, nr. 8, 7652 Bucharest, Romania
                    </p>
                  </div>
                  <div className={classes.infoSection}>
                    <ClockIcon />
                    <p className={classes.infoDetail}> 9:00 am - 6:00 pm</p>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <PTEFooter />
    </div>
  );
}
