import {
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

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
            ></CardMedia>
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
