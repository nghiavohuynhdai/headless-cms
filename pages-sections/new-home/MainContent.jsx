import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import Header from "../../components/Header/Header";
import HeaderLinksPTE from "../../components/Header/HeaderLinksPTE";
import Head from "next/head";
import logo from "../../assets/img/New-pte-magic-logo-1.png";

const useStyles = makeStyles({
  ...teamsStyle,
  root: {
    minHeight: "100vh",
    overflowY: "hidden",
    overflowX: "hidden",
  },
  headSection: {
    position: "relative",
    backgroundImage:
      "url(https://react-next-landing.redq.io/_next/static/images/banner-texture-25e9140dbeecfc0ee999031279bb6a2c.png), linear-gradient(35deg, #faf2b5 0%, #fadb06 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    paddingTop: 150,
  },
});

const MainContent = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <section className={classes.headSection}>
        <Head>
          <title>
            Real PTE Practice Test Questions Free and AI - PTE Magic
          </title>
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
        <FirstSection data={props.data[0]}/>
        <SecondSection data={props.data[1]}/>
      </section>
      <div>{props.children}</div>
    </div>
  );
};

export default MainContent;
