import AnchorLink from "react-anchor-link-smooth-scroll";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
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
      marginLeft: 10,
      marginTop: 10,
    },
    logo: {
      flexGrow: 1,
    },
    button: {
      margin: 10,
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
        <Button className={classes.button} variant="contained" color="primary">
          {/* <AnchorLink href="#works"> */}
          <Typography>WORKS</Typography>
          {/* </AnchorLink> */}
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          <Typography>SKILLS</Typography>
        </Button>
        <Button className={classes.button} variant="contained" color="primary">
          <Typography>CONTACTS</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
