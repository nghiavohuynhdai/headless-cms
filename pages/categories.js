/*eslint-disable*/
import React, { useState } from "react";
import Head from "next/head";
// nodejs library to set properties for components
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import PTEFooter from "components/Footer/PTEFooter.js";
import HeaderLinksPTE from "components/Header/HeaderLinksPTE";
import logo from "assets/img/New-pte-magic-logo-1.png";
import Banner from "components/Parallax/Banner.js";
import BlogCard from "pages-sections/blog-posts/BlogCard.js";
import Pagination from "components/Pagination/PaginationV1.js";
import { getPost } from "store/blog/actions";
import { connect } from "react-redux";
import Skeleton from '@material-ui/lab/Skeleton';

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
  },
  section: {
    maxWidth: "1240px",
    marginTop: 100,
  },
  pagination: {
    margin: "50px auto",
    display: "block",
    textAlign: "center",
  },
  bannerHead: {
    "&>div>div>div>h1": {
      fontWeight: 700,
    },
  },
};

const useStyles = makeStyles(styles);

function BlogCategories(props) {
  const [offset, setOffset] = useState(0);
  const newArr = [0, 1, 2]

  React.useEffect(() => {
    props.getPost({ limit: 8 });
  }, []);
  console.log(props.data)

  const classes = useStyles();

  const { data, pagination } = props;

  const onChangePagination = (event, current) => {
    setOffset(current - 1);
  };

  return (
    <div>
      <Head>
        <title>Blog</title>
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
      <Banner
        title="Blog"
        subtitle="Categories"
        className={classes.bannerHead}
      />

      <div className={classes.main}>
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
                {data ? data.slice(offset * 10, offset * 10 + 9).map((post) => {
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
                }
                
                )
                :
                <div className={classes.noData}>No Data</div>
                }
              </>}
          </GridContainer>
        </div>
        <div className={(classes.section, classes.container)}>
          <div className={classes.pagination}>
            <Pagination
              total={pagination.total}
              current={pagination.page}
              pageSize={pagination.pageSize}
              onChange={onChangePagination}
            />
          </div>
        </div>
        <PTEFooter />
      </div>
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.blog.loading,
    data: state.blog.blogDisplay,
    pagination: state.blog.blogPagination,
  };
};

const mapDispatchToProps = { getPost };

export default connect(mapStateToProps, mapDispatchToProps)(BlogCategories);
