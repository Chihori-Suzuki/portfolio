import {
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
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
          <CardHeader title={work.title} subheader={work.category}></CardHeader>
          <CardContent>
            <Typography varient="body2">{work.details}</Typography>
          </CardContent>
        </ButtonBase>
      </CardActionArea>
    </Card>
    // </Link>
  );
}
