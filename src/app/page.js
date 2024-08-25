"use client";
import Head from "next/head";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

import styles from "../app/page.module.css";

const websites = [
  {
    name: "StreamEast",
    url: "https://streameast.app/v2",
    image:
      "https://play-lh.googleusercontent.com/1p2f_JSYBijH0bSmFPIXh4Erzy0rhFN-cCh01TY7UwmiXk2T4ptTvrVTAvi6Wv0wiHQ=w526-h296-rw",
    alt: "StreamEast",
  },
  {
    name: "TinyZoneTV",
    url: "https://tinyzonetv.se/home",
    image: "https://tinyzonetv.se/images/group_2/theme_1/logo.png?v=0.1",
    alt: "TinyZoneTV",
  },
  {
    name: "RBTV77",
    url: "https://www.rbtv77.com/others.html",
    image:
      "https://images.dwncdn.net/images/t_app-icon-l/p/b74d0254-cc5d-4d9d-af27-df1102d308f8/867703141/rbtv77-live-streaming-logo",
    alt: "RBTV77",
  },
  {
    name: "CrackStreams",
    url: "https://meth.crackstreams.biz/",
    image: "https://meth.crackstreams.biz/img/logo.png",
    alt: "CrackStreams",
  },
  {
    name: "HDToday",
    url: "https://hdtodayz.to/home",
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple112/v4/ca/07/3f/ca073f5e-d83c-f570-1a15-8543fa8546f2/AppIcon-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
    alt: "HDToday",
  },
  {
    name: "HiMovies",
    url: "https://himovies.sx/home",
    image: "https://himovies.sx/images/group_1/theme_1/logo.png?v=0.1",
    alt: "HiMovies",
  },
  {
    name: "123Movies",
    url: "https://ww4.123moviesfree.net/home/",
    image:
      "https://play-lh.googleusercontent.com/iJEF7ShDdA2_13fK_2eEQ59SwwQI6S6atrkP1o0zWZTEd5axh35pSxwylaGNmStd_A",
    alt: "123Movies",
  },
  {
    name: "SportSurge",
    url: "https://v2.sportsurge.net/home4/",
    image:
      "https://play-lh.googleusercontent.com/Hk7hEEZgmiUvzYBjgcvRnvFFkUKedvYH-LtrXA2JuEeF4rfcYZu2EFvebiDj192bzw",
    alt: "SportSurge",
  },
  {
    name: "MyFlixer",
    url: "https://myflixerz.to/home",
    image:
      "https://pbs.twimg.com/profile_images/1516392595567833092/-luvk0SL_400x400.jpg",
    alt: "MyFlixer",
  },
  {
    name: "MethStreams",
    url: "https://methstreams.com/index7/",
    image:
      "https://m.media-amazon.com/images/S/dmp-catalog-images-prod/images/e006709b-6578-460e-9bce-675fd3f4f4f7/9dd5d06a-c648-451a-9504-f5d346e46578-977871317._SX192_SY192_BL0_QL100__UXNaN_FMjpg_QL85_.jpg",
    alt: "MethStreams",
  },
  {
    name: "TotalSportek",
    url: "https://www.totalsportek.to/",
    image:
      "https://play-lh.googleusercontent.com/ERWQptSUHs4zy_78-V58fTxrz29Kcs3EyJ_iBKnN7ghGLozdVQvZidYUxpXVB93-XQY",
    alt: "TotalSportek",
  },
];

function WebsiteCard({ website }) {
  return (
    <Grid item xs={6}>
      <Card sx={{ width: 1 }}>
        <CardActionArea onClick={() => window.open(website.url, "_blank")}>
          <CardMedia
            component="img"
            height="140"
            image={website.image}
            alt={website.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {website.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Directorio de Websites</title>
        <meta
          name="description"
          content="Directorio de Websites de peliculas y juegos en vivo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Directorio de Websites de peliculas y juegos en vivo
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 10 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {websites.map((website) => (
            <WebsiteCard key={website.name} website={website} />
          ))}
        </Grid>
      </Box>
    </div>
  );
}
