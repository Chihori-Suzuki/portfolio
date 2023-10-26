import { Container, Grid, Paper, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import React, { useEffect } from "react"
import WorkCards from "../comps/WorkCards"
import ContactPage from "../comps/ContactPage"
import About from "../comps/About"
import { motion } from "framer-motion"
import { works } from "../data/data"
import NavBar from "../comps/NavBar"
import AOS from "aos"
import "aos/dist/aos.css"

const PREFIX = "index"

const classes = {
  toolbar: `${PREFIX}-toolbar`,
  top: `${PREFIX}-top`,
  card: `${PREFIX}-card`,
  typography: `${PREFIX}-typography`,
  typography1: `${PREFIX}-typography1`,
  typography2: `${PREFIX}-typography2`,
  gridContact: `${PREFIX}-gridContact`,
  paper: `${PREFIX}-paper`,
  paper2: `${PREFIX}-paper2`,
  backpaper: `${PREFIX}-backpaper`,
}

const StyledPaper = styled(Paper)(({ theme }) => {
  return {
    [`& .${classes.toolbar}`]: theme.mixins.toolbar,
    [`& .${classes.top}`]: {
      marginTop: "10%",
      marginBottom: "30%",
      textAlign: "center",
    },
    [`& .${classes.card}`]: {
      color: "secondary",
    },
    [`& .${classes.typography}`]: {
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
        fontWeight: "300",
        color: "#EFC2FF",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "60px",
        fontWeight: "400",
        color: "#EFC2FF",
      },
    },
    [`& .${classes.typography1}`]: {
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        fontWeight: "300",
        color: "#FFFFFF",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "25px",
        fontWeight: "400",
        color: "#FFFFFF",
      },
    },
    [`& .${classes.typography2}`]: {
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
        fontWeight: "300",
        color: "#590477",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "60px",
        fontWeight: "400",
        color: "#590477",
      },
      padding: "5%",
    },
    [`& .${classes.gridContact}`]: {
      marginTop: "10%",
      marginBottom: "10%",
      textAlign: "center",
    },

    [`& .${classes.paper}`]: {
      display: "flex",
      backgroundColor: "#FFFFFF",
      marginLeft: "calc(((100vw - 100%) / 2) * -1)",
      marginRight: "calc(((100vw - 100%) / 2) * -1)",
      borderRadius: 0,
      paddingBottom: "10%",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "10%",
        paddingRight: "10%",
      },
      [theme.breakpoints.up("sm")]: {
        paddingLeft: "25%",
        paddingRight: "25%",
      },
    },
    [`& .${classes.paper2}`]: {
      display: "flex",
      backgroundColor: "#F1E7FF",
      marginLeft: "calc(((100vw - 100%) / 2) * -1)",
      marginRight: "calc(((100vw - 100%) / 2) * -1)",
      borderRadius: 0,
      paddingBottom: "10%",
      [theme.breakpoints.down("md")]: {
        paddingLeft: "10%",
        paddingRight: "10%",
      },
      [theme.breakpoints.up("sm")]: {
        paddingLeft: "25%",
        paddingRight: "25%",
      },
    },

    [`&.${classes.backpaper}`]: {
      // display: "fixed",
      padding: "5%",
      background: "rgba(61, 5, 96, 0.6)",
    },
  }
})

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 0.5, duration: 0.5, transform: "translate(0, 50px)" },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
}

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true })
  }, [])

  return (
    <StyledPaper className={classes.backpaper}>
      <NavBar />
      {/* main */}
      <Container className={classes.top}>
        <motion.div
          className="baseComponent"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className={classes.typography} id="top" color="primary">
            CHIORI SUZUKI
          </h2>
          <h5 className={classes.typography1} color="secondary">
            Web Developer / Full-stack Engineer
          </h5>

          <Typography variant="h6"></Typography>
        </motion.div>
      </Container>
      {/* Works */}
      <Paper className={classes.paper}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h2 className={classes.typography2} id="work" data-aos="fade-up">
            WORKS
          </h2>
          <Grid container spacing={8}>
            {works.map((work) => (
              <Grid
                item
                key={work.id}
                xs={12}
                md={12}
                lg={6}
                data-aos="fade-up"
              >
                <WorkCards className={classes.card} work={work} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Paper>
      {/* About */}
      <Paper className={classes.paper2}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <h2 className={classes.typography2} id="about" data-aos="fade-up">
            ABOUT
          </h2>
          <About></About>
        </Grid>
      </Paper>
      {/* Contact */}

      <Grid
        container
        direction="column"
        justifyContent="center"
        className={classes.gridContact}
      >
        <h2 className={classes.typography} id="contact" data-aos="fade-up">
          CONTACT
        </h2>
        <ContactPage></ContactPage>
      </Grid>
      {/* </motion.div> */}
    </StyledPaper>
  )
}
