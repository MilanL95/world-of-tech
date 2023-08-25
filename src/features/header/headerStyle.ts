import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";

export const useHeaderStyle = makeStyles((theme: Theme) => ({
  box: {
    width: "100%",
    position: "fixed",
    zIndex: 1000,
    transition: "background-color 0.3s, box-shadow 0.3s, opacity 0.3s",
    opacity: 1,
  },
  scrolledBox: {
    width: "100%",
    transition: "background-color 0.3s, box-shadow 0.3s, opacity 0.3s",
    opacity: 0,
    top: 0,
    left: 0,
    zIndex: 999,
  },
  toolbar: {
    height: "50px",
    backgroundColor: "rgba(56, 56, 56, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(0, 2),
  },
  linkContainer: {
    marginLeft: "auto !important",
    marginRight: "auto !important",
  },
  drawer: {
    width: 180,
  },
  listItemText: {
    fontSize: "24px !important",
    fontFamily: "space !important",
    color: "rgba(0, 0, 0, 0.8)",
    "&:focus, &:hover": {
      textDecoration: "underline",
      fontSize: "26px !important",
    },
    "&:active": {
      color: "#000000",
    },
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  search: {
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#FFFFFF",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    marginLeft: "30%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    "&::placeholder": {
      color: "#FFFFFF !important",
    },
  },
}));
