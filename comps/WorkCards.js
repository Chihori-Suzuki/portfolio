import {
  ButtonBase,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@material-ui/core";
import React from "react";

export default function WorkCard({ work }) {
  // const handleDelete = async (id) => {
  // await fetch("http://localhost:8000/notes/" + id, {
  //     method: "DELETE",
  //   });
  //   const newNotes = notes.filter((note) => note.id != id);
  //   setNotes(newNotes);
  // };

  //   const openWindow = (props) => {};
  return (
    <div>
      <Card>
        <ButtonBase>
          <CardHeader title={work.title} subheader={work.category}></CardHeader>
          <CardContent>
            <Typography varient="body2" color="normal">
              {work.details}
            </Typography>
          </CardContent>
        </ButtonBase>
      </Card>
    </div>
  );
}
