import Image from "next/image"
import { styled } from "@mui/material/styles"
import { AppBar, Toolbar, Grid } from "@mui/material"
import { Link, animateScroll as scroll } from "react-scroll"

const PREFIX = "NavBar"

const classes = {
  appBar: `${PREFIX}-appBar`,
  logo: `${PREFIX}-logo`,
  textColor: `${PREFIX}-textColor`,
}

const StyledAppBar = styled(AppBar)(({ theme }) => {
  return {
    [`&.${classes.appBar}`]: {
      width: "auto",
      marginLeft: "10%",
      marginRight: "9%",
      marginTop: "3%",
    },
    [`& .${classes.logo}`]: {
      flexGrow: 1,
    },
    [`& .${classes.textColor}`]: {
      "&:hover": {
        background: "linear-gradient(to right bottom, #9BA8FC, #F2BEE4)",
      },
      marginLeft: 15,
      padding: "1%",
      color: "white",
      [theme.breakpoints.down("md")]: {
        fontSize: "10px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "20px",
      },
      cursor: "pointer",
    },
  }
})

export default function Navbar() {
  return (
    <StyledAppBar
      className={classes.appBar}
      position="static"
      elevation={0}
      style={{ background: "transparent" }}
    >
      <Toolbar>
        <Grid container justifyContent="flex-end">
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
    </StyledAppBar>
  )
}
