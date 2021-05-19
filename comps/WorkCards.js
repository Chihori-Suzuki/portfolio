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
import { Link, useHistory } from "react-router-dom";

export default function WorkCard({ work }) {
  // const handleDelete = async (id) => {
  // await fetch("http://localhost:8000/notes/" + id, {
  //     method: "DELETE",
  //   });
  //   const newNotes = notes.filter((note) => note.id != id);
  //   setNotes(newNotes);
  // };
  const history = useHistory();
  return (
    // <Link to={"/works"}>
    <Card>
      <CardActionArea href="/works">
        <ButtonBase /* onClick={() => history.push("/works")} */>
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
    // </Link>
  );
}
