import { Grid, Link, Paper, AppBar, Toolbar, Box } from "@mui/material"
import { styled } from "@mui/material/styles"
import { colors } from "../src/theme"
import Typography from "@mui/material/Typography"
import Image from "next/image"
import { works } from "../data/data"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const PREFIX = "works"

const classes = {
  grid: `${PREFIX}-grid`,
  paper: `${PREFIX}-paper`,
  appBar: `${PREFIX}-appBar`,
  textColor: `${PREFIX}-textColor`,
  typography2: `${PREFIX}-typography2`,
  subtitle: `${PREFIX}-subtitle`,
  body: `${PREFIX}-body`,
  body2: `${PREFIX}-body2`,
  body3: `${PREFIX}-body3`,
}

const StyledPaper = styled(Paper)(({ theme }) => {
  return {
    [`& .${classes.grid}`]: {
      paddingTop: "5%",
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
    [`&.${classes.paper}`]: {
      display: "flex",
      background: "rgba(255, 255, 255, 0.7)",
      borderRadius: 0,
    },

    [`& .${classes.appBar}`]: {
      marginTop: "5%",
      paddingLeft: "5%",
    },
    [`& .${classes.textColor}`]: {
      marginLeft: "3%",
      padding: "1%",
      color: colors.text,
      fontSize: "20px",
      "&:hover": {
        background: colors.primaryHover,
      },
    },
    [`& .${classes.typography2}`]: {
      textAlign: "center",
      [theme.breakpoints.down("md")]: {
        fontSize: "30px",
        fontWeight: "300",
        color: colors.text,
        fontFamily: "'Cormorant Garamond', serif",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "40px",
        fontWeight: "400",
        color: colors.text,
        fontFamily: "'Cormorant Garamond', serif",
      },
      padding: "5%",
    },
    [`& .${classes.subtitle}`]: {
      marginTop: "7%",
      marginBottom: "3%",
      [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
        fontWeight: "350",
      },
    },
    [`& .${classes.body}`]: {
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
        fontWeight: "350",
      },
    },
    [`& .${classes.body2}`]: {
      [theme.breakpoints.down("md")]: {
        fontSize: "17px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "25px",
        fontWeight: "350",
      },
    },
    [`& .${classes.body3}`]: {
      [theme.breakpoints.down("md")]: {
        fontSize: "15px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "20px",
        fontWeight: "350",
      },
    },
  }
})

export async function getServerSideProps(context) {
  const { id } = context.query
  const workId = parseInt(id, 10)

  if (isNaN(workId) || workId < 0 || workId >= works.length) {
    return { notFound: true }
  }

  return { props: { id: workId } }
}

export default function Works({ id }) {
  return (
    <StyledPaper className={classes.paper}>
      <AppBar color="transparent" className={classes.appBar} elevation={0}>
        <Toolbar>
          <ArrowBackIcon />
          <Link className={classes.textColor} href="/">
            BACK
          </Link>
        </Toolbar>
      </AppBar>

      <Grid
        container
        className={classes.grid}
        direction="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <h2 className={classes.typography2}>{works[id].title}</h2>
        {works[id].image ? (
          <Image
            src={works[id].image}
            width={600}
            height={400}
            className={classes.margin}
          ></Image>
        ) : (
          <Box
            sx={{
              width: 600,
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: colors.bgAlt,
              borderRadius: 0,
              color: colors.textSub,
            }}
          >
            <Typography variant="h6">No Image Available</Typography>
          </Box>
        )}
        <Box mt="5%" mx="7%">
          <Typography variant="body1" gutterBottom className={classes.body}>
            {works[id].details}
          </Typography>
        </Box>
        <Typography variant="h5" className={classes.subtitle}>
          Language, Software
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.body2}>
          {works[id].stacks}
        </Typography>
        {works[id].link && (
          <>
            <Typography variant="h5" className={classes.subtitle}>
              Link
            </Typography>
            <Link
              variant="h6"
              href={works[id].link}
              target="_blank"
              className={classes.body3}
              color={colors.primary}
            >
              {works[id].link}
            </Link>
          </>
        )}
      </Grid>
    </StyledPaper>
  )
}
