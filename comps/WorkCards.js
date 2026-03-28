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
import { colors } from "../src/theme"
import React from "react"

const PREFIX = "WorkCards"

const classes = {
  card: `${PREFIX}-card`,
  box: `${PREFIX}-box`,
  placeholder: `${PREFIX}-placeholder`,
}

const StyledCard = styled(Card)(({ theme }) => ({
  [`&.${classes.card}`]: {
    border: `1px solid ${colors.border}`,
    boxShadow: "none",
    borderRadius: 0,
    transition: "all 0.25s ease",
    cursor: "pointer",
    "&:hover": {
      borderColor: colors.primary,
      transform: "translateY(-4px)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
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
    backgroundColor: colors.bgAlt,
    color: colors.textSub,
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
                style={{ objectFit: "cover", width: "100%", borderRadius: 0 }}
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
