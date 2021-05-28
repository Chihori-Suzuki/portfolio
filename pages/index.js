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
export default function Home() {
  const [works, setWorks] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    fetch("http://localhost:8001/works")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <div>
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
    </div>
  );
}
