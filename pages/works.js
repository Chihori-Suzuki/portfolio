import { Grid, Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Image from "next/image";
// import { works } from "./data";

const useStyle = makeStyles({
  tool: {
    paddingBottom: "5%",
  },
});

export const works = [
  {
    title: "Calorie and recipe",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "iOS",
    id: 0,
    image: "recipe-image.png",
    language: "Swift",
    link: "https://github.com/Chihori-Suzuki/Recipe-and-Calorie-Manager-App",
  },
  {
    title: "something project 2",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.",
    category: "sss",
    id: 1,
    image: "view1.jpg",
    language: "Javascript",
    link: "https://github.com/Chihori-Suzuki",
  },
  {
    title: "something project 3",
    details:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    category: "sss",
    id: 2,
    image: "flower2.jpg",
    language: "Swift",
    link: "https://github.com/Chihori-Suzuki",
  },
  {
    title: "Portfolio",
    details: "making portfolio",
    category: "sss",
    id: 3,
    image: "view2.jpg",
    language: "Swift",
    link: "https://github.com/Chihori-Suzuki",
  },
];

export async function getServerSideProps(context) {
  const { id } = context.query;
  return { props: { id } };
}

export default function Works({ id }) {
  const classes = useStyle();

  return (
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
  );
}
