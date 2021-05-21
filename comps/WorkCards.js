import {
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function WorkCard({ work }) {
  return (
    <Card>
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
