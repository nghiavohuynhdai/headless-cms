import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import CustomizedTabs from "../../components/CustomTabs/CustomizedTabs";
import FadeIn from "react-fade-in";
import dashboard from "../../assets/img/new-home/demodashboard_new.jpg";
import questionbank from "../../assets/img/new-home/demoquestionbank.png";
import mocktest from "../../assets/img/new-home/demomocktest_new.jpg";
import handleData from "../../lib/handleData";

const useStyles = makeStyles((theme) => ({
  ...teamsStyle,
  root: {
    position: "relative",
    backgroundImage:
      "url(https://react-next-landing.redq.io/_next/static/images/banner-texture-25e9140dbeecfc0ee999031279bb6a2c.png), linear-gradient(35deg, #faf2b5 0%, #fadb06 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    paddingTop: 80,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 60,
    },
  },
  sectionHeader: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    "& img": {
      maxWidth: 400,
      width: "100%",
    },
    "& h2": {
      textTransform: "uppercase",
      fontSize: 14,
      lineHeight: 1.2,
      fontWeight: 700,
      color: "rgb(15, 33, 55)",
      margin: 0,
    },
    "& h3": {
      fontSize: 24,
      fontWeight: 500,
      color: "rgb(15, 33, 55)",
      marginTop: 5,
      lineHeight: 1.67,
    },
  },
  imageDemo: {
    width: "100%",
    margin: "40px 0px",
  },
}));

const SixthSection = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const data = props.data.innerBlocks;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {/* <div className={classes.sectionHeader}>
          <h2>UPDATE</h2>
          <h3>Here is the sneak peak of our Magic platform</h3>
        </div> */}
        <div className={classes.sectionHeader}>
          {handleData(data[0].innerBlocks)}
        </div>
        <CustomizedTabs
          value={value}
          handleChange={handleChange}
          data={data[1].innerBlocks}
        />
        {/* {value === 0 && (
          <FadeIn transitionDuration={800}>
            <img
              className={classes.imageDemo}
              src={dashboard}
              alt="dashboard"
            />
          </FadeIn>
        )}
        {value === 1 && (
          <FadeIn transitionDuration={800}>
            <img
              className={classes.imageDemo}
              src={questionbank}
              alt="questionbank"
            />
          </FadeIn>
        )}
        {value === 2 && (
          <FadeIn transitionDuration={800}>
            <img className={classes.imageDemo} src={mocktest} alt="mocktest" />
          </FadeIn>
        )} */}
        {data[2].innerBlocks.map((image, index) => {
          return (
            value === index && (
              <FadeIn transitionDuration={800}>
                <img
                  className={classes.imageDemo}
                  src={image.attributes.url}
                  alt={image.attributes.atl}
                />
              </FadeIn>
            )
          );
        })}
      </div>
    </div>
  );
};

export default SixthSection;
