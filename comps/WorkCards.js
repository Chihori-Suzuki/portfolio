import {
  Box,
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
  placeholder: `${PREFIX}-placeholder`,
}

const StyledCard = styled(Card)(({ theme }) => ({
  [`&.${classes.card}`]: {
    border: "1px solid #E8E4DC",
    boxShadow: "none",
    borderRadius: 0,
    transition: "border-color 0.3s ease",
    "&:hover": {
      borderColor: "#8B7355",
    },
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  [`& .${classes.box}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
  },
  [`& .${classes.placeholder}`]: {
    height: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F2EC",
    color: "#888888",
    fontSize: "16px",
  },
}))

export default function WorkCard({ work }) {
  return (
    <StyledCard className={classes.card} elevation={0}>
      <CardActionArea href={"/works?id=" + work.id}>
        <ButtonBase style={{ width: "100%" }}>
          <div className={classes.box} style={{ width: "100%" }}>
            {work.image ? (
              <CardMedia
                component="img"
                image={work.image}
                height="300"
                title={work.image}
                style={{ objectFit: "fill", width: "100%", borderRadius: 0 }}
              />
            ) : (
              <Box className={classes.placeholder}>
                <Typography variant="body1">No Image Available</Typography>
              </Box>
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ fontFamily: "'Cormorant Garamond', serif" }}>
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
