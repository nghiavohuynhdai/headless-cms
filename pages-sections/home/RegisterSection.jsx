import React, { useState } from "react"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { makeStyles, InputAdornment, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import Tooltip from '@material-ui/core/Tooltip';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import GoogleButton from 'react-google-button'


const useStyles = makeStyles((theme) => ({
  container: {
    background: "#fff",
    borderRadius: "4px",
    padding: "15px 20px",
    boxShadow: "0 4px 12px rgb(5 0 56 / 8%)",
  },
  startForFree: {
    marginTop: "5px",
    marginBottom: "15px",
  },
  labelText: {
    fontSize: 35,
    color: "#3C4858 !important",
    fontWeight: "bold",
    marginBottom: 15,
    whiteSpace: "nowrap"
  },
  labelRoot: {
    fontSize: 25,
    color: "#3C4858 !important"
  },
  inputRoot: {
    padding: 10,
    border: "1px solid #dadfe2",
    color: "#3C4858 !important",
    borderRadius: 4,
    background: "#ffffff"
  },
  inputRootFocused: {
    border: `1px solid #3a10e5 !important`,
  },
  policyInfo: {
    fontSize: 16,
    color: "#3C4858 !important",
    fontWeight: "normal",
    marginBottom: 15
  },
  otherMethods: {
    fontSize: 16,
    color: "#3C4858 !important",
    fontWeight: "bold",
    marginBottom: 5
  },
  socialMedia: {
    display: "flex",
    flexDirection: "row",
    columnGap: "5px"
  },
  dividerContainer: {
    display: "flex",
    alignItems: "center"
  },
  border: {
    borderBottom: "2px solid lightgray",
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 700,
    fontSize: 12,
    lineHeight: "15px",
    color: "#666666"
  },
  customFormControlClasses: {
    paddingTop: "10px !important",
    marginBottom: "5px !important"
  },
}))

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "20px",
        color: "black",
        backgroundColor: "#ffffff",
        border: "1px solid black",
        fontWeight: "normal"
      }
    }
  }
});

const FACEBOOK_APP_ID = "438415020785500";
const GOOGLE_APP_ID = "396435590429-8sgharaspbioplt10qk0hgfkg3b229sa.apps.googleusercontent.com"


const DividerWithText = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.dividerContainer}>
      <div className={classes.border} />
      <span className={classes.content}>{children}</span>
      <div className={classes.border} />
    </div>
  );
};


function RegisterSection() {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: ""
  })

  const [error, setError] = useState({
    email: false,
    firstName: false,
    lastName: false,
    password: false,
  })

  const handleChange = (event) => {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value
    })
  }
  const responseFacebook = (response) => { }
  const responseGoogleSuccess = (response) => { }
  const responseGoogleFail = (response) => { }

  const handleGetStarted = () => {
    let newError = { ...error }
    for (const key of Object.keys(inputValue)) {
      if (inputValue[key] === "") {
        newError[key] = true
      } else {
        newError[key] = false
      }
    }
    setError(newError)
  }

  return (

    <GridItem className={classes.container}>
      <div className="btn-wrapper text-center">
        <div>
          <FacebookLogin
            appId={FACEBOOK_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            textButton="Sign up with Facebook"
            cssClass="padding-facebook-btn fb connect m-r-20"
            callback={responseFacebook}
            isMobile={false}
          />
        </div>
        <div>
          <GoogleLogin
            clientId={GOOGLE_APP_ID}
            // buttonText="Sign up with Google"
            className="btn-social-google btn-neutral btn-icon"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleFail}
            render={renderProps => (
              <GoogleButton onClick={renderProps.onClick} className="google-login-button" >Sign in with Google</GoogleButton>
            )}
          />
        </div>
      </div>

      <DividerWithText>OR</DividerWithText>

      <CustomInput
        formControlProps={{
          fullWidth: true,
          className: classes.customFormControlClasses,
          required: true,
        }}
        // labelText="Email"
        // labelProps={{
        //   classes: {
        //     root: classes.labelRoot
        //   },
        //   shrink: true
        // }}
        error={error.email}
        inputProps={{
          classes: {
            root: classes.inputRoot,
            focused: classes.inputRootFocused
          },
          name: "email",
          type: "email",
          disableUnderline: true,
          value: inputValue.email,
          placeholder: "Work Email",
          onChange: handleChange
        }}
      />
      <div style={{ display: "flex", flexDirection: "row", columnGap: "15px" }}>
        <CustomInput
          formControlProps={{
            fullWidth: true,
            className: classes.customFormControlClasses,
            required: true,
          }}
          // labelText="First Name"
          // labelProps={{
          //   classes: {
          //     root: classes.labelRoot
          //   },
          //   shrink: true
          // }}
          error={error.firstName}
          inputProps={{
            classes: {
              root: classes.inputRoot,
              focused: classes.inputRootFocused
            },
            name: "firstName",
            type: "text",
            disableUnderline: true,
            value: inputValue.firstName,
            placeholder: "First Name",
            onChange: handleChange
          }}
        />
        <CustomInput
          formControlProps={{
            fullWidth: true,
            className: classes.customFormControlClasses,
            required: true,
          }}
          // labelText="Last Name"
          // labelProps={{
          //   classes: {
          //     root: classes.labelRoot
          //   },
          //   shrink: true
          // }}
          error={error.lastName}
          inputProps={{
            classes: {
              root: classes.inputRoot,
              focused: classes.inputRootFocused
            },
            required: true,
            name: "lastName",
            type: "text",
            disableUnderline: true,
            placeholder: "Last Name",
            value: inputValue.lastName,
            onChange: handleChange
          }}
        />
      </div>
      <div className={classes.startForFree}>
        <Button fullWidth color="primary" onClick={handleGetStarted}>Get Started for free</Button>
      </div>
      <div className={classes.policyInfo}>
        By signing up for PTE Magic, you agree to PTE Magic's <a>Terms of Service</a> & <a>Privacy Policy</a>.
      </div>
    </GridItem>

  )
}

export default RegisterSection;

// endAdornment: (
//   <InputAdornment
//     position="end"
//     className={classes.inputAdornment}
//   >
//     <MuiThemeProvider theme={theme}>
//       <Tooltip placement="bottom-end" title="PTE Magic requires that you have a secure password.">
//         <ErrorOutlineRoundedIcon />
//       </Tooltip>
//     </MuiThemeProvider>
//   </InputAdornment>
// ),