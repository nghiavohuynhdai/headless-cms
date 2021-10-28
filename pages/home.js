import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import HeaderLinksPTE from "../components/Header/HeaderLinksPTE";
import logo from "../assets/img/New-pte-magic-logo-1.png";
import PTEFooter from "../components/Footer/PTEFooter";
import FirstSection from "../pages-sections/new-home/FirstSection";
import MainContent from "../pages-sections/new-home/MainContent";
import SecondSection from "../pages-sections/new-home/SecondSection";
import ThirdSection from "../pages-sections/new-home/ThirdSection";
import FourthSection from "../pages-sections/new-home/FourthSection";
import FifthSection from "../pages-sections/new-home/FifthSection";
import SixthSection from "../pages-sections/new-home/SixthSection";
import SeventhSection from "../pages-sections/new-home/SeventhSection";
import EightSection from "../pages-sections/new-home/EightSection";
import NinethSection from "../pages-sections/new-home/NinethSection";
import TenthSection from "../pages-sections/new-home/TenthSection";

const NewHome = (props) => {
  React.useEffect(() => {
    // window.scrollTo(0, 0);
    // document.body.scrollTop = 0;
    // props.getPost()
  }, []);

  return (
    <div>
      {/* <Head>
        <title>Real PTE Practice Test Questions Free and AI - PTE Magic</title>
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
      /> */}
      <MainContent data={props.data}>
        {/* <FirstSection />
        <SecondSection /> */}
        <ThirdSection data={props.data[2]} />
        <FourthSection data={props.data[3]} />
        <FifthSection data={props.data[4]} />
        <SixthSection data={props.data[5]} />
        <SeventhSection data={props.data[6]} />
        <EightSection data={props.data[7]} />
        <NinethSection data={props.data[8]} />
        <TenthSection data={props.data[9]} />
      </MainContent>
      {/* <FirstSection /> */}
      <PTEFooter />
    </div>
  );
};

export default NewHome;
