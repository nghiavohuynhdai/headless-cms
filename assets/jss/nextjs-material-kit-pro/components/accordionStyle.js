import {
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor
} from "assets/jss/nextjs-material-kit-pro.js";

const accordionStyle = theme => ({
  root: {
    marginBottom: "20px",
    width: "72%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
  },
  expansionPanel: {
    boxShadow: "none",
    marginBottom: "8px",
    "&:before": {
      display: "none !important"
    }
  },
  expansionPanelExpanded: {
    margin: "0 !important"
  },
  expansionPanelSummary: {
    minHeight: "auto !important",
    backgroundColor: "transparent",
    border: "1px solid " + grayColor[6],
    padding: "23px 30px",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    color: grayColor[1]
  },
  primaryExpansionPanelSummary: {
    "&:hover": {
      color: grayColor[1]
    }
  },
  secondaryExpansionPanelSummary: {
    "&:hover": {
      color: secondaryColor[0]
    }
  },
  warningExpansionPanelSummary: {
    "&:hover": {
      color: warningColor[0]
    }
  },
  dangerExpansionPanelSummary: {
    "&:hover": {
      color: dangerColor[0]
    }
  },
  successExpansionPanelSummary: {
    "&:hover": {
      color: successColor[0]
    }
  },
  infoExpansionPanelSummary: {
    "&:hover": {
      color: infoColor[0]
    }
  },
  roseExpansionPanelSummary: {
    "&:hover": {
      color: roseColor[0]
    }
  },
  expansionPanelSummaryExpaned: {
    borderBottom: "none",
    "& $expansionPanelSummaryExpandIcon": {
      [theme.breakpoints.up("md")]: {
        top: "auto !important"
      },
      transform: "rotate(180deg)",
      [theme.breakpoints.down("sm")]: {
        top: "10px !important"
      },
      // some jss/css to make the cards look a bit better on Internet Explorer
      "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
        display: "inline-block !important",
        top: "10px !important"
      }
    }
  },
  primaryExpansionPanelSummaryExpaned: {
    color: grayColor[1]
  },
  secondaryExpansionPanelSummaryExpaned: {
    color: secondaryColor[0]
  },
  warningExpansionPanelSummaryExpaned: {
    color: warningColor[0]
  },
  dangerExpansionPanelSummaryExpaned: {
    color: dangerColor[0]
  },
  successExpansionPanelSummaryExpaned: {
    color: successColor[0]
  },
  infoExpansionPanelSummaryExpaned: {
    color: infoColor[0]
  },
  roseExpansionPanelSummaryExpaned: {
    color: roseColor[0]
  },
  expansionPanelSummaryContent: {
    margin: "0 !important"
  },
  expansionPanelSummaryExpandIcon: {
    [theme.breakpoints.up("md")]: {
      top: "auto !important"
    },
    transform: "rotate(0deg)",
    color: "inherit",
    right: "10px",
    position: "absolute",
    [theme.breakpoints.down("sm")]: {
      top: "10px !important"
    },
    // some jss/css to make the cards look a bit better on Internet Explorer
    "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
      display: "inline-block !important"
    }
  },
  expansionPanelSummaryExpandIconExpanded: {},
  title: {
    fontSize: "19px",
    fontWeight: "400",
    textAlign: "left",
    marginTop: "0",
    marginBottom: "0",
    color: "inherit",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px"
    },
  },
  expansionPanelDetails: {
    display: "block",
    textAlign: "left",
    padding: "0px 30px 23px 30px",
    marginBottom: "8px",
    fontSize: "15px",
    border: "1px solid " + grayColor[6],
    borderTop: "none",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
  }
});

export default accordionStyle;
