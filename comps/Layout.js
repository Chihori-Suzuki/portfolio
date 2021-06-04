import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
import { motion } from "framer-motion";

import Image from "next/image";

const useStyle = makeStyles(() => {
  return {
    paper: {
      display: "fixed",
      padding: "5%",
      background: "rgba(61, 5, 96, 0.6)",
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyle();
  return (
    <Paper className={classes.paper}>
      <NavBar />
      {children}
    </Paper>
  );
}
