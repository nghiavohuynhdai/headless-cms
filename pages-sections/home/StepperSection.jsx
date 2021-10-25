import React from "react"
import { makeStyles, StepButton } from "@material-ui/core";
import Button from "../../components/CustomButtons/Button"
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import stepImg from "assets/img/codecademy.png";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const imgWidth = 240
const stepContentPadding = 70
const stepHeight = 135
const textBottom = 25

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  stepperRoot: {
    maxWidth: "1100px",
    margin: "auto"
  },
  stepContentRoot: {
    maxWidth: `(460 + ${imgWidth})px`,
    display: "flex",
    flexDirection: "row",
    paddingLeft: stepContentPadding,
    height: stepHeight,
    "@media (max-width: 750px)": {
      maxWidth: `460px`,
    }
  },
  stepIconContainer: {
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    background: "#eff1fe",
    border: "1px solid #e4e5f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "-18px"
  },
  stepIcon: {
    borderRadius: "50%",
    width: "40px",
    background: "#ffffff"
  },
  image: {
    width: imgWidth,
    position: "relative",
    bottom: "100px"
  },
  labelRoot: {
    textAlign: "start",
    fontWeight: "bold !important",
    fontSize: "40px !important",
  },
  labelText: {
    marginLeft: imgWidth + stepContentPadding - 20,
    fontSize: 32,
    position: "relative",
    bottom: textBottom,
    "@media (max-width: 750px)": {
      marginLeft: stepContentPadding - 40,
    },
  },
  descriptionText: {
    fontWeight: 400,
    lineHeight: "22px",
    fontSize: "18px",
    position: "relative",
    bottom: textBottom
  },
}))

const steps = [
  {
    label: 'Choose what to learn',
    description: `From building websites to analyzing data, the choice is yours. Not sure where to start? We'll point you in the right direction.`,
  },
  {
    label: 'Learn by doing',
    description:
      'No matter your experience level, youll be writing real, working code in minutes.',
  },
  {
    label: 'Get instant feedback',
    description: `Your code is tested as soon as you submit it, so you always know if you're on the right track.`,
  },
  {
    label: 'Put your learning into practice',
    description: `Apply your learning with real-world projects and test your knowledge with tailor-made quizzes.`,
  },
  {
    label: 'Land your dream job',
    description: `Coding skills have never been more in-demand. Learn everything you need to take your career to the next level.`,
  },

];

const StepIconComponent = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.stepIconContainer}>
      <Button
        round
        justIcon
        color="secondary"
      >{props.step + 1}</Button>
    </div>
  )
}

function StepperSection(props) {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:750px)');

  return (
    <div className={classes.container}>
      <Stepper classes={{
        root: classes.stepperRoot
      }} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} active={true}>
            <StepLabel
              StepIconComponent={() => <StepIconComponent step={index} />}
              classes={{
                root: classes.labelRoot
              }}
            >
              <div className={classes.labelText}>{step.label}</div>
            </StepLabel>
            <StepContent classes={{
              root: classes.stepContentRoot,

            }}>
              <div style={{ display: "flex", columnGap: "20px" }}>
                {matches && <img className={classes.image} src={stepImg} alt="Image of step" />}
                <Typography className={classes.descriptionText}>{step.description}</Typography>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}


export default StepperSection;
