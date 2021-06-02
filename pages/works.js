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

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   const res = await fetch("https://portfolio.chiori.tech/works/" + id);
//   const work = await res.json();

//   return { props: { work } };
// }

export default function Works({}) {
  const classes = useStyle();

  const work = [
    {
      title: "Calorie and recipe",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "iOS",
      id: 1,
      image: "flower1.jpg",
      language: "Swift",
      link: "https://github.com/Chihori-Suzuki/Recipe-and-Calorie-Manager-App",
    },
    {
      title: "something project 2",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
      category: "sss",
      id: 2,
      image: "view1.jpg",
      language: "Javascript",
      link: "https://github.com/Chihori-Suzuki",
    },
    {
      title: "something project 3",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      category: "sss",
      id: 3,
      image: "flower2.jpg",
      language: "Swift",
      link: "https://github.com/Chihori-Suzuki",
    },
    {
      title: "Portfolio",
      details: "making portfolio",
      category: "sss",
      id: 4,
      image: "view2.jpg",
      language: "Swift",
      link: "https://github.com/Chihori-Suzuki",
    },
  ];
  return (
    <Grid container>
      <Grid item>
        <Typography variant="h4" className={classes.tool} key={work.id}>
          {work.title}
        </Typography>
        <Image
          src={"/" + work.image}
          width={600}
          height={400}
          className={classes.tool}
          key={work.id}
        ></Image>

        <Typography variant="body1" className={classes.tool} key={work.id}>
          {work.details}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Language
        </Typography>
        <Typography variant="h6" className={classes.tool} key={work.id}>
          {work.language}
        </Typography>
        <Typography variant="h5" gutterBottom>
          Link
        </Typography>
        <Link
          variant="h6"
          className={classes.tool}
          key={work.id}
          href={work.link}
          target="_blank"
        >
          {work.link}
        </Link>
      </Grid>
    </Grid>
  );
}
