import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";

export const useServicesPageStyle = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    width: "100%",
    background:
      "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9))",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  imgContainer: {
    justifyContent: "center",
    textAlign: "center",
  },
  image: {
    width: "35%",
    height: "auto",
    marginTop: "2%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  title: {
    color: "#FFFFFF",
    fontFamily: "space !important",
    marginTop: "2% !important",
    fontSize: "44px !important",
  },
  linkContainer: {
    width: "100%",
    display: "flex",
    zIndex: 1000,
    position: "static",
    justifyContent: "flex-start",
    [theme.breakpoints.down("md")]: {
      justifyContent: "flex-start",
      margin: "auto",
    },
  },
  link: {
    textDecoration: "none",
    color: "#000000",
    marginTop: "-10px",
    marginLeft: "-10px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      marginTop: "-5%",
      marginLeft: "-5%",
    },
  },
  description: {
    color: "#FFFFFF",
    fontSize: "1.2rem",
    margin: "20px auto !important",
    maxWidth: "70%",
    textAlign: "center",
    fontFamily: "space !important",
  },
  icon: {
    fontSize: "7rem",
  },
  textContainer: {
    justifyContent: "center",
    textAlign: "center",
    margin: "auto",
    backgroundColor: "#424242",
    borderRadius: "10px",
    width: "70.5% !important",
    minHeight: "25vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
    },
  },
}));
