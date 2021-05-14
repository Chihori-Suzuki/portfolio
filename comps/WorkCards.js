import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import React from "react";
export default function WorkCard({ work }) {
  return (
    <div>
      <Card>
        <CardHeader title={work.title} subheader={work.category}></CardHeader>
        <CardContent>
          <Typography varient="body2" color="normal">
            {work.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
