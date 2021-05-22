import {
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyle = makeStyles(() => {
  return {
    card: {
      "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)",
      },
    },
  };
});

export default function WorkCard({ work }) {
  const classes = useStyle();
  return (
    <Card className={classes.card} elevation={3}>
      <CardActionArea href={"/works?id=" + work.id}>
        <ButtonBase>
          <CardMedia
            component="img"
            image={work.image}
            height={200}
            title={work.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {work.title}
            </Typography>
            <Typography gutterBottom variant="body2">
              {work.category}
            </Typography>
          </CardContent>
        </ButtonBase>
      </CardActionArea>
    </Card>
  );
}
