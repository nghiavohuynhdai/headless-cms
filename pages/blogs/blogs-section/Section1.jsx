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
}));

export default function Section1(props) {
  const classes = useStyles();
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
        <Grid item xs={12} md={3} sm={6} className={classes.gridItem}>
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
      <div>Lastest Post</div>
      <Grid container>{posts}</Grid>
    </div>
  );
}
