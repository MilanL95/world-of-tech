import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";

export const useHomePageStyle = makeStyles((theme: Theme) => ({
  grid: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "60vh",
    width: "100%",
  },
  imgContain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    gap: "5%",
    marginBottom: "7.5%",
  },

  mouseIcon: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    marginTop: "2%",
  },
  iconContainer: {
    order: -1,
    marginRight: theme.spacing(1),
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "1% !important",
    marginTop: "2% !important",
  },
  webDesign: {
    "&:hover": {
      cursor: "pointer",
      fontSize: "19px!important",
    },
  },
  frontEnd: {
    "&:hover": {
      cursor: "pointer",
      fontSize: "19px!important",
    },
  },
  backEnd: {
    "&:hover": {
      cursor: "pointer",
      fontSize: "19px!important",
    },
  },
  qaTester: {
    "&:hover": {
      cursor: "pointer",
      fontSize: "19px!important",
    },
  },
  text: {
    fontSize: "19.5px !important",
    justifyContent: "center",
    color: "#FFFFFF",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "15px !important",
    },
  },
  title: {
    color: "#FFFFFF",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px !important",
    },
  },
  container: {
    marginTop: "1% !important",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    width: "95% !important",
    minHeight: "30vh !important",
    borderRadius: "10px",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      width: "60%",
    },
  },
  marqueeContainer: {
    overflowX: "hidden",
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(2),
    width: "100vw",
  },
  marqueeWrapper: {
    display: "inline-flex",
    gap: "10%",
    animation: "$scroll 50s linear infinite",
    paddingLeft: "100%",
  },
  "@keyframes scroll": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-150%)",
    },
  },
  toolItemImage: {
    width: 60,
    height: 60,
    cursor: "pointer",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    transition: "color 0.3s ease-in-out",
  },

  marqueePaused: {
    animationPlayState: "paused",
  },
}));
