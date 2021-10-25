import React from 'react'
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography';
import GrainIcon from '@material-ui/icons/Grain';
import Link from '@material-ui/core/Link';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreateIcon from '@material-ui/icons/Create';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import MicIcon from '@material-ui/icons/Mic';

const useStyles = makeStyles({
  testContainer: {
    marginTop: "100px",
    marginLeft: "300px"
  },
  title: {
    position: "relative",
    top: "-4px"
  },
  icon: {
    width: 24,
    height: 24
  }
});

export default function BreadCrumb(props) {
  const {
    title,
    category
  } = props
  const classes = useStyles()
  let [url, setUrl] = React.useState()
  React.useEffect(() => {
    if (title && category) {
      setUrl(`/practice-trial/${title.toLowerCase()}/${category.toLowerCase()}`)
    } else if (title && !category) {
      setUrl(`/practice-trial/${title.toLowerCase()}`)
    }
  }, [title, category])
  return (
    <>
      <Grid container className={classes.testContainer} direction="row" spacing={5}>
        <Grid item xs={6}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/">
              <div>
                <HomeIcon className={classes.icon} />
                <span className={classes.title}>
                  Home
                </span>
              </div>
            </Link>
            <Link href={url}>
              <div>
                {title === 'Reading' && <MenuBookIcon className={classes.icon}/>}
                {title === 'Speaking' && <MicIcon className={classes.icon} />}
                {title === 'Writing' && <CreateIcon className={classes.icon} />}
                {title === 'Listening' && <HeadsetMicIcon className={classes.icon} />}
                <span className={classes.title}>
                  {title}
                </span>
              </div>
            </Link>
            {category && (
              <Typography color="textPrimary" className={classes.link}>
                <GrainIcon className={classes.icon} />
                <span className={classes.title}>
                {category}
              </span>
              </Typography>
            )}
          </Breadcrumbs>
        </Grid>
      </Grid>
    </>
  )
}