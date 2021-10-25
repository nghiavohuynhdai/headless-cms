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
        margin: "0 100px",
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
          {/* <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              navDropdown
              hoverColor="warning"
              buttonText="PTE Course"
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              dropdownList={[
                <a
                  className={classes.dropdownLink}
                  href="https://course.ptemagicpractice.com/express"
                  target="_blank"
                >
                  Video Course
                </a>,
                <a
                  className={classes.dropdownLink}
                  href="https://offer.ptemagicpractice.com/ebook"
                  target="_blank"
                >
                  Ebook
                </a>,
                <a
                  className={classes.dropdownLink}
                  href="https://ptemagic.com.au/online-pte-training-courses/"
                  target="_blank"
                  rel="nofollow"
                >
                  Online Training Course
                </a>
              ]}
            />
          </ListItem> */}
          {/* <ListItem className={classes.listItem}>
            <a
              className={classes.blankLink}
              href="https://course.ptemagicpractice.com/express"
              target="_blank"
            >
              <Button className={classes.navLink} color="transparent">

              </Button>
            </a>
          </ListItem> */}
          {/* <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              navDropdown
              hoverColor="warning"
              buttonText="Getting Started"
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              dropdownList={[
                <Link href="/how-to-use-pte-magic-platform">
                  <a className={classes.dropdownLink}>
                    {" "}
                    How To Use PTE MAGIC Platform
                  </a>
                </Link>,
                <Link href="/5-mistakes-to-avoid-in-pte-speaking">
                  <a className={classes.dropdownLink}>
                    {" "}
                    5 mistakes to avoid in PTE Speaking
                  </a>
                </Link>,
                <Link href="/about-us">
                  <a className={classes.dropdownLink}> About Us</a>
                </Link>,
                <Link href="/faqs">
                  <a className={classes.dropdownLink}> FAQs</a>
                </Link>,
              ]}
            />
          </ListItem> */}
          {/* <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              navDropdown
              hoverColor="warning"
              buttonText="PTE Practice Test"
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              dropdownList={[
                // <Link href="/practice-tests/tips">
                //   <a className={classes.dropdownLink}>
                //     {" "}
                //     PTE Practice Test Tips
                //   </a>
                // </Link>,
                // <Link href="/practice-trial">
                //   <a className={classes.dropdownLink}>
                //     {" "}
                //     PTE Practice Trial
                //   </a>
                // </Link>,
                // <Link href="/practice-tests/speaking">
                //   <a className={classes.dropdownLink}>
                //     {" "}
                //     PTE Practice Test Speaking
                //   </a>
                // </Link>,
                // <Link href="/practice-tests/reading">
                //   <a className={classes.dropdownLink}>
                //     {" "}
                //     PTE Practice Test Reading
                //   </a>
                // </Link>,
                // <Link href="/practice-tests/listening">
                //   <a className={classes.dropdownLink}>
                //     {" "}
                //     PTE Practice Test Listening
                //   </a>
                // </Link>,
                // <Link href="/practice-tests/writing">
                //   <a className={classes.dropdownLink}>
                //     {" "}
                //     PTE Practice Test Writing
                //   </a>
                // </Link>,
              ]}
            />
          </ListItem> */}

          {/* <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              navDropdown
              hoverColor="warning"
              buttonText="Games"
              buttonProps={{
                className: classes.navLink,
                color: "transparent",
              }}
              dropdownList={[
                <Link href="/shuffle-card">
                  <a className={classes.dropdownLink}> Shuffle Cards</a>
                </Link>,
                <Link href="/game-flip-card">
                  <a className={classes.dropdownLink}> Flip Cards</a>
                </Link>,
                <Link href="/hang-man">
                <a className={classes.dropdownLink}> Hang Man</a>
              </Link>,
              ]}
            />
          </ListItem> */}
          {/* <ListItem className={classes.listItem}>
            <Button
              className={classes.navLink}
              color="transparent"
            >
              <Link href="/#"> Question Sample</Link>
            </Button>
          </ListItem> */}
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
              <Link href="/#"> Blog</Link>
            </Button>
          </ListItem>
          {/* <ListItem className={classes.listItem}>
            <Button
              className={classes.navLink}
              onClick={(e) => e.preventDefault()}
              color="transparent"
            >
              <Link href="/contact-us"> Contact Us</Link>
            </Button>
          </ListItem> */}

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
