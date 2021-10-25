/*eslint-disable*/
import React, { useRef, useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
import { getPostByTag } from "store/blog/actions";
import { connect } from "react-redux";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Header from "components/Header/Header";
import PTEFooter from "components/Footer/PTEFooter";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import repeat from "assets/img/repeat.png";
import reading1 from "assets/img/reading1.jpeg";
import mulans from "assets/img/mul-ans.jpg"
import reorder from "assets/img/re-order.jpg"
import lecture from "assets/img/lecture.jpg"
import shortquest from "assets/img/short-question.jpg"
import Head from "next/head";
import LeftStructure from "pages-sections/practice-tests/LeftStructure.js";
import RightStructure from "pages-sections/practice-tests/RightStructure.js";
import CardHeader from "../../components/Card/CardHeader";
import { CardContent } from "@material-ui/core";
import CardFooter from "../../components/Card/CardFooter";
import { getPost } from "../../store/blog/actions";
import Skeleton from "@material-ui/lab/Skeleton";
import PurpleBanner from "pages-sections/practice-tests/PurpleBanner.js";

const styles = (theme) => ({
  ...presentationStyle,
  section: {
    maxWidth: "1240px",
  },
  main: {
    marginTop: 100,
  },
  banner: {
    width: "100vw",
    height: "530px",
    backgroundColor: "#16163f",
    opacity: "0.8",
    display: "flex",
    justifyContent: "center",
    margin: "100px 0",
    "& p": {
      marginTop: "auto",
      marginBottom: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "600px",
      lineHeight: "50px",
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "300",
      color: "#fff",
      fontFamily: "Merriweather",
    },
  },
  bannerBottom: {
    width: "100vw",
    height: "530px",
    backgroundColor: "#16163f",
    opacity: "0.8",
    display: "flex",
    justifyContent: "center",
    margin: "100px 0 0 0",
    "& p": {
      marginTop: "auto",
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: "600px",
      lineHeight: "50px",
      textAlign: "center",
      fontSize: "50px",
      fontWeight: "300",
      color: "#fff",
      fontFamily: "Merriweather",
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  speaking: {
    textAlign: "left !important",
    fontSize: "18px",
    paddingLeft: "0 !important",
    fontWeight: "200",
    fontFamily: "Montserrat",
    color: "#4a4a4a",
    lineHeight: "30px",
  },
  contact: {
    textAlign: "center",
  },
  contactBtn: {
    backgroundColor: "#d3b574",
    color: "#16163f",
    textAlign: "center",
    borderRadius: "0 !important",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#16163f",
    },
    "& i": {
      marginLeft: "15px",
    },
  },
  bigHead: {
    margin: "0 80px",
  },
  subTitle: {
    color: "#4a4a4a",
    fontFamily: '"Montserrat",Sans-serif',
    fontSize: "18px",
    fontWeight: 300,
    textTransform: "capitalize",
    padding: "0 0 0 30px",
  },
  bigHeadTitle: {
    fontSize: "50px",
    padding: "0 0 0 30px",
    border: "solid #d3b574",
    borderWidth: "0 0 0 4px",
    lineHeight: "1.4em",
    color: "#16163f",
    fontWeight: "500",
    fontFamily: `"Merriweather", sans-serif`,
  },
  headDetail: {
    fontFamily: '"Times New Roman", serif',
    fontSize: "16px",
    textAlign: "justify",
    color: "#4a4a4a",
    lineHeight: "30px",
    "& span": {
      fontFamily: '"Roboto", sans-serif',
      fontWeight: "200",
      fontSize: "16px",
      color: "#000",
    },
  },
  important: {
    textAlign: "center",
    fontFamily: "Montserrat",
  },
  cardContainer: {
    backgroundColor: "#f8f8f8",
    padding: "100px 25px 0",
  },
  oneCard: {
    transitionDuration: ".25s",
    display: "block",
    height: "450px",
    "&:hover": {
      boxShadow: "0 0 30px 0 rgb(0 0 0 / 15%)",
    },
  },
  cardImage: {
    borderRadius: "10px",
    width: "100%",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardFooter: {
    borderTop: "1px solid rgba(61,68,89,.1)",
    justifyContent: "center",
    fontFamily: "Montserrat",
    color: "rgba(61,68,89,.5)",
    fontSize: "14px",
    fontWeight: 400,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  hrefLink: {
    color: "#4632da",
    fontFamily: '"Varela Round",Sans-serif',
    fontSize: "20px",
    fontWeight: 400,
    textTransform: "capitalize",
    lineHeight: "1.5em",
    justifyContent: "center",
  },
  userIcon: {
    borderRadius: "50%",
    width: "60px",
    marginTop: "-50px",
    marginBottom: "20px",
  },
  divider: {
    width: "100vw",
    marginTop: "5%",
  },
  banner: {
    "&>div>div>div>h1": {
      fontWeight: 700,
    },
  },
});

const useStyles = makeStyles(styles);

function ReadingPage(props) {
  React.useEffect(() => {
    props.getPost({ limit: 3 });
  }, []);

  let tags = props.tag;

  const { blogDisplay } = props;

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>PTE Practice Test Reading</title>
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
      <Banner title="PTE Practice Test Reading" className={classes.banner} />

      <div className={classNames(classes.main)}>
        <GridContainer className={classes.container}>
          <GridContainer className={(classes.bigHead, classes.section)}>
            <GridItem xs={12} md={4}>
              <div className={classes.subTitle}>PTE Practice Test Reading</div>
              <div className={classes.bigHeadTitle}>PTE Reading Test</div>
            </GridItem>
            <GridItem xs={12} md={4} className={classes.headDetail}>
              <b>PTE Reading</b> is the second section of the test and will take
              approximately <b>30-40 minutes</b>. It includes <b>5 tasks</b> in
              total. The reading materials for this section are all authentic
              texts about a variety of <b>academic</b> subjects, including{" "}
              <b>humanities</b>, natural sciences and social <b>sciences</b>.
              <br />
              <br />
            </GridItem>
            <GridItem xs={12} md={4} className={classes.headDetail}>
              Don’t worry, you won’t need to be particularly knowledgeable about
              these subjects, as all of the information needed to answer the
              questions can be found in the texts.
            </GridItem>
          </GridContainer>

          <div className={classes.divider}></div>

          {props.loading ? (
            <GridContainer>
              {[0, 1, 2].map(() => {
                return (
                  <GridItem xs={12} md={4} sm={6}>
                    <Skeleton variant="rect" width={363} height={186} />
                    <Skeleton />
                    <Skeleton width="60%" />
                  </GridItem>
                );
              })}
            </GridContainer>
          ) : (
            <>
              {blogDisplay ? (
                blogDisplay.length > 0 && (
                  <GridContainer
                    className={(classes.cardContainer, classes.section)}
                  >
                    {blogDisplay.map((blog) => {
                      const date = new Date(blog.createdAt)
                      return (
                        <GridItem md={4} sm={6} xs={12}>
                          <Card className={classes.oneCard}>
                            <CardHeader cardHeaderReading>
                              {blogDisplay &&
                                blogDisplay.length > 0 &&
                                blogDisplay[0].image_url && (
                                  <img
                                    className={classes.cardImage}
                                    src={blog.image_url[0].url}
                                  />
                                )}
                            </CardHeader>
                            <CardContent className={classes.cardContent}>
                              <a
                                className={classes.hrefLink}
                                href={`/blog/${blog.slug}`}
                              >
                                {blog.title}
                              </a>
                            </CardContent>
                            <CardFooter className={classes.cardFooter}>
                            <div>PTE Magic {date.toLocaleString("en-us", { month: "short" })}{" "} {date.getUTCDate()}, {date.getFullYear()}</div>
                            </CardFooter>
                          </Card>
                        </GridItem>
                      );
                    })}
                  </GridContainer>
                )
              ) : (
                <div className={classes.noData}>No Data</div>
              )}
            </>
          )}

          <PurpleBanner quote="“Check Out PTE Speaking Test Exam Structure Below”" />

          <div style={{ textAlign: "center" }}>
            <div>PTE Reading Test</div>
            <h2>Exam Structure In PTE Academic</h2>
          </div>

          <div className={classes.divider}></div>

          <div className={classes.section}>
            <LeftStructure
              img={reading1}
              title="Multiple Choice Questions With A Single Answer"
              firstPara={
                <p>
                  After reading <b>a passage</b>, that will be roughly{" "}
                  <b>110 words</b>, select one answer from multiple choices. To
                  ensure you have time to complete the entire section, you
                  should try to not spend more than 2 minutes on each
                  multiple-choice question.
                </p>
              }
            />
            <RightStructure
              img={mulans}
              title="Multiple Choice Questions, Multiple Answers"
              firstPara={
                <p>
                  In these questions, more than one response is correct so you
                  must mark all the answers that are correct. The prompt length
                  is around <b>300 words and points</b> will be deducted for any
                  incorrect answers, so it is essential you do not select any
                  answers you do not feel confident about. It is advisable that
                  you read the question first, before the text, to ensure you
                  know what specific details you are looking for to answer the
                  question.
                </p>
              }
            />
            <LeftStructure
              img={reorder}
              title="Re-Order Paragraphs"
              firstPara={
                <p>
                  On the left side of your screen, sentences and paragraphs will
                  be placed in an illogical order. To complete this task you
                  must arrange the sections on the right side of the screen in
                  the correct order. The section should contain text up to 150
                  words.
                </p>
              }
            />
            <RightStructure
              img={lecture}
              title="Re-Tell Lecture"
              firstPara={
                <p>
                  You will have to retell a listening or a short video. An audio
                  or a video of around 90 seconds will be played and you will be
                  given 40seconds to answer it. Before the computer begins
                  recording your speech, you will have 10 seconds for
                  preparation.
                </p>
              }
              secondPara={
                <p>
                  You will be given 40 seconds to answers so you should bring
                  your answers to end with major points from the. When the bar
                  of progress comes close to end, you must stop speaking.
                  Meanwhile, you will see the word ‘Recording’ changed to
                  ‘Completed’.
                </p>
              }
            />
            <LeftStructure
              img={shortquest}
              title="Answer Short Question"
              firstPara={
                <p>
                  Speaking short answer question section examines your speaking
                  and listening skills, and you are given 10 seconds to response
                  to each asked question.
                </p>
              }
              secondPara={
                <p>
                  Furthermore, this task is easier as compared to other tasks
                  because you just give answers in only one or two words rather
                  long summaries and answers. Therefore, you can obtain good
                  scores in this task.
                </p>
              }
            />
          </div>
          <div className={classes.bannerBottom}>
            <GridContainer>
              <p>
                <h1>Contact Us Today</h1>
                <h3>
                  For More Information And Help On Your PTE Reading Test. ​
                </h3>
              </p>
              <br />
              <GridItem xs={12} md={12} lg={12} className={classes.contact}>
                <Button className={classes.contactBtn}>
                  Contact Us{" "}
                  <i aria-hidden="true" class="fas fa-long-arrow-alt-right"></i>{" "}
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </GridContainer>
      </div>
      <PTEFooter />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tag: state.blog.blogByTag,
    pagination: state.blog.tagPagination,
    blogDisplay: state.blog.blogDisplay,
    loading: state.blog.loading,
  };
};

const mapDispatchToProps = { getPostByTag, getPost };

export default connect(mapStateToProps, mapDispatchToProps)(ReadingPage);
