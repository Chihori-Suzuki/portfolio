import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useEffect, useState } from "react";
import WorkCards from "../comps/WorkCards";
import ContactPage from "../comps/ContactPage";
import About from "../comps/About";
import { motion } from "framer-motion";

const useStyle = makeStyles((theme) => {
  return {
    toolbar: theme.mixins.toolbar,
    top: {
      marginTop: "25%",
      marginBottom: "25%",
      textAlign: "center",
    },
    card: {
      color: "secondary",
    },
    typography: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "50px",
        fontWeight: "350",
      },
    },
    typography1: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
        fontWeight: "400",
      },
    },
    grid: {
      margin: 30,
    },
  };
});

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5, transform: "translate(0, 50px)" },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Home() {
  // const [works, setWorks] = useState([]);
  const classes = useStyle();

  // useEffect(() => {
  //   fetch("https://portfolio.chiori.tech/works")
  //     .then((res) => res.json())
  //     .then((data) => setWorks(data));
  // }, []);

  const works = [
    {
      title: "Calorie and recipe",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "iOS",
      id: 1,
      image: "flower1.jpg",
      language: "Swift",
      link: "https://github.com/Chihori-Suzuki/Recipe-and-Calorie-Manager-App",
    },
    {
      title: "something project 2",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      category: "sss",
      id: 2,
      image: "view1.jpg",
      language: "Javascript",
      link: "https://github.com/Chihori-Suzuki",
    },
    {
      title: "something project 3",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "sss",
      id: 3,
      image: "flower2.jpg",
      language: "Swift",
      link: "https://github.com/Chihori-Suzuki",
    },
    {
      title: "Portfolio",
      details: "making portfolio",
      category: "sss",
      id: 4,
      image: "view2.jpg",
      language: "Swift",
      link: "https://github.com/Chihori-Suzuki",
    },
  ];
  return (
    <motion.div
      className="base container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* main */}
      <Container className={classes.top}>
        <Typography className={classes.typography} id="top" color="primary">
          Chiori Suzuki
        </Typography>
        <Typography className={classes.typography1} color="secondary">
          Web developer
        </Typography>
        <Typography variant="h6"></Typography>
      </Container>
      {/* Works */}
      <Box ml="3%" my="5%">
        <Typography className={classes.typography} id="work" color="primary">
          WORKS
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {works.map((work) => (
          <Grid item key={work.id} xs={12} md={12} lg={6}>
            <WorkCards className={classes.card} work={work} />
          </Grid>
        ))}
      </Grid>
      {/* About */}
      <About></About>
      {/* Contact */}
      <ContactPage></ContactPage>
    </motion.div>
  );
}
