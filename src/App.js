import React from 'react'
import { Route, Link } from 'react-router-dom'
import { Grid, Box, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TitleImage from '../static/image/hakodatetarocom.jpeg'
import MenuProfileImage from '../static/image/menu-profile.jpeg'
import MenuHakoratoryImage from '../static/image/menu-hakoratory.jpg'
import ProfileImage from '../static/image/profile_web3.png'
import classNames from 'classnames'

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  pageTitle: {
    [theme.breakpoints.down('xs')]: {
      width: "90%"
    },
    [theme.breakpoints.up('sm')]: {
      width: "60%"
    },
    [theme.breakpoints.up('md')]: {
      width: "50%"
    },
    margin: "auto",
    cursor: "pointer",
  },
  welcome: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "0.9em",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.1em",
    },
  },
  pointer: {
    cursor: "pointer",
  },
  container: {
    [theme.breakpoints.down('xs')]: {
      width: "95%",
    },
    [theme.breakpoints.up('sm')]: {
      width: "80%",
    },
    margin: "auto",
  },
  mainColor: {
    color: "#474a4d",
  },
  subColor: {
    color: "#474a4d",
  },
  subColorLight: {
    color: "#595857"
  },
  mainName: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "1.3em",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "2em",
    },
    fontWeight: "bold",
  },
  mainNameSmall: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "1em",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.2em",
    },
  },
  actualName: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "1.1em",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.8em",
    },
    fontWeight: "bold",
  },
  actualNameSmall: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "0.9em",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.1em",
    },
  },
  subtitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: "1em",
      letterSpacing: "1px",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "1.8em",
      letterSpacing: "4px",
    },
    fontWeight: "bold",

  },
  description: {
    [theme.breakpoints.down('xs')]: {
      letterSpacing: "0.5px",
      fontSize: "0.8em",
    },
    [theme.breakpoints.up('sm')]: {
      letterSpacing: "1.6px",
      fontSize: "1em",
    },
  },
  profileImage: {
    [theme.breakpoints.down('xs')]: {
      width: "80px",
    },
    [theme.breakpoints.up('sm')]: {
      width: "150px",
    },
  }
}))

export default function App(){
  const classes = useStyles()
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Box className={classes.pageTitle} textAlign="center">
            <img src={TitleImage} width="100%" onClick={() => window.location.href = "https://hakoratory.com/"}/>
          <Divider variant="middle"/>
        </Box>
      </Grid>
      <Grid item>
        <Route exact path="/">
          <Box className={classNames(classes.subcolor, classes.welcome)} textAlign="center" mt={2} mb={15}>
            はこだてたろうのホームページへようこそ
          </Box>
          <Box my={10} textAlign="center">
            <Link to="/profile">
                <img src={MenuProfileImage} width="35%"/>
            </Link>
          </Box>
          <Box my={10} className={classes.pointer} textAlign="center">
            <img src={MenuHakoratoryImage} width="50%" onClick={() => window.location.href = "https://lab.hakoratory.com/"}/>
          </Box>
        </Route>
        <Route path="/profile">
          <Grid container jutify="center" alignItems="flex-start" className={classes.container}>
            <Grid item xs={4} sm={5}>
              <Box mt={5} textAlign="center">
                <img src={ProfileImage} className={classes.profileImage}/>
              </Box>
            </Grid>
            <Grid item xs={8} sm={7}>
              <Box mt={5}>
                <Typography component="div">
                  <Box className={classNames(classes.mainColor, classes.mainName)}>
                    はこだてたろう
                  </Box>
                  <Box className={classNames(classes.subColorLight, classes.mainNameSmall)}>
                    hakodatetaro
                  </Box>
                  <Box className={classNames(classes.mainColor, classes.actualName)} mt={1}>
                    中村 陽
                  </Box>
                  <Box className={classNames(classes.subColorLight, classes.actualNameSmall)}>
                    Akira Nakamura
                  </Box>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4} sm={5}>
              <Typography component="div">
                <Box className={classNames(classes.subColor, classes.subtitle)} textAlign="center" mt={5}>
                  SUMMARY
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={8} sm={7}>
              <Typography component="div">
                <Box className={classNames(classes.subColor, classes.description)} mt={5}>
                  音楽やプログラム、アプリを作って解説する人。
                </Box>
                <Box className={classNames(classes.subColor, classes.description)}>
                  音大卒業後、東京の企業で４年間、業務アプリ開発（Java）を行いました。
                </Box>
                <Box className={classNames(classes.subColor, classes.description)}>
                「できる」を増やしていくことが「作りたい！」というモチベーションに繋がると考えています。
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={4} sm={5}>
              <Typography component="div">
                <Box className={classNames(classes.subColor, classes.subtitle)} textAlign="center" mt={5}>
                  SKILLS
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={8} sm={7}>
              <Typography component="div">
                <Box className={classNames(classes.subColor, classes.description)} fontWeight="bold" mt={5}>
                  Programming
                </Box>
                <Box className={classNames(classes.subColor, classes.description)}>
                  Java, Javascript, React.js, VBA
                </Box>
                <Box className={classNames(classes.subColor, classes.description)}>
                  フリーランスとして、企業の新人研修でJavaの指導経験あり
                </Box>
                <Box className={classNames(classes.subColor, classes.description)}>
                  &nbsp;
                </Box>
                <Box className={classNames(classes.subColor, classes.description)} fontWeight="bold">
                  Music
                </Box>
                <Box className={classNames(classes.subColor, classes.description)}>
                  器楽曲の作編曲、歌謡曲やポップスなどの室内楽アレンジ
                  一般吹奏楽団のための編曲経験あり
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Route>
      </Grid>
    </Grid>
  )
}