import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import blogsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/blogsStyle";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import ScrollAnimation from "react-animate-on-scroll";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import demo1 from "assets/img/demo1.png";
import demo2 from "assets/img/demo2.png";
import demo3 from "assets/img/demo3.png";
import React from "react";

export default function ThirdSection(props) {
  const styles = theme => ({
    ...teamsStyle,
    ...blogsStyle,
    emoji: {
      display: "inline !important",
      border: "none !important",
      boxShadow: "none !important",
      height: "1em !important",
      width: "1em !important",
      margin: "0 .07em !important",
      verticalAlign: "-.1em !important",
      background: "0 0 !important",
      padding: "0 !important",
    },
    cardChat: {
      margin: "90px 0"
    }
  })
  const useStyles = makeStyles(styles);

  const classes = useStyles()


  return (
    <div className={classes.team} >
      <div className={classes.container}>
        <GridContainer className={classes.cardChat}>
          <GridItem xs={12} md={7}>
            <div className="chat_features_img">
              <div className="elementor-repeater-item">
                <img src={require("assets/img/home/dot.png")} alt="dot" />
              </div>
              <div className="elementor-repeater-item">
                <ScrollAnimation animateIn='flipInY' animateOut='flipOutY'>
                  <img src={require("assets/img/home/Untitled-design-19.png")} alt="" />
                </ScrollAnimation>
              </div>
              <div className="elementor-repeater-item">
                <ScrollAnimation animateIn="fadeIn">
                  <img src={require("assets/img/home/Untitled-design-20.png")} alt="" />
                </ScrollAnimation>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} md={5}>
            <img src={require("assets/img/home/magic-icon-1.png")} alt="" />
            <h3 className={classes.cardTitle}>
              Real Time Speaking Scoring <img draggable="false" role="img" className={classes.emoji} alt="🔥" src="https://s.w.org/images/core/emoji/13.0.1/svg/1f525.svg" />
            </h3>
            <p>
              Highly accurate real-time tool is designed to simulate the actual testing score for <b>PTE
                Speaking</b> including <b> Read Aloud</b> and <b>Repeat Sentence</b>. The study tool is built by a team
                of experienced <b>PTE trainers</b>.
              </p>
          </GridItem>
        </GridContainer>

        <GridContainer className={classes.cardChat}>
          <GridItem xs={12} md={4}>
            <img src={require("assets/img/home/magic-icon-2.png")} alt="" />
            <h3 className={classes.cardTitle}>
              Score Card Report with details <img draggable="false" role="img" className={classes.emoji} alt="💯"
                src="https://s.w.org/images/core/emoji/13.0.1/svg/1f4af.svg" />
            </h3>
            <p>
              A score report will be automatically generated after each exam attempt which clearly displays
              communicative, enabling as well as the overall score, thus help users identify strengths and tackle
                weaknesses. This mock exam’s structure is similar to the actual pte test. </p>
          </GridItem>
          <GridItem xs={12} md={8}>
            <div className="chat_features_img">
              <div className="elementor-repeater-item"><img src={require("assets/img/home/dot.png")} alt="" /></div>
              <div className="elementor-repeater-item">
                <ScrollAnimation animateIn="fadeIn">
                  <img src={require("assets/img/home/Copy-of-Copy-of-PTE-MAGIC-SCORE-REPORT-1.png")} alt="" />
                </ScrollAnimation>
              </div>
              <div className="elementor-repeater-item">
                <ScrollAnimation animateIn="fadeIn">
                  <img src={require("assets/img/home/Copy-of-Copy-of-Copy-of-PTE-MAGIC-SCORE-REPORT.png")} alt="" />
                </ScrollAnimation>
              </div>
            </div>
          </GridItem>
        </GridContainer>

        <GridContainer className={classes.cardChat}>
          <GridItem xs={12} md={8}>
            <div className="chat_features_img">
              <div className="elementor-repeater-item">
                <img src={require("assets/img/home/dot.png")} alt="" />
              </div>
              <div className="elementor-repeater-item">
                <ScrollAnimation animateIn="fadeInUp">
                  <img src={require("assets/img/home/pte-magic-homepage-repeated-questions.png")} alt="" />
                </ScrollAnimation>
              </div>
            </div>
          </GridItem>
          <GridItem xs={12} md={4}>
            <img src={require("assets/img/home/magic-icon-3.png")} alt="" />
            <h3 className={classes.cardTitle}>
              New Repeated Questions <img draggable="false" role="img" className={classes.emoji} alt="❤️"
                src="https://s.w.org/images/core/emoji/13.0.1/svg/2764.svg" />
            </h3>
            <p>
              Users will find the most recent <b>repeated questions</b> which have been verified and
                have <b>80%</b> to <b>100%</b> frequency of repetition in the actual exams.
              </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>

  )
}
