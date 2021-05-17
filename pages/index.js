import {
  Box,
  Container,
  Grid,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
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
import StarIcon from "@material-ui/icons/Star";
import { pink, purple } from "@material-ui/core/colors";

const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    top: {
      marginTop: "25%",
      marginBottom: "25%",
      textAlign: "center",
    },
    paper: {
      display: "fixed",
      color: "secondary",
      opacity: 0.7,
      marginLeft: "10%",
      marginRight: "10%",
      padding: "5%",
      // backgroundColor: "transparent",
    },
    card: {
      color: "secondary",
    },
    typography: {
      marginBottom: 30,
    },
    text: {
      color: purple[800],
    },
    grid: {
      margin: 30,
    },
  };
});
export default function Home() {
  const [works, setWorks] = useState([]);
  const classes = useStyle();

  const stars = [
    {
      eval1: (
        <Container>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
        </Container>
      ),
    },
    {
      eval2: (
        <Container>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
        </Container>
      ),
    },
    {
      eval3: (
        <Container>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
        </Container>
      ),
    },
    {
      eval4: (
        <Container>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="secondary"></StarIcon>
        </Container>
      ),
    },
    {
      eval5: (
        <Container>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
          <StarIcon color="primary"></StarIcon>
        </Container>
      ),
    },
  ];

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

  useEffect(() => {
    fetch("http://localhost:8001/works")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/* main */}
        <Container className={classes.top}>
          <Typography id="top" variant="h2" color="primary">
            Chiori Suzuki
          </Typography>
          <Typography variant="h6"></Typography>
        </Container>

        {/* Works */}
        <Box ml={5} my={10}>
          <Typography id="work" variant="h2" color="primary">
            WORKS
          </Typography>
        </Box>
        <Grid container spacing={3} mx={6}>
          {works.map((work) => (
            <Grid item key={work.id} xs={12} md={6} lg={3}>
              <WorkCards className={classes.card} work={work} />
            </Grid>
          ))}
        </Grid>

        {/* About */}
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
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book..{" "}
            </Typography>
          </Grid>
          {/* {menuItems.map((item) => (
            <Grid item key={item.text} md={6}>
              <Typography>{item.text} </Typography>
              <dev>{item.icon}</dev>
            </Grid>
          ))} */}
          <Grid item md={6}>
            <Box display="flex" flexDirection="row">
              <Box flexGrow={1} mb={1}>
                <Typography variant="body1" gutterBottom>
                  Jave
                </Typography>
              </Box>
              <Box>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon color="secondary"></StarIcon>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box flexGrow={1} mb={1}>
                <Typography gutterBottom>VB.NET</Typography>
              </Box>
              <Box>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon color="secondary"></StarIcon>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box flexGrow={1} mb={1}>
                <Typography gutterBottom>Swift</Typography>
              </Box>
              <Box>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon color="secondary"></StarIcon>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box flexGrow={1} mb={1}>
                <Typography gutterBottom>ObjectiveC</Typography>
              </Box>
              <Box>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon color="secondary"></StarIcon>
                <StarIcon color="secondary"></StarIcon>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box flexGrow={1} mb={1}>
                <Typography gutterBottom>React</Typography>
              </Box>
              <Box>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon color="secondary"></StarIcon>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row">
              <Box flexGrow={1} mb={1}>
                <Typography gutterBottom>illustrator</Typography>
              </Box>
              <Box>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon className={classes.text}></StarIcon>
                <StarIcon color="secondary"></StarIcon>
                <StarIcon color="secondary"></StarIcon>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Contact */}
        <Box ml={5} my={10}>
          <Typography
            className={classes.typography}
            id="contact"
            variant="h2"
            color="primary"
          >
            CONTACT
          </Typography>
          <Typography variant="h5">feel free to contact me</Typography>
          <Grid className={classes.grid}>
            <Grid item>
              <IconButton
                href="https://www.instagram.com/chihhorin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon style={{ fontSize: 40 }}></InstagramIcon>
              </IconButton>
              <IconButton
                href="https://github.com/Chihori-Suzuki"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon style={{ fontSize: 40 }}></GitHubIcon>
              </IconButton>
              <IconButton href="mailto:suzuki4254545@gmail.com" target="_top">
                <EmailIcon style={{ fontSize: 40 }}></EmailIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </div>
  );
}
