/*eslint-disable*/
import React, { useRef, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Header from "components/Header/Header";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import PTEFooter from "components/Footer/PTEFooter";
import Head from "next/head";
import blogPost from "assets/img/blog-test-pte-magic.png";
import magicTips from "assets/img/magic-PTE-tips.jpg";
import pte90 from "assets/img/pte90.jpg";
import pteSpeaking90 from "assets/img/pteSpeaking90.jpg";
import pteQuestions from "assets/img/pte-questions.jpg";
import pteBooks from "assets/img/pteBooks.jpg";
import pteReading from "assets/img/pteReading.jpg";
import { getPost } from "../../store/blog/actions";
import { connect } from "react-redux";
import Skeleton from "@material-ui/lab/Skeleton";

// sections for this page

import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";

const styles = (theme) => ({
  ...presentationStyle,
  section: {
    maxWidth: "1240px",
  },
  main: {
    marginTop: 100,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 100,
  },
  tip: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "400px",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "350px",
      margin: "0 50px",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "250px",
      margin: "0 50px",
    },
    fontFamily: "Montserrat",
  },
  card: {
    border: "1px solid #bab8b8",
    fontSize: "18px",
    fontFamily: "Poppins",
    maxWidth: "260px",
    textAlign: "left",
    borderRadius: "10px",
    marginRight: "20px",
    marginTop: "20px",
    "& p": {
      padding: 10,
      color: "#677294",
    },
    "& h5": {
      fontFamily: '"Poppins" serif',
      fontWeight: "500",
      padding: 10,
      color: "#303133",
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  contact: {
    textAlign: "center",
  },
  important: {
    textAlign: "center",
    fontFamily: "Montserrat",
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
  searchForm: {
    position: "relative",
    display: "flex",
    alignItems: "stretch",
    width: "100%",
    borderRadius: "10px",
    "& button": {
      position: "absolute",
      background: "0 0",
      padding: "0",
      border: "0",
      right: "30px",
      top: "51%",
      transform: "translateY(-50%)",
      fontSize: "16px",
      color: "#282835",
      zIndex: "0",
    },
    "&:hover": {
      border: "1px solid #9fd6f1",
      transition: "all .3s",
    },
  },
  formControl: {
    height: "60px",
    width: "100%",
    padding: " 0 30px",
    background: "#f3f4f9",
    borderRadius: "10px",
    fontSize: "15px",
    color: "#677294",
    boxShadow: "none",
    position: "relative",
    zIndex: " 0",
    borderColor: "transparent",
    transition: "all 0.5s",
    "&:hover": {
      backgroundColor: "#fff",
      transition: "all 0.8s",
    },
  },
  widgetTitle: {
    marginBottom: "35px",
    "& h3": {
      fontSize: "20px",
      fontWeight: "600",
      color: "#282835",
      marginBottom: "30px",
      paddingBottom: "30px",
      borderBottom: "1px solid black",
    },
  },
  mediaImage: {
    paddingLeft: "0px",
    width: "100%",
    height: 70,
    borderRadius: "5px",
    margin: "20px 0px 0px 0",
  },
  mediaBody: {
    margin: "20px 0px 0 0",
    paddingLeft: 0,
    "& h4": {
      marginTop: 0,
      fontSize: 15,
      fontWeight: "500",
      color: "#000",
      "&:hover": {
        color: "#9c27b0",
      },
    },
  },
  categories: {
    fontWeight: "200 !important",
  },
  btnLink: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "-15px",
    marginRight: "5px",
    lineHeight: "1",
  },

  blogListItem: {
    marginTop: "40px",
    position: "relative",
  },

  postDate: {
    position: "absolute",
    width: "83px",
    height: "71px",
    borderRadius: "4px",
    backgroundColor: "#fbfbfd",
    left: "45px",
    top: "65px",
    borderRadius: "4px",
    textAlign: "center",
    color: "#5e2ced",
    zIndex: "1",
    "& h2": {
      fontSize: "35px",
      fontWeight: "600",
      marginTop: "4.5px",
      lineHeight: "1em",
    },
    "& span": {
      display: "block",
      fontSize: "15px",
      fontWeight: "400",
      marginTop: "-5px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "20px",
    },
    [theme.breakpoints.up("xl")]: {
      left: "20px",
    },
  },
  postDate2: {
    width: "83px",
    height: "71px",
    borderRadius: "4px",
    backgroundColor: "#fbfbfd",
    borderRadius: "4px",
    textAlign: "center",
    color: "#5e2ced",
    zIndex: "1",
    "& h2": {
      fontSize: "35px",
      fontWeight: "600",
      marginTop: "4.5px",
      lineHeight: "1em",
    },
    "& span": {
      display: "block",
      fontSize: "15px",
      fontWeight: "400",
      marginTop: "-5px",
    },
    [theme.breakpoints.down("xs")]: {
      left: "20px",
    },
    [theme.breakpoints.up("xl")]: {
      left: "20px",
    },
  },
  imgFluid: {
    maxWidth: "100%",
    marginTop: "50px",
    borderRadius: "6px",
  },
  emojiImg: {
    maxWidth: "16px",
    height: "16px",
  },
  stickyLabel: {
    marginTop: "-45px",
  },
  popupYoutube: {
    position: "absolute",
    left: "50%",
    top: "50%",
  },
  contentDisplay: {
    margin: "0 30px",
  },
  contentSection: {
    "& h2": {
      color: "#000",
      fontWeight: "500",
      "&:hover": {
        color: "#9c27b0",
      },
    },
    "& p": {
      color: "#677294",
    },
  },
});

const useStyles = makeStyles(styles);

function TipsPage(props) {
  const newArr = [0, 1, 2]
  React.useEffect(() => {
    props.getPost({ limit: 3 });
  }, []);
  const { blogDisplay } = props;
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>PTE Practice Test Tips</title>
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
      <Banner title="PTE Practice Test Tips" className={classes.banner} />

      <div className={classNames(classes.main)}>
        <GridContainer className={classes.container}>
          <GridContainer className={classes.section}>
            <GridItem md={7} sm={12} className={classes.contentDisplay}>
            {props.loading ?
              (newArr.map(() => (
                <GridItem xs={12} md={4} sm={6}>
                  <Skeleton variant="rect" width={700} height={400} />
                  <Skeleton  />
                  <Skeleton width="60%" />
                </GridItem>
              ))
              )
              :
              <>
              {blogDisplay ?
                blogDisplay.map((post) => {
                  const { image_url, title, desc, createdAt, slug } = post;
                  const date = new Date(createdAt);

                  return (
                    <div className={classes.blogListItem}>
                      <div 
                      className={
                        image_url && image_url.length > 0
                          ? classes.postDate
                          : classes.postDate2
                      }
                      >
                        <h2>
                          {" "}
                          <h2>
                            {date.getUTCDate()}
                            <span>
                              {date.toLocaleString("en-us", { month: "short" })}{" "}
                            </span>
                          </h2>
                        </h2>
                      </div>{" "}
                      <a href={`/blog/${slug}`}>
                        {" "}
                        <img
                          src={image_url[0].url}
                          className={classes.imgFluid}
                          alt="PTE Self-study Guidline & Templates - PTE One-Week Crashing Tips by PTE Magic"
                          loading="lazy"
                        />{" "}
                      </a>
                      <div className={classes.contentSection}>
                        {" "}
                        <a
                          className="blog_title"
                          href={`/blog/${slug}`}
                        >
                          <h2 className="blog_title">
                            {" "}
                            {title}
                          </h2>{" "}
                        </a>
                        <p>
                          {desc}
                        </p>
                      </div>
                      <GridItem className={classes.btnLink}>
                        <a
                          href={`/blog/${slug}`}
                          className={classes.btnText}
                        >
                          Read more &rarr;
                        </a>
                      </GridItem>
                    </div>
                  );
                }
                )
                :
                <div className={classes.noData}>No Data</div>
              }
                </>}
            </GridItem>
            <GridItem md={4} sm={12} className={classes.title}>
              <GridItem className={classes.searchWidget}>
                <form
                  action="/"
                  className={classes.searchForm}
                >
                  {" "}
                  <input
                    className={classes.formControl}
                    placeholder="Search"
                  />{" "}
                  <span className="input-group-addon">
                    <button type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </span>
                </form>
              </GridItem>
              <GridItem className={classes.recentWidget}>
                <GridItem className={classes.widgetTitle}>
                  <h3>Recent Posts</h3>
                  <div className={classes.borderBottom} />
                </GridItem>
                <GridItem className={classes.postItem1}>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a
                      href="/practice-tests/listening"
                      title="PTE Practice Test Listening"
                    >
                      <h4> PTE Practice Test Listening</h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a
                      href="/practice-tests/reading"
                      title="PTE Practice Test Reading"
                    >
                      <h4> PTE Practice Test Reading</h4>
                    </a>
                  </div>
                </GridItem>

                {props.loading ? (
                  <GridContainer style={{ width: "inherit" }}>
                    {[0, 1, 2].map(() => {
                      return (
                        <GridContainer style={{ width: "inherit" }}>
                          <GridItem xs={4} md={5}>
                            <Skeleton variant="rect" width={130} height={96} />
                          </GridItem>
                          <GridItem xs={8} md={7}>
                            <Skeleton />
                            <Skeleton width="60%" />
                          </GridItem>
                        </GridContainer>
                      );
                    })}
                  </GridContainer>
                ) : (
                  <>
                    {blogDisplay &&
                      blogDisplay.map((blog) => {
                        return (
                          <GridContainer>
                            <GridItem xs={4} md={5}>
                              <a href={`/blog/${blog.slug}`}>
                                {" "}
                                {blog.image_url ? (
                                  <img
                                    src={blog.image_url[0].url}
                                    className={classes.mediaImage}
                                    alt="PTE Speaking Test Short Question PTE Practice Test Magic"
                                    loading="lazy"
                                  />
                                ) : (
                                  <div className={classes.noPreview}>
                                    <p>No Preview</p>
                                  </div>
                                )}{" "}
                              </a>
                            </GridItem>
                            <GridItem xs={8} md={7}>
                              <div className={classes.mediaBody}>
                                {" "}
                                <a
                                  href={`/blog/${blog.slug}`}
                                  title="PTE Speaking Short Answer Question – Exam Structure and Sample Question"
                                >
                                  <h4> {blog.title}</h4>
                                </a>
                              </div>
                            </GridItem>
                          </GridContainer>
                        );
                      })}
                  </>
                )}
                <GridItem className={classes.widgetTitle}>
                  <h3>Categories</h3>
                  <div className={classes.borderBottom} />
                </GridItem>
                <GridItem className={classes.postItem1}>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a href="/practice-tests/listening" title="PTE Practice Test Listening">
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Listening
                      </h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a href="/practice-tests/reading" title="PTE Practice Test Reading">
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Reading
                      </h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a href="/practice-tests/speaking" title="PTE Practice Test Speaking">
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Speaking
                      </h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a href="/practice-tests/tips" title="PTE Practice Test Tips">
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Tips
                      </h4>
                    </a>
                  </div>
                </GridItem>
              </GridItem>
            </GridItem>
          </GridContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(TipsPage);
