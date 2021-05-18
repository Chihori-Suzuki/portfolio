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
      {/* <Paper className={classes.paper}> */}
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
      <Grid container spacing={3}>
        {works.map((work) => (
          <Grid item key={work.id} xs={12} md={6} lg={6}>
            <WorkCards className={classes.card} work={work} />
          </Grid>
        ))}
      </Grid>

      {/* About */}
      <About></About>

      {/* Contact */}
      <ContactPage></ContactPage>
      {/* </Paper> */}
    </div>
  );
}
