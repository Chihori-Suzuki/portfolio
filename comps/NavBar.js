import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

import { AppBar, Box, makeStyles, Toolbar, Button } from "@material-ui/core";

const useStyles = makeStyles(() => {
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
        {/* <Box className={classes.box}> */}
        <Button
          className={classes.link}
          activeClass="active"
          component={Link}
          to="work"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Typography>WORKS</Typography>
        </Button>
        {/* </Box> */}
        <Button
          className={classes.link}
          activeClass="active"
          component={Link}
          to="about"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Typography>ABOUT</Typography>
        </Button>
        <Button
          className={classes.link}
          activeClass="active"
          component={Link}
          to="contact"
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Typography>CONTACTS</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
