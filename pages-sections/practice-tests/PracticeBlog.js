/*eslint-disable*/ import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Link from "next/link";
import Card from "components/Card/Card.js";
import Button from "components/CustomButtons/Button";
import Grid from "@material-ui/core/Grid";
import reading from "assets/img/reading.jpg";
// sections for this page
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import SectionText from "pages-sections/blog-post/SectionText.js";
import SectionBlogInfo from "pages-sections/blog-post/SectionBlogInfo.js";
import SectionComments from "pages-sections/blog-post/SectionComments.js";
import SectionSimilarStories from "pages-sections/blog-post/SectionSimilarStories.js";
import blogPracticeTestsStyle from "assets/jss/nextjs-material-kit-pro/pages/blogPracticeTestsStyle.js";


const useStyles = makeStyles(blogPracticeTestsStyle);

export default function PracticeBlog() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="NextJS Material Kit PRO"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 300,
          color: "info",
        }}
      />
      <Card>
        <Grid container>
          <GridItem className={classes.containterCard}>
            <img src={reading} alt="Avatar" className={classes.image} />
            <div className={classes.overlay}>
              <div>
                <div className={classes.detail}>Why reading?</div>
                <ul className={classes.listItem}>
                  <li>Reading is good for your brain</li>
                  <li>Improves your knowledge in all kinds of fields</li>
                  <li>Challeges and Enhances your imagination</li>
                </ul>
              </div>
            </div>
          </GridItem>
          <GridItem className={classes.body}>
            <LibraryBooksIcon color="primary" fontSize="small"/>
            <div className={classes.gap}>Up to 1000 questions</div>
          </GridItem>
          <GridItem className={classes.body}>
            <LibraryBooksIcon color="primary" fontSize="small"/>
            <div className={classes.gap}>Multiple types of question bank</div>
          </GridItem>
          <GridItem className={classes.body}>
            <LibraryBooksIcon color="primary" fontSize="small"/>
            <div className={classes.gap}>Try, improve your reading skill, and unlock more reading pack</div>
          </GridItem>
          <hr style={{ border: "1px solid #f0f0f0", width: "90%" }} />

          <Button
            // href="#pablo"
            className={classes.button}
            onClick={(e) => e.preventDefault()}
            color="transparent"
          >
            {/* <Link href="/take-test">Take Test</Link>  */}
            Take Test
          </Button>
        </Grid>
      </Card>
    </div>
  );
}
