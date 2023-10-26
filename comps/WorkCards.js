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

const StyledCard = styled(Card)(({ theme }) => {
  return {
    [`&.${classes.card}`]: {
      "&:hover": {
        transform: "scale3d(1.05, 1.05, 1)",
      },
      display: "flex",
    },
    [`& .${classes.box}`]: {
      display: "flex",
      flexDirection: "column",
    },
  }
})

export default function WorkCard({ work }) {
  return (
    <StyledCard className={classes.card} elevation={3}>
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
    </StyledCard>
  )
}
