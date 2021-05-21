import { Box, Container, Grid } from "@material-ui/core";
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
  //   const res = await fetch(`https://restcountries.eu/rest/v2/name/${id}`);
  const res = await fetch("http://localhost:8001/works/" + id);
  const work = await res.json();

  console.log(`Fetched place: ${work.name}`);
  return { props: { work } };
}

export default function Works() {
  const classes = useStyle();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item>
        <Typography variant="h4" className={classes.tool}>
          {work.title}
        </Typography>
        <Image
          src="/sample.jpg"
          width={600}
          height={400}
          className={classes.tool}
        ></Image>

        <Typography variant="body1" className={classes.tool}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Language
        </Typography>
        <Typography variant="h6" className={classes.tool}>
          Swift
        </Typography>
        <Typography variant="h5" gutterBottom>
          Link
        </Typography>
        <Typography variant="h6" className={classes.tool}>
          http://www/sss.com
        </Typography>
      </Grid>
    </Grid>
  );
}
