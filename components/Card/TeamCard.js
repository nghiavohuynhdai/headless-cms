import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CardBody from "./CardBody";
import Card from "./Card";
import Button from "../CustomButtons/Button";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle";
import GridItem from "../Grid/GridItem";


export default function TeamCard(props) {
  const {name, img, facebook, linkedIn} = props

  const style = theme => ({
    ...teamsStyle,

  });



  const useStyles = makeStyles(style);
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={6} md={3}>
    <Card plain profile>
      <CardHeader image plain>
        <a href="#pablo" onClick={e => e.preventDefault()}>
          <img src={img} alt="..." />
        </a>

      </CardHeader>
      <CardBody plain>
        <h4 className={classes.cardTitle}>{name}</h4>
      </CardBody>
      <CardFooter profile plain className={classes.justifyContent}>
        { facebook &&
          <Button justIcon round color="facebook">
            <i className="fab fa-facebook-square"/>
          </Button>
        }
        { linkedIn &&
          <Button justIcon round color="linkedin">
            <i className="fab fa-linkedin"/>
          </Button>
        }
      </CardFooter>
    </Card>
    </GridItem>




  )
}