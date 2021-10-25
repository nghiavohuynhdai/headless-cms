import React from 'react'
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link'

const useStyles = makeStyles({
  testContainer: {
    marginTop: "100px"
  },
  testFormatCard: {
    height: "300px",
    boxShadow: "none",
    border: "1px solid #000000",
    transition: "box-shadow 200ms ease, transform 200ms ease",
    '&:hover': {
      transform: "translate(-0.75rem, -0.25rem)",
      boxShadow: "8px 8px 0 !important",
    }
  },
  title: {
    fontSize: 20,
    fontWeight: 600
  },
  content: {
    fontSize: "15px",
    marginTop: "50px",
    textTransform: "none"
  },
  button: {
    width: "140px",
    border: "1px solid black"
  },
  buttonContainer: {
    marginLeft: "70px"
  }
});

export default function TestFormat() {
  const classes = useStyles()
  return (
    <>
      <Grid container className={classes.testContainer} direction="row" spacing={5}>
        <Grid item xs={6}>
          <Link href="/practice-trial/speaking">
            <Card className={classes.testFormatCard} style={{backgroundColor: `white`}}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid xs={9} className={classes.title}>
                      SPEAKING
                    </Grid>
                    <Grid xs={3}>
                      <img src="https://www.ptemagicpractice.com/static/media/skill-writing.cddc44cf.svg" alt="" width={50}/>
                    </Grid>
                  </Grid>
                  <Grid className={classes.content}>

                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="/practice-trial/writing">
            <Card className={classes.testFormatCard} style={{backgroundColor: `white`}}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid xs={9} className={classes.title}>
                      WRITING
                    </Grid>
                    <Grid xs={3}>
                      <img src="https://www.ptemagicpractice.com/static/media/skill-writing.cddc44cf.svg" alt="" width={50}/>
                    </Grid>
                  </Grid>
                  <Grid className={classes.content}>

                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="/practice-trial/reading">
            <Card className={classes.testFormatCard} style={{backgroundColor: `white`}}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid xs={9} className={classes.title}>
                      READING
                    </Grid>
                    <Grid xs={3}>
                      <img src="https://www.ptemagicpractice.com/static/media/skill-writing.cddc44cf.svg" alt="" width={50}/>
                    </Grid>
                  </Grid>
                  <Grid className={classes.content}>

                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Link href="/practice-trial/listening">
            <Card className={classes.testFormatCard} style={{backgroundColor: `white`}}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid xs={9} className={classes.title}>
                      LISTENING
                    </Grid>
                    <Grid xs={3}>
                      <img src="https://www.ptemagicpractice.com/static/media/skill-writing.cddc44cf.svg" alt="" width={50}/>
                    </Grid>
                  </Grid>
                  <Grid className={classes.content}>

                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </>
  )
}