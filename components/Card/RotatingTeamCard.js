import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import cardsStyle from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/sectionCards.js";
import CardBody from "./CardBody";
import Card from "./Card";
import {blackColor, hexToRgb, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import Button from "../CustomButtons/Button";
import Grid from "@material-ui/core/Grid";


export default function RotatingTeamCard(props) {
  const {name, img, facebook, linkedIn} = props

  const style = theme => ({
    ...cardsStyle,
    front: {
      width: "100%!important",
      paddingTop: "70%",

    },
    back: {
      width: "100%px!important",
      paddingTop: "70%",

    },
    rotatingCardContainer: {
      height: "250px!important",
      width: "100%!important",
      perspective: "800px",
      marginBottom: "0!important",
      "& $cardRotate $back": {
        transform: "rotateY(180deg)",
        zIndex: "5",
        textAlign: "center",
        width: "100%",
        height: "100%"
      },
      "&:not($manualRotate):hover $cardRotate": {
        transform: "rotateY(180deg)"
      },
      "&$manualRotate$activateRotate $cardRotate": {
        transform: "rotateY(180deg)"
      },
      "& $cardRotate $front": {
        zIndex: "2",
        position: "relative"
      },
      "& $cardRotate $front, & $cardRotate $back": {
        backfaceVisibility: "hidden",
        boxShadow:
          "0 2px 2px 0 rgba(" +
          hexToRgb(blackColor) +
          ", 0.14), 0 3px 1px -2px rgba(" +
          hexToRgb(blackColor) +
          ", 0.12), 0 1px 5px 0 rgba(" +
          hexToRgb(blackColor) +
          ", 0.2)",
        position: "absolute",
        backgroundColor: whiteColor,
        borderRadius: "6px",
        top: "0",
        left: "0",
        WebkitBoxPack: "center",
        MsFlexPack: "center",
        justifyContent: "center",
        MsFlexLinePack: "center",
        alignContent: "center",
        display: "flex",
        WebkitBoxOrient: "vertical",
        WebkitBoxDirection: "normal",
        flexDirection: "column",
      }
    },
    cardTitleFront: {
      background: "rgba(0, 0, 0, 0.7)",
      padding: "16px 0",
      margin: 0,
      marginBottom: 15,
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
    },
    cardBodyFrontRotate: {
      WebkitBoxPack: "center",
      MsFlexPack: "center",
      justifyContent: "flex-end",
      MsFlexLinePack: "center",
      alignContent: "center",
      display: "flex",
      WebkitBoxOrient: "vertical",
      WebkitBoxDirection: "normal",
      flexDirection: "column",
      padding: 0,
      width: "100%",
      maxWidth: "unset"
    },
    cardBodyBackRotate: {
      WebkitBoxPack: "center",
      MsFlexPack: "center",
      justifyContent: "flex-start",
      MsFlexLinePack: "center",
      alignContent: "center",
      display: "flex",
      WebkitBoxOrient: "vertical",
      WebkitBoxDirection: "normal",
      flexDirection: "column",
      padding: 0,
      width: "100%",
      maxWidth: "unset"
    },
    wrapperBackBackground: {
      backgroundPosition: "50%",
      backgroundSize: "cover",
      textAlign: "center",
      "&:after": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
        backgroundColor: "rgba(" + hexToRgb(blackColor) + ", 0.56)",
        borderRadius: "6px"
      }
    },
    wrapperFrontBackground: {
      backgroundPosition: "50%",
      backgroundSize: "cover",
      textAlign: "center",
      "&:after": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
        borderRadius: "6px"
      }
    },
    teamWrapper: {
      display: "flex",
      justifyContent: "center",
    },
    wrapper: {
      padding: 16,
      overflow: "hidden",
      width: "calc(500 / 350 * 100%)",
    }
  });



  const useStyles = makeStyles(style);
  const classes = useStyles();
  return (
    <Grid xs={12} sm={6} lg={3} item className={classes.wrapper}>
    <div className={classes.rotatingCardContainer}>
      <Card background className={classes.cardRotate}>
        <div
          className={`${classes.front} ${classes.wrapperFrontBackground}`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            overflow: "hidden",
            paddingTop: "calc(500 / 350 * 100%)",
          }}
        >
          <CardBody background className={classes.cardBodyFrontRotate}>
            <h4 className={classes.cardTitleFront}>
              {name}
            </h4>
          </CardBody>
        </div>
        <div
          className={`${classes.back} ${classes.wrapperBackBackground}`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            overflow: "hidden",
            paddingTop: "calc(500 / 350 * 100%)",
          }}
        >
          <CardBody background className={classes.cardBodyBackRotate} style={{padding: 0}}>
            <div className={classes.teamWrapper}>
            {
              facebook &&
            <Button
              justIcon
              simple
              onClick={e => e.preventDefault()}
              size="sm"
            >
              <i className="fab fa-facebook"/>
            </Button>
            }
            {
              linkedIn &&
              <Button
                justIcon
                simple
                onClick={e => e.preventDefault()}
                size="sm"
              >
                <i className="fab fa-linkedin" />
              </Button>
            }
            </div>
            <hr/>
            <h5 >{name}</h5>

          </CardBody>
        </div>
      </Card>
    </div>
    </Grid>
  )
}