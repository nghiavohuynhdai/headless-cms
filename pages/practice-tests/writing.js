/*eslint-disable*/
import React, { useRef, useState } from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";

// core components
import PTEFooter from "../../components/Footer/PTEFooter";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import Header from "components/Header/Header";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { connect } from "react-redux";

// sections for this page

import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
import { getPost } from "../../store/blog/actions";
import Skeleton from "@material-ui/lab/Skeleton";

const styles = (theme) => ({
  ...presentationStyle,
  section: {
    maxWidth: "1240px",
  },
  main: {
    margin: "100px",
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
    fontWeight: "500 !important",
  },
  showMoreLink: {
    marginTop: "20px !important",
    color: "black",
    textDecoration: "underline",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  bannerHead: {
    "&>div>div>div>h1": {
      fontWeight: 700,
    },
  },
  noPreview: {
    backgroundColor: "#e5e4e3",
    height: "170px",
    borderRadius: "10px",
    textAlign: "center",
    "& p": {
      fontSize: "50px",
      paddingTop: "100px",
      color: "#fff",
    },
  },
});

const useStyles = makeStyles(styles);

function WritingPage(props) {

  React.useEffect(() => {
    props.getPost({ limit: 5 });
  }, []);
  const { blogDisplay } = props;
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Practice Test Writing</title>
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
      <Banner
        title="PTE Practice Test Writing"
        className={classes.bannerHead}
      />

      <div className={classes.main}>
          <GridContainer className={classes.section}>
            <GridItem md={8} sm={12}></GridItem>
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
                  <GridContainer style={{width: "inherit"}}>
                    {[0, 1, 2].map(() => {
                      return (
                        <GridContainer style={{width: "inherit"}}>
                          <GridItem xs={4} md={5}>
                            <Skeleton variant="rect" width={130} height={96}/>
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
                    {blogDisplay ?
                      blogDisplay.map(blog => {
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
                      })
                      :
                      <div className={classes.noData}>No Data</div>
                      }
                  </>
                )}
                <GridItem style={{ marginTop: "20px" }}>
                  <Link href="/categories">
                    <a className={classes.showMoreLink}>Show More</a>
                  </Link>
                  ,
                </GridItem>
                <GridItem className={classes.widgetTitle}>
                  <h3>Categories</h3>
                  <div className={classes.borderBottom} />
                </GridItem>
                <GridItem className={classes.postItem1}>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a
                      href="/practice-tests/listening"
                      title="PTE Practice Test Listening"
                    >
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Listening
                      </h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a
                      href="/practice-tests/reading"
                      title="PTE Practice Test Reading"
                    >
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Reading
                      </h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a
                      href="/practice-tests/speaking"
                      title="PTE Practice Test Speaking"
                    >
                      <h4 className={classes.categories}>
                        {" "}
                        PTE Practice Test Speaking
                      </h4>
                    </a>
                  </div>
                  <div className={classes.mediaBody}>
                    {" "}
                    <a
                      href="/practice-tests/tips"
                      title="PTE Practice Test Tips"
                    >
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

export default connect(mapStateToProps, mapDispatchToProps)(WritingPage);
