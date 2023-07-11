import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";

export const useFooterStyle = makeStyles((theme: Theme) => ({
  footerContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#FFF",
    width: "100%",
  },
  footerText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
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
