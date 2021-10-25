import React from "react";
import { connect } from "react-redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Header from "../components/Header/Header";
import Head from "next/head";
import HeaderLinksPTE from "../components/Header/HeaderLinksPTE";
import logo from "../assets/img/New-pte-magic-logo-1.png";
import { makeStyles } from "@material-ui/core/styles";
import PTEFooter from "../components/Footer/PTEFooter";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import faqStyle from "../assets/jss/nextjs-material-kit-pro/pages/faqStyle";
import "assets/jss/nextjs-material-kit-pro/pages/howToUseAnimation.css";
import encrypted from "assets/img/encrypted.png";
import Banner from "components/Parallax/Banner.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(faqStyle);

const FAQs = () => {
  const classes = useStyles();

  const matches = useMediaQuery('(max-width:1279px)');
  const matches2 = useMediaQuery('(min-width:700px)');

  const [value, setValue] = React.useState(0);

  const [openMoreSupport, setOpenMoreSupport] = React.useState(false);
  const [addIconSupport, setAddIconSupport] = React.useState(true);

  const handleClickSupport = () => {
    setOpenMoreSupport((prev) => !prev);
    setAddIconSupport(prev=>!prev);
  };

  const [openMorePayment, setOpenMorePayment] = React.useState(false);
  const [addIconPayment, setAddIconPayment] = React.useState(true);

  const handleClickPayment = () => {
    setOpenMorePayment((prev) => !prev);
    setAddIconPayment(prev=>!prev);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <div>
      <Head>
        <title>FAQs</title>
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

      <Banner
        title={"FAQs"}
        subtitle={
          "Here are everything you need to know so you can use PTE Magic Practice platform like a pro"
        }
        className={classes.banner}
      />
      <div className={classes.bodyContainer}>
        <div className={classes.bodyCard}>
          <GridContainer>
            <GridItem xs={12} md={12} lg={4} className={classes.navigation}>
              {!matches&&<div className={classes.quickNav}>Quick Navigation</div>}
              {matches&&<div className={classes.quickNav1}>Quick Navigation</div>}
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
              >
                <Tab disableRipple label="Custom Support" {...a11yProps(0)} className={classes.tab}/>
                <Tab disableRipple label="Payment and Refund" {...a11yProps(1)} className={classes.tab}/>

              </Tabs>
            </GridItem>
              <GridItem xs={12} md={12} lg={8} style={{overflow: "auto"}}>
              <TabPanel value={value} index={0} className={classes.tabpanel}>
                {matches2&&<div className={classes.customerSupport}>Customer Support</div>}
                {!matches2&&<div className={classes.customerSupport2}>Customer Support</div>}
                <button
                  onClick={handleClickSupport}
                  className={classes.supportDropdown}
                >
                  <div className={classes.whatPayment}>
                    What payment methods are avaiable
                  </div>
                  {addIconSupport&&<AddIcon style={{ height: "30px", width: "30px" }} />}
                  {!addIconSupport&&<RemoveIcon style={{ height: "30px", width: "30px" }} />}
                </button>
                {openMoreSupport && (
                  <div>
                    <div className={classes.dropdownContent}>
                      You can use Visa, Mastercard debit or PayPal
                    </div>
                    <div className={classes.dropdownContent}>
                      If you have difficulties in payment or need some help, you
                      will need to contact us via chat bot or email{" "}
                      <a
                        style={{ color: "#0000ff" }}
                        href="mailto:info@ptemagicpractice.com"
                      >
                        info@ptemagicpractice.com
                      </a>{" "}
                      to inquire about other methods of payment.
                    </div>
                    <div className={classes.dropdownContent}>
                      *Note: Our payment system supports payment from most of
                      countries in the world, such as Vietnam, Australia, India,
                      China, etc.
                    </div>
                  </div>
                )}
                <hr className={classes.underline} />
              </TabPanel>
              <TabPanel value={value} index={1} className={classes.tabpanel}>
                {matches2&&<div className={classes.refund}>Payment & Refund</div>}
                {!matches2&&<div className={classes.refund2}>Payment & Refund</div>}
                <button
                  onClick={handleClickPayment}
                  className={classes.supportDropdown}
                >
                  <div className={classes.whatPayment}>
                    Is Payment On Website safe?
                  </div>
                  {addIconPayment&&<AddIcon style={{ height: "30px", width: "30px" }} />}
                  {!addIconPayment&&<RemoveIcon style={{ height: "30px", width: "30px" }} />}
                </button>
                {openMorePayment && (
                  <div>
                    {/* <div className={classes.dropdownContent}>
                      Is Payment On Website safe?
                    </div> */}
                    <div className={classes.dropdownContent}>
                      Yes. We use the #1 Online Payment Processors that are{" "}
                      <a
                        style={{ color: "#0000ff" }}
                        href="https://stripe.com/"
                      >
                        Stripe
                      </a>{" "}
                      and{" "}
                      <a
                        style={{ color: "#0000ff" }}
                        href="https://www.paypal.com/"
                      >
                        Paypal
                      </a>
                      . We do not save any person payment information including
                      card number and card security code on our system.
                    </div>
                    <GridContainer className={classes.paraShape}>
                      <GridItem
                        xs={12}
                        md={6}
                        className={classes.paraContainer}
                      >
                        <div className={classes.paraTitle}>SSL Protect</div>
                        {matches2&&<img src={encrypted} alt="encrypted"/>}
                        {!matches2&&<img src={encrypted} alt="encrypted" style={{width:"inherit"}}/>}
                        <div className={classes.paraDetail}>
                          All payment transactions are secured and protected
                          following SSL (Secure Socket Layer). Your payment
                          information are securely transmitted to the bank
                          during the processing of payments.
                        </div>
                      </GridItem>
                    </GridContainer>
                    <GridContainer className={classes.paraShape}>
                      <GridItem
                        xs={12}
                        md={6}
                        className={classes.paraContainer1}
                      >
                        <div className={classes.paraTitle}>PCI Compliant</div>
                        {matches2&&<img src={encrypted} alt="encrypted"/>}
                        {!matches2&&<img src={encrypted} alt="encrypted" style={{width:"inherit"}}/>}
                        <div className={classes.paraDetail}>
                          We chose PayPal and Stripe the payment processors
                          because they are
                        </div>
                      </GridItem>
                      <GridItem
                        xs={12}
                        md={6}
                        className={classes.paraContainer1}
                      >
                        <div className={classes.paraTitle}>Encrypted</div>
                        {matches2&&<img src={encrypted} alt="encrypted"/>}
                        {!matches2&&<img src={encrypted} alt="encrypted" style={{width:"inherit"}}/>}
                        <div className={classes.paraDetail}>
                          All credit card numbers are encrypted and safely
                          stored in PayPal and Stripe’s data-center. We do not
                          store any credit card numbers in our system. This
                          ensures both the security of your information.
                        </div>
                      </GridItem>
                    </GridContainer>
                  </div>
                )}
                <hr className={classes.underline} />
              </TabPanel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <PTEFooter />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FAQs);
