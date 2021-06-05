import {
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import WorkCards from "../comps/WorkCards";
import ContactPage from "../comps/ContactPage";
import About from "../comps/About";
import { motion } from "framer-motion";
import { works } from "../data/data";
import NavBar from "../comps/NavBar";

const useStyle = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
    top: {
      marginTop: "10%",
      marginBottom: "30%",
      textAlign: "center",
    },
    card: {
      color: "secondary",
    },
    typography: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        fontWeight: "300",
        color: "#EFC2FF",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "60px",
        fontWeight: "400",
        color: "#EFC2FF",
      },
    },
    typography1: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        fontWeight: "300",
        color: "#FFFFFF",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "25px",
        fontWeight: "400",
        color: "#FFFFFF",
      },
    },
    typography2: {
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        fontWeight: "300",
        color: "#590477",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "60px",
        fontWeight: "400",
        color: "#590477",
      },
      padding: "5%",
    },
    grid: {
      margin: 30,
    },

    paper: {
      display: "flex",
      backgroundColor: "#FFFFFF",
      // marginBottom: 0,
      marginLeft: "calc(((100vw - 100%) / 2) * -1)",
      marginRight: "calc(((100vw - 100%) / 2) * -1)",
      paddingLeft: "20%",
      paddingRight: "20%",
      paddingBottom: "10%",
      borderRadius: 0,
    },
    paper2: {
      display: "flex",
      backgroundColor: "#F1E7FF",
      marginLeft: "calc(((100vw - 100%) / 2) * -1)",
      marginRight: "calc(((100vw - 100%) / 2) * -1)",
      paddingLeft: "20%",
      paddingRight: "20%",
      paddingBottom: "10%",
      borderRadius: 0,
    },

    backpaper: {
      display: "fixed",
      padding: "5%",
      background: "rgba(61, 5, 96, 0.6)",
    },
  };
});

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, transform: "translate(0, 50px)" },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Home() {
  const classes = useStyle();

  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Paper className={classes.backpaper}>
        <NavBar />
        {/* main */}
        <Container className={classes.top}>
          <h2 className={classes.typography} id="top" color="primary">
            CHIORI SUZUKI
          </h2>
          <h5 className={classes.typography1} color="secondary">
            Front-end developper
          </h5>

          <Typography variant="h6"></Typography>
        </Container>
        {/* Works */}
        <Paper className={classes.paper}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h2 className={classes.typography2} id="work">
              WORKS
            </h2>
            <Grid container spacing={8}>
              {works.map((work) => (
                <Grid item key={work.id} xs={12} md={12} lg={6}>
                  <WorkCards className={classes.card} work={work} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Paper>
        {/* About */}
        <Paper className={classes.paper2}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <h2 className={classes.typography2} id="about">
              ABOUT
            </h2>
            <About></About>
          </Grid>
        </Paper>
        {/* Contact */}

        <Grid container direction="column">
          <Grid container justify="center">
            <h2 className={classes.typography} id="contact">
              CONTACT
            </h2>
          </Grid>
          <Grid container justify="center">
            <ContactPage></ContactPage>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
}
