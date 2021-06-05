import { Grid, Link, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { works } from "../data/data";

const useStyle = makeStyles({
  tool: {
    paddingBottom: "5%",
  },
  paper: {
    display: "fixed",
    padding: "5%",
    background: "rgba(218, 159, 243, 0.47)",
  },
});

export async function getServerSideProps(context) {
  const { id } = context.query;
  return { props: { id } };
}

export default function Works({ id }) {
  const classes = useStyle();

  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item>
          <Typography variant="h4" className={classes.tool}>
            {works[id].title}
          </Typography>
          <Image
            src={"/" + works[id].image}
            width={600}
            height={400}
            className={classes.tool}
          ></Image>

          <Typography variant="body1" className={classes.tool}>
            {works[id].details}
          </Typography>

          <Typography variant="h5" gutterBottom>
            Language
          </Typography>
          <Typography variant="h6" className={classes.tool}>
            {works[id].language}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Link
          </Typography>
          <Link
            variant="h6"
            className={classes.tool}
            href={works[id].link}
            target="_blank"
          >
            {works[id].link}
          </Link>
        </Grid>
      </Grid>
    </Paper>
  );
}
