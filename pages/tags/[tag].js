/*eslint-disable*/
import React, { useState } from "react";
import Head from "next/head";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import contactUsStyle from "assets/jss/nextjs-material-kit-pro/pages/contactUsStyle.js";
import "assets/css/nextjs-material-kit-pro.css";
import Banner from "components/Parallax/Banner.js";
import logo from "assets/img/New-pte-magic-logo-1.png";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import PTEFooter from "components/Footer/PTEFooter";
import BlogCard from "pages-sections/blog-posts/BlogCard.js";
import { getPostByTag } from "store/blog/actions";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import Pagination from "components/Pagination/PaginationV1.js";
import { ContactlessOutlined } from "@material-ui/icons";
import Skeleton from '@material-ui/lab/Skeleton';

const styles = (theme) => ({
  ...contactUsStyle,
  container: {
    display: "flex",
    justifyContent: "center",
  },
  section: {
    maxWidth: "1240px",
    marginTop: 100,
  },
  bannerHead: {
    "&>div>div>div>h1": {
      fontWeight: 700,
    },
  },
});

const useStyles = makeStyles(styles);

function Tags(props) {
  const router = useRouter();
  const [offset, setOffset] = useState(0);
  const newArr = [0, 1, 2]

  React.useEffect(() => {
    props.getPostByTag(router.query.tag);
  }, []);

  React.useEffect(() => {
    console.log("offset", offset);
  }, [offset]);

  const { tag, pagination } = props;
  const onChangePagination = (event, current) => {
    console.log("current", current);
    setOffset(current - 1);
    console.log("offset", offset);
  };

  const classes = useStyles();
  return (
    <div style={{ lineHeight: "28px", fontFamily: " Poppins, sans-serif" }}>
      <Head>
        <title>{router.query.tag[0].toUpperCase() + router.query.tag.slice(1)}</title>
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
        title={router.query.tag[0].toUpperCase() + router.query.tag.slice(1)}
        subtitle=""
        className={classes.bannerHead}
      />

      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <GridContainer className={classes.section}>
          {props.loading ?
              (newArr.map(() => (
                <GridItem xs={12} md={4} sm={6}>
                  <Skeleton variant="rect" width={363} height={186} />
                  <Skeleton />
                  <Skeleton width="60%" />
                </GridItem>
              ))
              )
              :
              <>
            {tag.slug ?
              tag.posts.map((post) => {
                return (
                  <GridItem xs={12} md={4} sm={6}>
                    <BlogCard
                      title={post.title}
                      subtitle={post.desc}
                      date={post.createdAt}
                      img={post.image_url[0]}
                      href={`/blog/${post.slug}`}
                    />
                  </GridItem>
                );
              })
              :
              (
                <div className={classes.noData}>No Data</div>
              )}
              </>}
          </GridContainer>
        </div>
      </div>

      <div className={(classes.section, classes.container)}>
        <div className={classes.pagination}>
          {pagination && (
            <Pagination
              total={pagination.total}
              current={pagination.page}
              pageSize={pagination.pageSize}
              onChange={onChangePagination}
            />
          )}
        </div>
      </div>
      <PTEFooter />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tag: state.blog.blogByTag,
    pagination: state.blog.tagPagination,
    loading: state.blog.loading
  };
};

const mapDispatchToProps = { getPostByTag };

export default connect(mapStateToProps, mapDispatchToProps)(Tags);
