import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
// import Image from "../public/background.jpg";
import { motion } from "framer-motion";

import Image from "next/image";

// const styles = {
//   paperContainer: { backgroundImage: `url(${Image}})` },
// };

const useStyle = makeStyles(() => {
  return {
    paper: {
      display: "fixed",
      color: "secondary",
      opacity: 0.7,
      marginLeft: "10%",
      marginRight: "10%",
      padding: "5%",
      // backgroundColor: "transparent",
    },
  };
});

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Layout({ children }) {
  const classes = useStyle();
  return (
    <motion.div
      className="template"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <NavBar />
      <Paper className={classes.paper}>
        {/* <Paper style={styles.paperContainer}> */}
        {/* </Paper> */}
        {children}
      </Paper>
    </motion.div>
  );
}
