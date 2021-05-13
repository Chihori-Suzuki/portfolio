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

const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    toolbar: theme.mixins.toolbar,
    paper: {
      color: "secondary",
      opacity: 0.5,
      marginLeft: 50,
      marginRight: 50,
      // backgroundColor: "transparent",
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
          <Typography variant="h2" color="primary">
            WORKS
          </Typography>
        </Box>
        <Grid container spacing={3} mx={5}>
          {works.map((work) => (
            <Grid item key={work.id} xs={12} md={6} lg={4}>
              <WorkCards work={work} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
}
