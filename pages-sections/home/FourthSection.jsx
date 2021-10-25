import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import person1 from "assets/img/person1.png"
import person2 from "assets/img/person2.jpg"
import person3 from "assets/img/person3.jpg"
import person4 from "assets/img/person4.png"
import person5 from "assets/img/person5.jpg"
import person6 from "assets/img/person6.jpg"
import person7 from "assets/img/person7.jpg"
import person8 from "assets/img/person8.jpg"
import TeamCard from "components/Card/TeamCard";
import GridContainer from "components/Grid/GridContainer";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import headersStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js";
import GridItem from "components/Grid/GridItem";


const FourthSection = (props) => {
  const styles = theme => ({
    ...teamsStyle,
    wrapper: {
      display: "flex",
      margin: "auto",
      width: "100%",
      maxWidth: 720,
      [theme.breakpoints.up(992)]: {
        maxWidth: 960,
      },
      [theme.breakpoints.up(1200)]: {
        maxWidth: 1140,
      },
    },
  })

  const useStyles = makeStyles(styles);

  const classes = useStyles()

  const content = [
    {
      name: "Moni Vuong",
      img: person1,
      facebook: "https://www.facebook.com/moni.vuong",
      linkedIn: "https://www.linkedin.com/in/monica-vuong-63940616a/"
    },
    { name: "Hoang Anh Truong", img: person2, facebook: "https://www.facebook.com/hoanganh.truong306" },
    { name: "Peter Pham", img: person3, facebook: "https://www.facebook.com/peter.pham.28123" },
    { name: "Narendra", img: person4, facebook: "https://www.facebook.com/narendra.ptemagic" },
    { name: "Yen Banh", img: person5, facebook: "https://www.facebook.com/yen.banh.9" },
    { name: "Thang Nguyen", img: person6, facebook: "https://www.facebook.com/thang.gia" },
    { name: "Nathan Truong", img: person7, facebook: "https://www.facebook.com/ttlong1" },
    { name: "Kay Chen", img: person8, facebook: "https://www.facebook.com/kay.ptemagic.9" },
  ]
  return (
    <div className={classes.wrapper} >
      <GridContainer>
        <GridItem
          xs={12}
          className={
            classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
          }
        >
          <h2 className={classes.title}>PTE Magic Team</h2>
        </GridItem>
        {content.map(c => (
          <TeamCard {...c} />
        )
        )}
      </GridContainer>
    </div>

  )
}


export default FourthSection