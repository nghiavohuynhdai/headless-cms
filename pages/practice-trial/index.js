import React from 'react'
import Header from "../../components/Header/Header";
import logo from "../../assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "../../components/Header/HeaderLinksPTE";
import TestFormat from "../../pages-sections/new-home/TestFormat";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    width: "57%"
  },
  containerPosition: {
    display: "flex",
    justifyContent: "center"
  }
});

export default function PracticeTrial() {
  const classes = useStyles()
  return (
    <>
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
      <div className={classes.containerPosition}>
        <div className={classes.container}>
          <TestFormat/>
        </div>
      </div>
    </>
  )
}