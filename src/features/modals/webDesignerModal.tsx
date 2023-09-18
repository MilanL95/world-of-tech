import { Typography, makeStyles } from "@material-ui/core";
import { Button, Grid } from "@mui/material";
import { useEffect, useRef } from "react";

interface ModalWDProps {
  open: boolean;
  onClose: () => void;
}

const useWebDesignerModalStyle = makeStyles((theme: any) => ({
  // Modal Styles
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
  // Modal Content Styles
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
    overFlow: "auto",
    [theme.breakpoints.down("sm")]: {
      height: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "35%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "55%",
    },
    "@media (max-width: 280px)": {
      width: "90%",
      height: "85%",
    },
  },
  // Typography Styles
  wdModalTitle: {
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
  descriptionWD: {
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
  // Button Styles
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

function WebDesignerModal({ open, onClose }: ModalWDProps) {
  const classes = useWebDesignerModalStyle();
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
        <Typography variant="h6" className={classes.wdModalTitle}>
          Web Designer
        </Typography>
        <Typography variant="body1" className={classes.descriptionWD}>
          A web designer is a professional who combines creativity and technical
          skills to create visually appealing and functional websites. Their job
          is to shape the user experience by creating intuitive and
          aesthetically pleasing designs that attract visitors and enable easy
          navigation. Web designers use their skills in designing graphic
          elements, typography, colors, and layouts to create an attractive look
          for websites. They also understand the importance of responsive design
          to ensure that the pages adapt to different devices and screen sizes.
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

export default WebDesignerModal;
