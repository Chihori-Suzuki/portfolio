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
import WorkCards from "../comps/WorkCards";
import Image from "next/image";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    paper: {
      color: "secondary",
      opacity: 0.75,
      marginLeft: 70,
      marginRight: 70,
      // backgroundColor: "transparent",
    },
    card: {
      color: "secondary",
    },
    typography: {
      marginBottom: 30,
    },
  };
});
export default function Home() {
  const [works, setWorks] = useState([]);
  const classes = useStyle();
  useEffect(() => {
    fetch("http://localhost:8001/works")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <div className={classes.toolbar}>
      <Paper className={classes.paper}>
        <Box py={20} mx={15}>
          <Typography variant="h2" color="primary">
            Chiori Suzuki
          </Typography>
        </Box>
        <Box ml={5} my={10}>
          <Typography id="work" variant="h2" color="primary">
            WORKS
          </Typography>
        </Box>
        <Grid container spacing={3} mx={5}>
          {works.map((work) => (
            <Grid item key={work.id} xs={12} md={6} lg={4}>
              <WorkCards className={classes.card} work={work} />
            </Grid>
          ))}
        </Grid>
        <Box ml={5} my={5}>
          <Typography id="about" variant="h2" color="primary">
            ABOUT
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item>
            <Container>
              <Image src="/about.jpg" alt="profile" width={260} height={323} />
              <Typography variant="body1">Chiori Suzuki</Typography>
              <Typography variant="body2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.{" "}
              </Typography>
            </Container>
          </Grid>
          <Grid item>
            <Container>
              <Typography className={classes.typography} variant="h5">
                Java
              </Typography>
              <Typography className={classes.typography} variant="h5">
                Java
              </Typography>
              <Typography className={classes.typography} variant="h5">
                Swift
              </Typography>
              <Typography className={classes.typography} variant="h5">
                React
              </Typography>
              <Typography className={classes.typography} variant="h5">
                Javascript
              </Typography>
              <Typography className={classes.typography} variant="h5">
                illustrator
              </Typography>
            </Container>
          </Grid>
        </Grid>
        <Box ml={5} my={10}>
          <Typography
            className={classes.typography}
            id="contact"
            variant="h2"
            color="primary"
          >
            CONTACT
          </Typography>
          <Typography variant="h5">feel free ro contact me</Typography>
          <Grid>
            <Grid item>
              <InstagramIcon>
                <Typography href="https://www.instagram.com/">click</Typography>
              </InstagramIcon>
              <EmailIcon></EmailIcon>
              <GitHubIcon></GitHubIcon>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
