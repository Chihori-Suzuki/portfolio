import {
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
// import Image from "react-image-resizer";
import Image from "next/image";

const useStyle = makeStyles((theme) => {
  return {
    card: {
      "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)",
      },
      display: "flex",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      // [theme.breakpoints.up("sm")]: {
      //   display: "flex",
      //   flexDirection: "row",
      //   alignItems: "center",
      // },
    },
  };
});

export default function WorkCard({ work }) {
  const classes = useStyle();
  return (
    <Card className={classes.card} elevation={3}>
      <CardActionArea href={"/works?id=" + work.id}>
        <ButtonBase>
          <div className={classes.box}>
            <CardMedia
              component="img"
              image={work.image}
              height={300}
              title={work.image}
            >
              {/* <Image src={work.image} height={350} width={600}></Image> */}
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {work.title}
              </Typography>
              <Typography gutterBottom variant="body2">
                {work.category}
              </Typography>
            </CardContent>
          </div>
        </ButtonBase>
      </CardActionArea>
    </Card>
  );
}
