import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
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
    grid: {
      margin: 30,
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
      text: "Java",
      icon: stars.eval4,
    },
    {
      text: "VB.NET",
      icon: stars.eval4,
    },
    {
      text: "Objective-C",
      icon: stars.eval2,
    },
    {
      text: "Swift",
      icon: stars.eval3,
    },
    {
      text: "React",
      icon: stars.eval4,
    },
    {
      text: "illustrator",
      icon: stars.eval3,
    },
  ];

  return (
    <div>
      <Box ml={5} my={5}>
        <Typography id="about" variant="h2" color="primary">
          ABOUT
        </Typography>
      </Box>
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Image
            src="/about.jpg"
            alt="profile"
            width={260}
            height={323}
            display="flex"
          />
          <Typography variant="body1">Chiori Suzuki</Typography>
          <Typography>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book..{" "}
          </Typography>
        </Grid>
        <Grid item md={6}>
          {menuItems.map((item) => (
            <Box key={item.text} display="flex" flexDirection="row">
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
    </div>
  );
}
