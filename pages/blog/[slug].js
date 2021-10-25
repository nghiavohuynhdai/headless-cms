/*eslint-disable*/
import React from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";

// import dynamic from "next/dynamic";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import dynamic from 'next/dynamic'
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import PTEFooter from "components/Footer/PTEFooter";
import { getPostBySlug } from "store/blog/actions";
import { connect } from "react-redux";
import { useRouter } from "next/router";
// import MarkdownPreview from "@uiw/react-markdown-preview";
import Skeleton from "@material-ui/lab/Skeleton";
import presentationStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationStyle.js";
const MarkdownPreview = dynamic(() => import('@uiw/react-markdown-preview'))

const styles = (theme) => ({
  ...presentationStyle,
  section: {
    maxWidth: "1140px",
    margin: "auto",
    marginTop: 100,
  },
  blogListItem: {
    position: "relative",
  },
  imgFluid: {
    maxWidth: "100%",
    marginTop: "50px",
    borderRadius: "6px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
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
      left: "45px",
    },
    [theme.breakpoints.up("xl")]: {
      left: "45px",
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
      left: "45px",
    },
    [theme.breakpoints.up("xl")]: {
      left: "45px",
    },
  },
  tags: {
    display: "flex",
    margin: "50px 0",
    "& p": {
      marginRight: "5px",
    },
  },
  tagName: {
    marginRight: "5px",
    backgroundColor: "#c1a2f2",
    borderRadius: "5px",
    width: "80px",
    height: "30px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#e5d9f9",
    },
  },
});

const useStyles = makeStyles(styles);

function Posts(props) {
  const router = useRouter();

  React.useEffect(() => {
    props.getPostBySlug(router.query.slug);
  }, []);

  const classes = useStyles();
  const { image_url, title, content, createdAt } = props.blogBySlug;
  const date = new Date(createdAt);
  return (
    <div>
      <Head>
        <title>{title}</title>
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
      <Banner title={title} subtitle="" className={classes.banner} />

      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <GridContainer className={classes.section}>
            {props.loading ? (
              <GridContainer>
                <GridItem xs={12} md={12} sm={12}>
                  <Skeleton variant="rect" width={1024} height={300} />
                  <Skeleton/>
                  <Skeleton width="60%" />
                </GridItem>
              </GridContainer>
            ) : (
              <>
               {props ? 
               <GridItem xs={12} md={12} className={classes.blogListItem}>
                {image_url && image_url.length > 0 && (
                  <img className={classes.imgFluid} src={image_url[0].url} />
                )}
                <GridItem
                  className={
                    image_url && image_url.length > 0
                      ? classes.postDate
                      : classes.postDate2
                  }
                >
                  <a href="#">
                    <h2>
                      {date.getUTCDate()}
                      <span>
                        {date.toLocaleString("en-us", { month: "short" })}{" "}
                      </span>
                    </h2>
                  </a>
                </GridItem>
                <GridItem xs={12} md={12}>
                  <MarkdownPreview
                    className="mark_down_preview"
                    source={content}
                  />
                </GridItem>
                <GridItem className={classes.tags}>
                  
                  {props.blogBySlug.tags ? <p>Tags: </p> : null}
                  {props.blogBySlug.tags &&
                    props.blogBySlug.tags.map((tag) => {
                      return (
                        <a
                          className={classes.tagName}
                          href={`/tags/${tag.slug}`}
                        >
                          {" "}
                          {tag.title}{" "}
                        </a>
                      );
                    })}
                </GridItem>
              </GridItem> 
              : (
                <div className={classes.noData}>No Data</div>
              )} 
              
              
              </>
            )}
          </GridContainer>
        </div>
      </div>
      <PTEFooter />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.blog.loading,
    blogBySlug: state.blog.blogBySlug,
  };
};

const mapDispatchToProps = { getPostBySlug };

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
