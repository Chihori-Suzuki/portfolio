import { Grid, Link, Paper, AppBar, Toolbar, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { works } from "../data/data";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyle = makeStyles((theme) => {
  return {
    grid: {
      paddingTop: "5%",
      paddingBottom: "10%",
      [theme.breakpoints.down("sm")]: {
        paddingLeft: "10%",
        paddingRight: "10%",
      },
      [theme.breakpoints.up("sm")]: {
        paddingLeft: "25%",
        paddingRight: "25%",
      },
    },
    paper: {
      display: "flex",
      background: "rgba(255, 255, 255, 0.7)",
      borderRadius: 0,
    },

    appBar: {
      marginTop: "5%",
      paddingLeft: "5%",
    },
    textColor: {
      marginLeft: 15,
      color: "black",
      fontSize: "20px",
    },
    typography2: {
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        fontWeight: "300",
        color: "#590477",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "40px",
        fontWeight: "400",
        color: "#590477",
      },
      padding: "5%",
    },
    subtitle: {
      marginTop: "7%",
      marginBottom: "3%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
        fontWeight: "350",
      },
    },
    body: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
        fontWeight: "350",
      },
    },
    body2: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "17px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "25px",
        fontWeight: "350",
      },
    },
  };
});

export async function getServerSideProps(context) {
  const { id } = context.query;
  return { props: { id } };
}

export default function Works({ id }) {
  const classes = useStyle();

  return (
    <Paper className={classes.paper}>
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
        justify="space-between"
      >
        <h2 className={classes.typography2}>{works[id].title}</h2>
        <Image
          src={works[id].image}
          width={600}
          height={400}
          className={classes.margin}
        ></Image>
        <Box mt="5%" mx="7%">
          <Typography
            variant="body1"
            gutterBottom
            className={classes.body}
            word
          >
            {works[id].details}
          </Typography>
        </Box>
        <Typography variant="h5" className={classes.subtitle}>
          Language
        </Typography>
        <Typography variant="h6" gutterBottom className={classes.body2}>
          {works[id].language}
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>
          Link
        </Typography>
        <Link
          variant="h6"
          href={works[id].link}
          target="_blank"
          className={classes.body2}
        >
          {works[id].link}
        </Link>
      </Grid>
    </Paper>
  );
}
