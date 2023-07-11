import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";

export const useAboutPageStyle = makeStyles((theme: Theme) => ({
  responsiveImage: {
    borderRadius: "10px",
    marginLeft: "10.5%",
    margin: "auto !important",
    marginBottom: "5% !important",
    height: "85%",
    width: "65%",
    transform: "rotateY(180deg)",
    [theme.breakpoints.down("md")]: {
      transform: "rotateY(180deg)",
      height: "80%",
      width: "80%",
      marginBottom: "32.5%",
    },
    [theme.breakpoints.down("sm")]: {
      transform: "rotateY(180deg)",
      height: "80%",
      width: "80%",
    },
    "@media (max-width: 1280px) and (max-height: 930px)": {
      transform: "rotateY(180deg)",
      height: "81.7%",
      width: "80%",
      marginLeft: "8%",
      marginTop: "12%",
    },
  },
  container: {
    marginTop: "2rem",
    "@media (max-width: 1024px) and (max-height: 800px)": {
      marginTop: "0",
    },
    "@media (max-width: 1024px) and (max-height: 600px)": {
      marginTop: "0",
    },
  },
  linkContainer: {
    width: "100%",
    display: "flex",
    marginTop: "1%",
    zIndex: 1000,
    position: "static",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      margin: "auto",
    },
  },
  link: {
    marginLeft: "1.5%",
    marginTop: "2px",
    textDecoration: "none",
    color: "#000000",
  },
  textContainer: {
    textAlign: "center",
  },
  aboutUsTitle: {
    fontSize: 66,
    fontStyle: "oblique",
    fontFamily: "space",
    color: "#FFFFFF",
    marginBottom: theme.spacing(2),
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("md")]: {
      fontSize: "48px",
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "36px",
      margin: "auto",
    },
    "@media (max-width: 1280px) and (max-height: 930px)": {
      fontSize: "52px",
      margin: "auto",
    },
  },
  aboutUsText: {
    fontSize: 17,
    color: "#FFFFFF",
    marginBottom: theme.spacing(4),
    marginLeft: "auto",
    marginRight: "10%",
    textAlign: "center",
    fontFamily: "space",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
      margin: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      margin: "auto",
    },
    "@media (max-width: 1280px) and (max-height: 930px)": {
      fontSize: "16px",
      margin: "auto",
    },
  },
}));
