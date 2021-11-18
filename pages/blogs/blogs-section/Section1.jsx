import React from "react";
import { makeStyles } from "@material-ui/styles";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#424242"
  },
  categories: {
    color: "#2655bd",
    fontWeight: 450,
  },
  gridItem: {
    padding: "0 35px",
    textAlign: "center",
    fontWeight: 400,
    fontSize: 14,
    "& h2": {
      fontWeight: 500,
      fontSize: 20,
    },
    "& a:hover": {
      color: "#2655bd",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
  },
  styleGrid:{
    padding:"30px 100px 25px 100px",
    marginBottom:25,
    "& h1":{
      fontSize:48,
      "& a":{
       width:"100%",
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding:0,
      paddingTop:20,
      display:"flex",
      flexDirection:"column",
      alignItems:"center !important",
      textAlign:"center",
    },
  },
  styleImage:{
    width:"100%",
    height:"100%"
  },
  styleText:{
    width:"100% !important",
    "& p":{
       width:"100%",
       fontSize:20,
    },
  },
  // imageContainer:{
  //   [theme.breakpoints.down("sm")]:{
  //     width:"100%",
  //   },
  // },
}));

export default function Section1(props) {
  const classes = useStyles();
  const data = props.data[0];
  const image = data.featuredImage.node;
  const categories = data.categories.nodes[0];
  const posts = props.data.map((post, index) => {
    if (index != 0) {
      let date = "";
      for (index in post.date) {
        if (post.date[index] == "T") {
          date = date + " | ";
        } else {
          date = date + post.date[index];
        }
      }
      return (
          <Grid item xs={12} md={3} sm={6} className={classes.gridItem} >
            <div className={classes.categories}>
              <p>{post.categories.nodes.map((category) => category.name)}</p>
            </div>
            <Link href="#">
              <h2>
                <a>{post.title}</a>
              </h2>
            </Link>
            <p>{date}</p>
          </Grid>
      );
    }
  });

  return (
    <div className={classes.root}>
      <Grid container className={classes.styleGrid} justifyContent="center">
        <Grid item  xs={12} sm={12} md={6} className={classes.styleGridText}>
          <a href="/">{categories.name}</a>  
          <h1>
            <a href="/">{data.title}</a>
          </h1>
          <div
          dangerouslySetInnerHTML={{
            __html: data.excerpt,
          }}
          className={classes.styleText}
        ></div>
        </Grid>
        <Grid item xs={12} md={6} sm={12} className={classes.imageContainer}>
          <a href="/" >
            <img src={image.sourceUrl} className={classes.styleImage}></img>
          </a>
        </Grid>
      </Grid>
      <div>Lastest Post</div>
      <Grid container>{posts}</Grid>
    </div>
  );
}
