import {
  ButtonBase,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"
import { styled } from "@mui/material/styles"
import React from "react"

const PREFIX = "WorkCards"

const classes = {
  card: `${PREFIX}-card`,
  box: `${PREFIX}-box`,
}

const StyledCard = styled(Card)(({ theme }) => ({
  [`&.${classes.card}`]: {
    "&:hover": {
      transform: "scale3d(1.05, 1.05, 1)",
    },
    display: "flex",
    flexDirection: "column", // Ensure the card content is stacked vertically
    width: "100%", // Make the card take full width
  },
  [`& .${classes.box}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch", // Ensure the box content stretches to fit the card
  },
}))

export default function WorkCard({ work }) {
  return (
    <StyledCard className={classes.card} elevation={3}>
      <CardActionArea href={"/works?id=" + work.id}>
        <ButtonBase style={{ width: "100%" }}>
          <div className={classes.box} style={{ width: "100%" }}>
            <CardMedia
              component="img"
              image={work.image}
              height="300"
              title={work.image}
              style={{ objectFit: "fill", width: "100%" }} // Ensure the image covers the card width
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
    </StyledCard>
  )
}
