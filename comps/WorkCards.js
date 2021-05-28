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

const useStyle = makeStyles((theme) => {
  return {
    card: {
      "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)",
      },
      display: "flex",
    },
    box: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        flexDirection: "column",
      },
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
    },
    content: {},
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
          </div>
        </ButtonBase>
      </CardActionArea>
    </Card>
  );
}
