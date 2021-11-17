import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";
import headersStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js";
import Link from "next/link";
import Icon from "@material-ui/core/Icon";
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import PeopleIcon from "@material-ui/icons/People";
import { LiveHelp } from "@material-ui/icons";

export default function HeaderLinksPTE(props) {
  const styles = (theme) => ({
    yellowButton: {
      ...theme.yellowButton(theme),
    },
    ...headersStyle(theme),
    signIn: {
      background: "#5333f7",
      padding: "0 28px",
      lineHeight: "45px",
      textTransform: "unset",
      fontSize: 16,
      fontWeight: 500,
      color: "#fff",
      "&:hover": {
        color: "#fff",
        background: "#5333f7",
      },
    },
    blankLink: {
      color: "#333",
    },
    headCenter: {
      [theme.breakpoints.up("lg")]: {
        margin: "0 90px",
      },
    },
  });

  const useStyles = makeStyles(styles);

  const classes = useStyles();
  return (
    <div className={classes.collapse} style={{ justifyContent: "flex-end" }}>
      <List className={classes.list}>
        <div className={classes.headCenter}>
          <ListItem className={classes.listItem}>
            <Button
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              <Link href="/">Home</Link>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a
              className={classes.blankLink}
              href="https://offer.ptemagicpractice.com/ebook"
              target="_blank"
            >
              <Button className={classes.navLink} color="transparent">
                Ebook
            </Button>
            </a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <a
              className={classes.blankLink}
              href="https://ptemagic.com.au/trial-class/"
              target="_blank"
            >
              <Button className={classes.navLink} color="transparent">
              Online Training Course
            </Button>
            </a>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              className={classes.navLink}
              color="transparent"
            >
              <Link href="https://offer.ptemagicpractice.com/videocourse">Video Course</Link>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              <Link href='/blogs'> Blog</Link>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              <Link href="/contact-us"> Contact Us</Link>
            </Button>
          </ListItem>
        </div>
        <div className={classes.signInArea}>
          <ListItem className={classes.listItem}>
            <Link href="/platform/">
              <Button round className={classes.signIn}>
                Sign in
              </Button>
            </Link>
          </ListItem>
        </div>
      </List>
    </div>
  );
}
