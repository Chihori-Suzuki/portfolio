import {
  Box,
  Container,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import React from "react"
import Image from "next/image"
import StarIcon from "@mui/icons-material/Star"
import { purple } from "@mui/material/colors"
import AttachFileIcon from "@mui/icons-material/AttachFile"
import LocationOnIcon from "@mui/icons-material/LocationOn"

const PREFIX = "About"

const classes = {
  text: `${PREFIX}-text`,
  box: `${PREFIX}-box`,
  typography: `${PREFIX}-typography`,
  paper: `${PREFIX}-paper`,
  subtitle: `${PREFIX}-subtitle`,
  body: `${PREFIX}-body`,
  body2: `${PREFIX}-body2`,
  location: `${PREFIX}-location`,
}

const StyledContainer = styled(Container)(({ theme }) => {
  return {
    [`& .${classes.text}`]: {
      color: purple[800],
    },
    [`& .${classes.box}`]: {
      "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)",
      },
    },
    [`& .${classes.typography}`]: {
      // marginBottom: 30,
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "50px",
        fontWeight: "500",
      },
    },
    [`& .${classes.paper}`]: {
      background: "transparent",
      paddingBottom: "5%",
    },

    [`& .${classes.subtitle}`]: {
      marginTop: "7%",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
        fontWeight: "400",
      },
    },
    [`& .${classes.body}`]: {
      [theme.breakpoints.down("md")]: {
        fontSize: "14px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "17px",
        fontWeight: "350",
      },
    },
    [`& .${classes.body2}`]: {
      marginTop: "3%",
      [theme.breakpoints.down("md")]: {
        fontSize: "12px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "15px",
        fontWeight: "350",
      },
    },
    [`& .${classes.location}`]: {
      marginTop: "3%",
      marginBottom: "3%",
    },
  }
})

export default function About() {
  const stars = {
    eval1: (
      <Box>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
      </Box>
    ),
    eval2: (
      <Box>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
      </Box>
    ),
    eval3: (
      <Box>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon color="secondary"></StarIcon>
        <StarIcon color="secondary"></StarIcon>
      </Box>
    ),
    eval4: (
      <Box>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon className={classes.text}></StarIcon>
        <StarIcon color="secondary"></StarIcon>
      </Box>
    ),
    eval5: (
      <Box>
        <StarIcon color="primary"></StarIcon>
        <StarIcon color="primary"></StarIcon>
        <StarIcon color="primary"></StarIcon>
        <StarIcon color="primary"></StarIcon>
        <StarIcon color="primary"></StarIcon>
      </Box>
    ),
  }

  const menuItems = [
    {
      text: "javascript",
      icon: stars.eval4,
    },
    {
      text: "HTML",
      icon: stars.eval4,
    },
    {
      text: "CSS",
      icon: stars.eval4,
    },
    {
      text: "ReactJs",
      icon: stars.eval4,
    },
    {
      text: "Next.js",
      icon: stars.eval4,
    },
    {
      text: "jQuery",
      icon: stars.eval3,
    },
    {
      text: "illustrator",
      icon: stars.eval3,
    },
  ]
  const menuItems1 = [
    {
      text: "Java",
      icon: stars.eval3,
    },
    {
      text: "PHP",
      icon: stars.eval3,
    },
    {
      text: "Swift",
      icon: stars.eval2,
    },
    {
      text: "Objective-C",
      icon: stars.eval2,
    },
    {
      text: "MySQL",
      icon: stars.eval3,
    },
    {
      text: "PosgreSQL",
      icon: stars.eval3,
    },
  ]

  return (
    <StyledContainer>
      <Paper className={classes.paper} elevation={0}>
        <Grid container spacing={2}>
          <Grid
            item
            sm={12}
            md={6}
            container
            justifyContent="center"
            data-aos="fade-up"
          >
            <Image
              src="/profile.png"
              alt="profile"
              width={220}
              height={220}
              layout="fixed"
            />
          </Grid>
          <Grid item sm={12} md={6} container data-aos="fade-up">
            <Grid item>
              <Typography className={classes.subtitle}>
                CHIORI SUZUKI
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.body}>
                I am a junior programmer with knowledge of front-end techniques.
                <br />I like studying new technology and improving my skills. I
                like working with team and helping others.{" "}
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="row" alignItems="center">
                <Typography className={classes.body}>Resume →</Typography>
                <IconButton
                  href="https://docs.google.com/document/d/1s2E-aVGo1TkSwELzQnKn-KaC9BgyEERfqCC1qm5JXQg/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                >
                  <AttachFileIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={5} data-aos="fade-up">
        <Grid item xs={12} container justifyContent="center">
          <Typography className={classes.subtitle}>SKILLS</Typography>
        </Grid>
        <Grid item container spacing={10}>
          <Grid item xs={12} sm={12} md={6}>
            {menuItems.map((item) => (
              <Box
                className={classes.box}
                key={item.text}
                display="flex"
                flexDirection="row"
              >
                <Box flexGrow={1} mb={1}>
                  <Typography className={classes.body} gutterBottom>
                    {item.text}
                  </Typography>
                </Box>
                {item.icon}
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} sm={12} md={6} data-aos="fade-up">
            {menuItems1.map((item) => (
              <Box
                className={classes.box}
                key={item.text}
                display="flex"
                flexDirection="row"
              >
                <Box flexGrow={1} mb={1}>
                  <Typography className={classes.body} gutterBottom>
                    {item.text}
                  </Typography>
                </Box>
                {item.icon}
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={12} container justifyContent="center" data-aos="fade-up">
          <Typography className={classes.subtitle}>EDUCATIONS</Typography>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Typography variant="h6">
              Shibaura Institute of Technology
            </Typography>
            <Typography className={classes.body2}>
              Apr 2012 - Mar 2016
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className={classes.location}
            >
              <LocationOnIcon />
              <Typography variant="body2">Tokyo</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Typography variant="subtitle2">
              Engineering and Design　Robotics and Information Design Course
            </Typography>
            <Typography className={classes.body2}>
              Learn up to date production technologies along with the
              methodologies and process for product design. <br />
              Laboratory: Software Design Laboratory
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Typography variant="h6">
              Cornerstone International Community College of Canada
            </Typography>
            <Typography className={classes.body2}>
              Apr 2020 - expected 2022
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className={classes.location}
            >
              <LocationOnIcon />
              <Typography variant="body2">Vancouver</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Typography variant="subtitle2">
              Web Design and Mobile Application Development Diploma Program
            </Typography>
            <Typography className={classes.body2}>
              Practicing web design skills with HTML, CSS, JavaScript framework
              courses are designed for web programrming. Learning Java, Android,
              and Swift languages are another option for mobile app development.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={12} container justifyContent="center">
          <Typography className={classes.subtitle} data-aos="fade-up">
            CAREER
          </Typography>
        </Grid>
        <Grid item xs={12} container data-aos="fade-up">
          <Grid item xs={12} md={6}>
            <Typography variant="h6">BonBon Inc</Typography>
            <Typography className={classes.body2}>
              January 2024 - Present
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className={classes.location}
            >
              <LocationOnIcon />
              <Typography variant="body2">Tokyo</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Front-End Developer</Typography>
            <Typography className={classes.body2}>
              Developed a clinic management system with a user-friendly calendar
              for scheduling. Created a patient reservation system for direct
              booking. Utilized Figma, React, Node.js, and PostgreSQL for smooth
              and robust performance.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Otonomos</Typography>
            <Typography className={classes.body2}>
              Mar 2022 - Present
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className={classes.location}
            >
              <LocationOnIcon />
              <Typography variant="body2">Vancouver</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Front-End Developer</Typography>
            <Typography className={classes.body2}>
              Developed a user dashboard and incorporation submission form using
              React and Redux. Collaborated with design and business teams for a
              seamless UI/UX aligned with company goals. Ensured cross-device
              compatibility and optimal performance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container data-aos="fade-up">
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Logical Fabrics</Typography>
            <Typography className={classes.body2}>
              Oct 2021 - Mar 2022
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className={classes.location}
            >
              <LocationOnIcon />
              <Typography variant="body2">Tokyo</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Full-Stack Developer</Typography>
            <Typography className={classes.body2}>
              Developed web applications which is for several companies using
              Next.js, Typescript, NodeJs, and Firebase. Created tickets on the
              Github Issues and managed the tasks by kanban (GitHub Projects)
              with the agile methodology.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} container data-aos="fade-up">
          <Grid item xs={12} md={6}>
            <Typography variant="h6">NEC Solution Inovator Inc</Typography>
            <Typography className={classes.body2}>
              Apr 2016 - Mar 2020
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              className={classes.location}
            >
              <LocationOnIcon />
              <Typography variant="body2">Tokyo</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="subtitle2">Software Developer</Typography>
            <Typography className={classes.body2}>
              Designed, developped, tested the POS system to validate the data
              and the functions. Updated the functions in response to customer's
              requirments.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}
