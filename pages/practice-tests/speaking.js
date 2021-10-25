import React, { useRef, useState } from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Head from "next/head";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
// import { getPostByTag } from "store/blog/actions";
// import { connect } from "react-redux";
import PTEFooter from "components/Footer/PTEFooter";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Header from "components/Header/Header";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import question from "assets/img/short-question.jpg";
import lecture from "assets/img/lecture.jpg";
import speaking from "assets/img/speaking.jpg";
import repeat from "assets/img/repeat.png";
import describe from "assets/img/describe.jpg";
import LeftStructure from "pages-sections/practice-tests/LeftStructure.js";
import RightStructure from "pages-sections/practice-tests/RightStructure.js";
import PurpleBanner from "pages-sections/practice-tests/PurpleBanner.js";
import CardHeader from "components/Card/CardHeader";
import { CardContent } from "@material-ui/core";
import CardFooter from "components/Card/CardFooter";
import { getPost } from "../../store/blog/actions";
import { connect } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";

const styles = (theme) => ({
  ...presentationStyle,
  section: {
    maxWidth: "1240px",
  },
  main: {
    marginTop: 100,
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
    marginTop: 20,
    transitionDuration: ".25s",
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
});

const useStyles = makeStyles(styles);

function SpeakingPage(props) {

  React.useEffect(() => {
    props.getPost({ limit: 3 });
  }, []);

  const { blogDisplay } = props;

  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>PTE Practice Test Speaking</title>
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
      <Banner title="PTE Practice Test Speaking" />

      <div className={classNames(classes.main)}>
        <GridContainer className={classes.container}>
          <GridContainer className={(classes.bigHead, classes.section)}>
            <GridItem xs={12} md={4} className={classes.bigHeadTitle}>
              PTE Speaking Test
            </GridItem>
            <GridItem xs={12} md={4} className={classes.headDetail}>
              There are <b>5 sections</b> on the speaking part of the{" "}
              <b>PTE Speaking Test</b> which is the <b>first part </b> of the
              PTE Academic test. Each includes talking and understanding skill
              in a different way. Let look at each speaking section and what to
              focus on when taking them. <br />
              <br />
            </GridItem>
            <GridItem xs={12} md={4} className={classes.headDetail}>
              <b>PTE Magic</b> is a widely trusted{" "}
              <b>online PTE Practice test </b>platform with the most revived PTE
              practice exam questions, <b>templates</b>, and{" "}
              <b>exam resources</b>. We have demonstrated to be strides in front
              of others in the past with heaps of standard test questions to
              practice your <b>PTE speaking skill</b>.{" "}
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
              {blogDisplay ?
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
                            <a className={classes.hrefLink} href={`/blog/${blog.slug}`}>
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
            :
            <div className={classes.noData}>No Data</div>}
            </>
          )}

          <PurpleBanner quote="“Check Out PTE Speaking Test Exam Structure Below”" />
          <div style={{ textAlign: "center" }}>
            <div>PTE Speaking Test</div>
            <h2>Exam Structure In PTE Academic</h2>
          </div>
          <div className={classes.divider}></div>
          <div className={classes.section}>
            <LeftStructure
              img={speaking}
              title="Read Aloud"
              firstPara={
                <p>
                  For this speaking section, a <b>passage</b> or a short text of{" "}
                  <b>2-3 sentences</b> will be given. You will be given
                  approximately 40-second to read the passage. When the time
                  ends, a beep sound you will listen and start audibly recording
                  your voice for <b>40 seconds</b>.
                </p>
              }
              secondPara={
                <p>
                  If you spoke before the microphone starts, then your voice
                  won’t be <b>recorded</b>. You must finish readying speaking
                  the passage before progress bar ends, otherwise the microphone
                  will stop recording even if you did not complete readying the
                  whole passage.
                </p>
              }
            />
            <RightStructure
              img={repeat}
              title="Repeat Sentence"
              firstPara={
                <p>
                  In this speaking section, there’s <b>a short audio</b> or
                  recording of few seconds to be played. You will have to listen
                  carefully and repeat exactly the recording within{" "}
                  <b>15 seconds</b>. This means you have very limited time to
                  get things right.
                </p>
              }
              secondPara={
                <p>
                  For this section, it’s important to get the <b>main ideas</b>{" "}
                  of the speaking,
                  <b>nouns</b> and <b>grammar</b> used in the recording. It’s
                  useful to note down <b>main keywords</b>.
                </p>
              }
            />

            <LeftStructure
              img={describe}
              title="Describe Image"
              firstPara={
                <p>
                  This section is all about giving correct <b>description</b> of{" "}
                  <b>images</b> that will be shown. Those images here can be
                  picture, a country map, a report chart, or graph.
                </p>
              }
              secondPara={
                <p>
                  You will be given only <b>25 seconds</b> to understand the
                  image. After that, you will have to give your respond within{" "}
                  <b>40 seconds</b>. For this section, one of the most effective
                  ways to understand images is keeping mental notes of them.
                </p>
              }
            />
            <RightStructure
              img={lecture}
              title="Re-Tell Lecture"
              firstPara={
                <p>
                  You will have to <b>retell</b> a listening or a short video.
                  An audio or a video of around <b>90 seconds</b> will be played
                  and you will be given <b>40 seconds</b> to answer it. Before
                  the computer begins recording your speech, you will have{" "}
                  <b>10 seconds</b> for preparation.
                </p>
              }
              secondPara={
                <p>
                  You will be given <b>40 seconds</b> to answers so you should
                  bring your answers to end with major points from the. When the
                  bar of progress comes close to end, you must stop speaking.
                  Meanwhile, you will see the word{" "}
                  <b>
                    <i>‘Recording’</i>
                  </b>{" "}
                  changed to{" "}
                  <b>
                    <i>‘Completed’</i>
                  </b>
                  .
                </p>
              }
            />

            <LeftStructure
              img={question}
              title="Answer Short Question"
              firstPara={
                <p>
                  Speaking short answer question section examines your speaking
                  and listening skills, and you are given <b>10 seconds</b> to
                  response to each asked question.
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
                <h3>For More Information And Help On Your PTE Reading Test.</h3>
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

const mapStateToProps = ({ blog }) => {
  return {
    blogDisplay: blog.blogDisplay,
    loading: blog.loading,
  };
};

const mapDispatchToProps = {
  getPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(SpeakingPage);
