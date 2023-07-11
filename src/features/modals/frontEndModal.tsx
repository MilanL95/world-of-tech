import { Typography, makeStyles } from "@material-ui/core";
import { Button, Grid } from "@mui/material";
import { useEffect, useRef } from "react";

interface ModalFEDProps {
  open: boolean;
  onClose: () => void;
}

const useFrontEndDeveloperStyle = makeStyles((theme: any) => ({
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  fedModalTitle: {
    textAlign: "center",
    fontFamily: "space",
    fontSize: "32px",
    backgroundColor: "rgba(0, 0, 0, 0.8) !important",
    color: "#FFFFFF",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: 24,
    },
  },
  modalContent: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "5px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    padding: theme.spacing(2, 4, 3),
    maxWidth: 500,
    width: "80%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "65%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "32%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "55%",
    },
    "@media (max-width: 280px)": {
      width: "80%",
      height: "75%",
    },
  },
  descriptionFED: {
    textAlign: "center",
    fontFamily: "space",
    fontSize: 18,
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "10px !important",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "18px !important",
    },
  },
  buttonContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.8) !important",
    color: "#FFFFFF !important",
    width: "120px",
    height: "26px",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#000000 !important",
    },
  },
}));

function FrontEndDeveloperModal({ open, onClose }: ModalFEDProps) {
  const classes = useFrontEndDeveloperStyle();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <Grid container className={classes.modal}>
      <Grid ref={modalRef} className={classes.modalContent}>
        <Typography variant="h6" className={classes.fedModalTitle}>
          Front-End Developer
        </Typography>
        <Typography variant="body1" className={classes.descriptionFED}>
          A Front End Developer is responsible for designing and building the
          user interface of a website or web application. They work with HTML,
          CSS, and JavaScript to create visually appealing layouts, implement
          interactive features, and optimize the performance of the front-end
          components. Their goal is to create an engaging and seamless user
          experience by ensuring the website is visually appealing,
          user-friendly, and responsive across different devices and browsers.
        </Typography>
        <Grid className={classes.buttonContainer}>
          <Button onClick={onClose} className={classes.button}>
            Close
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FrontEndDeveloperModal;
