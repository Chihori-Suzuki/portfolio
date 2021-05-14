import AnchorLink from "react-anchor-link-smooth-scroll";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  responsiveFontSizes,
  Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      marginLeft: 30,
      marginRight: 30,
      marginTop: 10,
    },
    logo: {
      flexGrow: 1,
    },
    link: {
      marginLeft: 20,
      color: "white",
    },
    box: {
      borderRadius: 5,
      boxShadow: 3,
      background: "linear-gradient(to right bottom, #430089, #fc9dff)",
      marginLeft: 10,
    },
  };
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.appBar}
      position="static"
      elevation={0}
      style={{ background: "transparent" }}
    >
      <Toolbar>
        <div className={classes.logo}>
          <Image src="/cat_icon.png" alt="site logo" width={77} height={77} />
        </div>
        <Box className={classes.box}>
          <Link
            className={classes.link}
            // variant="contained"
            activeClass="active"
            to="work"
            smooth={true}
            offset={-70}
            duration={500}
          >
            {/* <AnchorLink href="#works"> */}
            <Typography>WORKS</Typography>
            {/* </AnchorLink> */}
          </Link>
        </Box>
        <Box className={classes.box}>
          <Link
            className={classes.link}
            activeClass="active"
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography>ABOUT</Typography>
          </Link>
        </Box>
        <Box className={classes.box}>
          <Link
            className={classes.link}
            activeClass="active"
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Typography>CONTACTS</Typography>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
