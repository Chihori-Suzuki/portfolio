import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { Link } from "@material-ui/core";
import { AppBar, Box, makeStyles, Toolbar, Button } from "@material-ui/core";
import { AnimatePresence, motion } from "framer-motion";

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      width: "auto",
      marginLeft: "10%",
      marginRight: "9%",
      marginTop: "3%",
    },
    logo: {
      flexGrow: 1,
    },
    link: {
      color: "white",
      background: "linear-gradient(to right bottom, #430089, #fc9dff)",
      marginLeft: 15,
      padding: 10,
      "&:hover": {
        background: "linear-gradient(to right bottom, #9BA8FC, #F2BEE4)",
      },
    },
    textColor: {
      color: "white",
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "15px",
      },
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
          <Button href="/">
            <Image src="/cat_icon.png" alt="site logo" width={77} height={77} />
          </Button>{" "}
        </div>
        <Button
          className={classes.link}
          activeClass="active"
          offset={-70}
          duration={500}
        >
          <Link className={classes.textColor} href="/#work">
            WORKS
          </Link>
        </Button>
        <Button
          className={classes.link}
          activeClass="active"
          offset={-70}
          duration={500}
        >
          <Link className={classes.textColor} href="/#about">
            ABOUT
          </Link>
        </Button>
        <Button
          className={classes.link}
          activeClass="active"
          offset={-70}
          duration={500}
        >
          <Link className={classes.textColor} href="/#contact">
            CONTACTS
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
