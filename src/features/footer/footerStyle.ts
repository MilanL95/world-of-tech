import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";

export const useFooterStyle = makeStyles((theme: Theme) => ({
  // Footer Container Styles
  footerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "#FFF",
    width: "100%",
  },
  // Text Styles
  footerText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  // Icon Styles
  iconContainer: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    fontSize: 24,
    color: "#FFFFFF",
    margin: "0 10px",
  },
}));
