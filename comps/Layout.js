import { makeStyles, Paper } from "@material-ui/core";
import React from "react";
import NavBar from "./NavBar";
// import Image from "../public/background.jpg";

import Image from "next/image";

// const styles = {
//   paperContainer: { backgroundImage: `url(${Image}})` },
// };

export default function Layout({ children }) {
  return (
    <div className="content">
      <NavBar />
      {/* <Paper style={styles.paperContainer}> */}
      {/* </Paper> */}
      {children}
    </div>
  );
}
