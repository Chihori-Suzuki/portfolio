import { Box, Container, Grid, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
import { useEffect, useState } from "react";

const useStyle = makeStyles({
  tool: {
    paddingBottom: "5%",
  },
});

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch("http://localhost:8001/works/" + id);
  const work = await res.json();

  return { props: { work } };
}

export default function Works({ work }) {
  const classes = useStyle();
  return (
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <Typography variant="h4" className={classes.tool}>
          {work.title}
        </Typography>
        <Image
          src={"/" + work.image}
          width={600}
          height={400}
          className={classes.tool}
        ></Image>

        <Typography variant="body1" className={classes.tool}>
          {work.details}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Language
        </Typography>
        <Typography variant="h6" className={classes.tool}>
          {work.language}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Link
        </Typography>
        <Link
          variant="h6"
          className={classes.tool}
          href={work.link}
          target="_blank"
        >
          {work.link}
        </Link>
      </Grid>
    </Grid>
  );
}
