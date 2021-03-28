import React from 'react'
import '../static/css/styles.css'
import { Route, Link } from 'react-router-dom'
import { Grid, Box, Typography, Divider } from '@material-ui/core'
import Image from '../static/image/profile_web3.png'
import classNames from 'classnames'

export default function App(){
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Box>
          <Typography variant="div">
            <a href="https://hakodatetaro.com/" className={classNames("maincolor","header","link")}>hakodatetaro.com</a>
          </Typography>
          <Divider variant="middle"/>
        </Box>
      </Grid>
      <Grid item>
        <Route exact path="/">
          <Box className={classNames("subcolor","welcome","aligncenter")} mt={2} mb={15}>
            はこだてたろうのホームページへようこそ
          </Box>
          <Link to="/profile" className={classNames("subcolor","menu","link","aligncenter")}>
            <Box my={10}>
              profile
            </Box>
          </Link>
          <Box my={10} className={classNames("menu","aligncenter")}>
            <a href="https://laboratory.hakodatetaro.com/" className={classNames("subcolor","link")}> hakoratory</a>
          </Box>
        </Route>
        <Route path="/profile">
          <Grid container jutify="center" alignItem="center" style={{width: "80%", margin: "auto"}}>
            <Grid item xs={5}>
              <Box mt={5} className="aligncenter">
                <img src={Image} width="150px"/>
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box mt={5}>
                <Typography>
                  <Box className={classNames("maincolor","mainname")}>
                    はこだてたろう
                  </Box>
                  <Box className={classNames("subcolor","mainname-small")}>
                    hakodatetaro
                  </Box>
                  <Box className={classNames("maincolor","actualname")} mt={1}>
                    中村 陽
                  </Box>
                  <Box className={classNames("subcolor","actualname-small")}>
                    Akira Nakamura
                  </Box>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Typography>
                <Box className={classNames("subcolor","aligncenter","subtitle")} mt={5}>
                  SUMMARY
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography>
                <Box className={classNames("subcolor","description")} mt={5}>
                  音楽やプログラム、アプリを作って解説する人。
                </Box>
                <Box className={classNames("subcolor","description")}>
                  音大卒業後、東京の企業で４年間、業務アプリ開発（Java）を行いました。
                </Box>
                <Box className={classNames("subcolor","description")}>
                「できる」を増やしていくことが「作りたい！」というモチベーションに繋がると考えています。
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography>
                <Box className={classNames("subcolor","aligncenter","subtitle")} mt={5}>
                  SKILLS
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography>
                <Box className={classNames("subcolor","description")} fontWeight="bold" mt={5}>
                  Programming
                </Box>
                <Box className={classNames("subcolor","description")}>
                  Java, Javascript, React.js, VBA  
                </Box>
                <Box className={classNames("subcolor","description")}>
                  フリーランスとして、企業の新人研修でJavaの指導経験あり
                </Box>
                <Box className={classNames("subcolor","description")}>
                  &nbsp;
                </Box>
                <Box className={classNames("subcolor","description")} fontWeight="bold">
                  Music
                </Box>
                <Box className={classNames("subcolor","description")}>
                  歌謡曲などの室内楽アレンジ
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </Route>
        <Route path="/hakoratory">
          hakoratory
        </Route>
      </Grid>
    </Grid>
  )
}