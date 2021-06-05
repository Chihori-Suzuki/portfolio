import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import StarIcon from "@material-ui/icons/Star";
import { pink, purple } from "@material-ui/core/colors";
import ContactPage from "../comps/ContactPage";

const useStyle = makeStyles((theme) => {
  return {
    text: {
      color: purple[800],
    },
    box: {
      "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)",
      },
    },
    typography: {
      // marginBottom: 30,
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "50px",
        fontWeight: "500",
      },
    },
    paper: {
      background: "transparent",
      paddingBottom: "5%",
    },
  };
});

export default function About() {
  const classes = useStyle();
  const stars = {
    eval1: (
      <Box>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
      </Box>
    ),
    eval2: (
      <Box>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
      </Box>
    ),
    eval3: (
      <Box>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
      </Box>
    ),
    eval4: (
      <Box>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon color="secondary"></StarIcon>
      </Box>
    ),
    eval5: (
      <Box>
        <StarIcon color="primary"></StarIcon>
        <StarIcon color="primary"></StarIcon>
        <StarIcon color="primary"></StarIcon>
        <StarIcon color="primary"></StarIcon>
        <StarIcon color="primary"></StarIcon>
      </Box>
    ),
  };

  const menuItems = [
    {
      text: "javascript",
      icon: stars.eval4,
    },
    {
      text: "HTML",
      icon: stars.eval4,
    },
    {
      text: "CSS",
      icon: stars.eval4,
    },
    {
      text: "ReactJs",
      icon: stars.eval3,
    },
    {
      text: "Next.js",
      icon: stars.eval3,
    },
    {
      text: "jQuery",
      icon: stars.eval3,
    },
    {
      text: "illustrator",
      icon: stars.eval3,
    },
  ];
  const menuItems1 = [
    {
      text: "Java",
      icon: stars.eval4,
    },
    {
      text: "Visual Basic",
      icon: stars.eval4,
    },
    {
      text: "Swift",
      icon: stars.eval3,
    },
    {
      text: "Objective-C",
      icon: stars.eval2,
    },
    {
      text: "PosgreSQL",
      icon: stars.eval4,
    },
    {
      text: "OracleSQL",
      icon: stars.eval3,
    },
  ];

  return (
    <Container>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid item>
            <Image
              src="/profile.png"
              alt="profile"
              width={150}
              height={150}
              // display="flex"
            />
          </Grid>
          <Grid item xs={12} sm={12} sm container>
            <Grid item>
              <Typography variant="h5">CHIORI SUZUKI</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" word>
                I am a junior programmer with knowledge of front-end techniques.
                <br />I like studying new technology and improving my skills. I
                like working with team and helping others.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={5}>
        <Grid item xs={12} container justify="center">
          <Typography variant="h5">SKILLS</Typography>
        </Grid>
        <Grid item container spacing={10}>
          <Grid item md={6}>
            {menuItems.map((item) => (
              <Box
                className={classes.box}
                key={item.text}
                display="flex"
                flexDirection="row"
              >
                <Box flexGrow={1} mb={1}>
                  <Typography variant="body1" gutterBottom>
                    {item.text}
                  </Typography>
                </Box>
                {item.icon}
              </Box>
            ))}
          </Grid>
          <Grid item md={6}>
            {menuItems1.map((item) => (
              <Box
                className={classes.box}
                key={item.text}
                display="flex"
                flexDirection="row"
              >
                <Box flexGrow={1} mb={1}>
                  <Typography variant="body1" gutterBottom>
                    {item.text}
                  </Typography>
                </Box>
                {item.icon}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
