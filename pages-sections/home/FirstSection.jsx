import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import bg12 from "assets/img/bg12.jpg";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import headersStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js";
import Parallax from "components/Parallax/Parallax.js";
import Link from "next/link";


const FirstSection = (props) => {
  const styles = theme => ({

    ...headersStyle(theme),
    yellowButton: {
      ...theme.yellowButton(theme)
    }
  })

  const useStyles = makeStyles(styles);

  const classes = useStyles()
  return (
    <>
      <div>
        <div className={classes.pageHeader} >
          <div className="image_mockup">
            <div className="one_img slideInnew">
              <img src={require("assets/img/home/pte-lgo-383-384.png")} alt="" />
            </div>
            <div className="one_img slideInnew">
              <img src={require("assets/img/home/pte-logo-490-486.png")} alt="" />
            </div>

            <div className="one_img slideInnew">
              <img src={require("assets/img/home/pte-lgo-265-265-2.png")} alt="" />
            </div>
            <div className="one_img slideInnew">
              <img src={require("assets/img/home/pte-logo-701-702-1.png")} alt="" />
            </div>
            <div className="one_img slideInnew">
              <img src={require("assets/img/home/pte-logo-459-460.png")} alt="" />
            </div>
            <div className="one_img slideInnew">
              <img src={require("assets/img/home/pte-logo-552-552.png")} alt="" />
            </div>
            <div className="one_img slideInnew">
              <img className="App-logo" src={require("assets/img/home/Copy-of-Untitled-17.png")} alt="" />
            </div>
          </div>
          <div className={classes.container}>
            <GridContainer className="first-section">
              <GridItem xs={12} sm={8} md={8}>
                <h1 className={classes.title}>The only platform you need to pass PTE Academic</h1>
                <h4>
                  Join over <span style={{ fontWeight: 500, fontSize: 24 }}>120,000 students</span> to prepare for your PTE test today without the barriers of cost or location.
                </h4>
                <br />
                <Link href="/platform/auth/login"><Button round color="gold"> JOIN FOR FREE</Button></Link>

              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </>
  )
}

export default FirstSection