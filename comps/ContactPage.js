import {
  makeStyles,
  Box,
  Grid,
  IconButton,
  Typography,
  SvgIcon,
} from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyle = makeStyles((theme) => {
  return {
    typography: {
      marginBottom: 30,
      [theme.breakpoints.down("sm")]: {
        fontSize: "30px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "50px",
        fontWeight: "350",
      },
    },
    typography1: {
      marginBottom: 30,
      [theme.breakpoints.down("sm")]: {
        fontSize: "15px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
        fontWeight: "350",
      },
    },
    grid: {
      marginRight: "35%",
      marginTop: "5%",
    },
    icon: {
      color: "white",
    },
  };
});

export default function ContactPage() {
  const classes = useStyle();

  return (
    <Box ml="3%" my="5%">
      <Typography className={classes.typography} id="contact" color="primary">
        CONTACT
      </Typography>
      <Typography className={classes.typography1}>
        feel free to contact me
      </Typography>
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
          <IconButton
            href="https://www.linkedin.com/in/chihori-suzuki-062035199/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 635.000000 540.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,540.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  fill="#777777"
                  d="M278 5376 c-105 -38 -201 -127 -240 -224 l-23 -57 0 -2375 0 -2375 23 -57 c31 -76 105 -156 184 -199 l63 -34 2400 0 2400 0 62 34 c77 41 146 113 181 189 l27 57 0 2385 0 2385 -27 57 c-35 76 -109 153 -183 192 l-60 31 -2385 2 c-1945 2 -2392 0 -2422 -11z m1051 -735 c84 -26 137 -59 202 -128 63 -66 89 -111 114 -197 23 -77 16 -199 -14 -278 -96 -249 -387 -368 -624 -255 -294 139 -358 521 -126 747 119 115 295 159 448 111z m2538 -1207 c45 -8 120 -28 167 -45 285 -103 437 -316 509 -714 22 -117 22 -139 22 -980 l0 -860 -395 0 -395 0 -6 780 c-5 710 -7 785 -23 840 -28 93 -66 162 -113 206 -65 60 -121 81 -235 87 -223 11 -360 -58 -438 -223 -64 -137 -64 -135 -70 -950 l-5 -740 -395 0 -395 0 -3 1278 -2 1277 385 0 385 0 0 -177 0 -178 27 40 c135 202 357 342 590 374 84 12 280 4 390 -15z m-2269 -1321 l-3 -1278 -395 0 -395 0 -3 1278 -2 1277 400 0 400 0 -2 -1277z"
                />
                <path
                  fill="#777777"
                  d="M5813 695 c-43 -21 -87 -53 -109 -78 -146 -167 -114 -425 66 -546 7 -48 140 -65 235 -59 272 18 423 327 274 560 -37 57 -74 90 -143 125 -43 23 -67 28 -151 31 -99 4 -101 3 -172 -33z m290 -28 c74 -34 131 -88 164 -155 24 -48 28 -70 28 -137 0 -66 -5 -90 -27 -137 -117 -250 -466 -252 -588 -3 -34 68 -35 197 -4 266 77 166 266 240 427 166z"
                />
                <path
                  fill="#777777"
                  d="M5850 370 l0 -190 25 0 c25 0 25 1 25 85 l0 85 34 0 c31 0 37 -6 87 -85 47 -74 57 -85 82 -85 32 0 34 -6 -34 97 l-48 71 27 7 c65 16 96 83 68 148 -20 48 -45 57 -167 57 l-99 0 0 -190z m202 133 c10 -9 18 -30 18 -49 0 -47 -29 -64 -107 -64 l-63 0 0 65 0 65 67 0 c48 0 72 -5 85 -17z"
                />
              </g>
            </svg>
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
