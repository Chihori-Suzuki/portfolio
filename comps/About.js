import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import { colors } from "../src/theme"
import React from "react"
import Image from "next/image"
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
      color: colors.primary,
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
  const skills = [
    "TypeScript", "JavaScript", "React", "Next.js", "Redux", "Zustand",
    "HTML", "CSS", "Tailwind CSS", "Node.js", "PostgreSQL", "Firebase",
    "Redis", "Figma", "Git", "Docker", "AWS Amplify", "Jest",
    "OpenAI API", "Laravel", "MySQL",
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
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  fontSize: "1.5rem",
                }}
              >
                CHIORI SUZUKI
              </Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.body}>
                Full-stack developer with 8+ years of professional
                experience across Japan and Canada. Front-end focused,
                with solid back-end experience in Node.js and PostgreSQL.
                Specialized in building scalable, user-friendly web
                applications using modern React ecosystems. Passionate
                about clean UI/UX and cross-functional team collaboration.
              </Typography>
            </Grid>
            <Grid item>
              <Button
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  border: `1px solid ${colors.text}`,
                  padding: "8px 24px",
                  borderRadius: "2px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  letterSpacing: "0.08em",
                  color: colors.text,
                  background: "transparent",
                  textTransform: "none",
                  "&:hover": {
                    background: colors.text,
                    color: colors.textLight,
                    transition: "all 0.2s ease",
                  },
                }}
              >
                Resume →
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={5} data-aos="fade-up">
        <Grid item xs={12} container justifyContent="center">
          <Typography className={classes.subtitle}>SKILLS</Typography>
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={1.5}>
            {skills.map((skill) => (
              <Chip
                key={skill}
                label={skill}
                sx={{
                  background: colors.bgChip,
                  borderRadius: "4px",
                  padding: "4px 12px",
                  fontSize: "14px",
                  fontFamily: "'Inter', sans-serif",
                  color: colors.text,
                }}
              />
            ))}
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item xs={12} container justifyContent="center" data-aos="fade-up">
          <Typography className={classes.subtitle}>EDUCATION</Typography>
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
              Apr 2020 - Mar 2022
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
              courses are designed for web programming. Learning Java, Android,
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
              Developed an internal clinic management system deployed
              across medical facilities in Japan. Built a calendar-based
              scheduling UI for patient appointments and a direct
              reservation booking system, designed for non-technical
              medical staff. Stack: React, Node.js, PostgreSQL, Figma.
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
              Top contributor with 608 commits across 11 months. Built an
              AI-powered chat system with Voiceflow and Redis-backed
              conversation history on Next.js 15 / React 19. Developed the
              BYOE (Bring Your Own Entity) onboarding flow for multiple
              jurisdictions. Built a reusable component library with
              dark/light mode using Tailwind CSS v4.
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
            <Typography variant="h6">NEC Solution Innovator Inc</Typography>
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
              Designed, developed, tested the POS system to validate the data
              and the functions. Updated the functions in response to customer's
              requirements.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  )
}
