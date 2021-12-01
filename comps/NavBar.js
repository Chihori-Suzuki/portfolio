import Image from "next/image";
import { AppBar, makeStyles, Toolbar, Grid } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";

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
    textColor: {
      "&:hover": {
        background: "linear-gradient(to right bottom, #9BA8FC, #F2BEE4)",
      },
      marginLeft: 15,
      padding: "1%",
      color: "white",
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "20px",
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
        <Grid container justify="flex-end">
          <Link
            className={classes.textColor}
            to="work"
            smooth={true}
            offset={-70}
            duration={500}
          >
            WORKS
          </Link>
          <Link
            className={classes.textColor}
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
          >
            ABOUT
          </Link>
          <Link
            className={classes.textColor}
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
          >
            CONTACTS
          </Link>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
