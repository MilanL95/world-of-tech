import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material/styles";

export const useSolutionsPageStyle = makeStyles((theme: Theme) => ({
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
    marginTop: "-5px",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
      marginTop: "-2.5%",
      marginLeft: "-2.5%",
    },
  },
  tableContainer: {
    width: "95% !important",
    margin: "auto",
    marginTop: "5%",
    marginBottom: "1%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5%",
    },
  },
  table: {
    minWidth: 400,
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "#FFFFFF",
    textAlign: "center",
  },
  tableCell: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    textAlign: "center",
  },
}));
