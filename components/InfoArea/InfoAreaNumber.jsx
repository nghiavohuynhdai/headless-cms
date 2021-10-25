import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

// import styles from "assets/jss/nextjs-material-kit-pro/components/infoStyle.js";

const styles = {
  title: {
    fontSize: "30px",
    color: "#404040",
    margin: 0
  },
  icon: {

  },
  iconWrapper: {

  },
  iconWrapperVertical: {
    fontSize: 60
  },
  description: {
    fontWeight: 700,
    color: "#284664",
    fontSize:"18px"
  },
  wrapper: {
    margin: "0 16px"
  },
  infoArea: {
    display: "flex",
    alignItems: "center",
    margin: "24px 0"
  }
}

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const { title, description, iconColor, vertical, className } = props;
  const classes = useStyles();
  // const iconWrapper = classNames({
  //   [classes.iconWrapper]: true,
  //   [classes[iconColor]]: true,
  //   [classes.iconWrapperVertical]: vertical
  // });
  // const iconClasses = classNames({
  //   [classes.icon]: true,
  //   [classes.iconVertical]: vertical
  // });
  // const infoAreaClasses = classNames({
  //   [classes.infoArea]: true,
  //   [className]: className !== undefined
  // });
  let icon = null;
  switch (typeof props.icon) {
    case "string":
      icon = <Icon className={classes.iconWrapperVertical}>{props.icon}</Icon>;
      break;
    default:
      icon = <props.icon className={classes.iconWrapperVertical} />;
      break;
  }
  return (
    <div className={classes.infoArea}>
      <div className={classes.iconWrapper}>{icon}</div>
      <div className={classes.wrapper}>
        <h4 className={classes.title}>{title}</h4>
        <div className={classes.description}>{description}</div>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  className: PropTypes.string
};
