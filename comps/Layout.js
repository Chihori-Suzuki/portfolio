import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
// import Image from "../public/background.jpg";

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

export default function Layout({ children }) {
  const classes = useStyle();
  return (
    <div className="content">
      <NavBar />
      <Paper className={classes.paper}>
        {/* <Paper style={styles.paperContainer}> */}
        {/* </Paper> */}
        {children}
      </Paper>
    </div>
  );
}
