import {
  makeStyles,
  Box,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyle = makeStyles(() => {
  return {
    typography: {
      marginBottom: 30,
    },
    grid: {
      margin: 30,
    },
  };
});

export default function ContactPage() {
  const classes = useStyle();

  return (
    <Box ml={5} my={10}>
      <Typography
        className={classes.typography}
        id="contact"
        variant="h2"
        color="primary"
      >
        CONTACT
      </Typography>
      <Typography variant="h5">feel free to contact me</Typography>
      <Grid className={classes.grid}>
        <Grid item>
          <IconButton
            href="https://www.instagram.com/chihhorin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon style={{ fontSize: 40 }}></InstagramIcon>
          </IconButton>
          <IconButton
            href="https://github.com/Chihori-Suzuki"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon style={{ fontSize: 40 }}></GitHubIcon>
          </IconButton>
          <IconButton href="mailto:suzuki4254545@gmail.com" target="_top">
            <EmailIcon style={{ fontSize: 40 }}></EmailIcon>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
