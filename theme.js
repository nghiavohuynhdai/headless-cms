import {createMuiTheme} from "@material-ui/core";

export const constant = {
  palette: {
    type: "light"
  },
  color: {
    mainYellow: "#fadb07",
    lightYellow: "#ebef4e",
    black1: "#2c2c51",
    purple: "#5e2ced",
    greyText: "#677294"
  },
  yellowButton:(theme) => ({
    "&,&:hover,&:focus": {
      textTransform: "capitalize",
      font: '900 15px "Poppins",sans-serif',
      backgroundColor: theme.color.mainYellow,
      color: theme.color.black1,
      boxShadow: "none"
    }
  }),

}
export const theme = createMuiTheme(constant);
