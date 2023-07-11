import { Typography, makeStyles } from "@material-ui/core";
import { Button, Grid } from "@mui/material";
import { useEffect, useRef } from "react";

interface ModalQAProps {
  open: boolean;
  onClose: () => void;
}

const useQATesterStyle = makeStyles((theme: any) => ({
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
  qaModalTitle: {
    textAlign: "center",
    fontFamily: "space",
    fontSize: "32px",
    backgroundColor: "rgba(0, 0, 0, 0.8) !important",
    width: "100%",
    position: "absolute",
    color: "#FFFFFF",
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
      height: "55%",
    },
    [theme.breakpoints.up("sm")]: {
      height: "30%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "50%",
    },
    "@media (max-width: 280px)": {
      width: "80%",
      height: "75%",
    },
  },
  descriptionQA: {
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

function QATester({ open, onClose }: ModalQAProps) {
  const classes = useQATesterStyle();
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
        <Typography variant="h6" className={classes.qaModalTitle}>
          QA Tester
        </Typography>
        <Typography variant="body1" className={classes.descriptionQA}>
          A QA Tester plays a critical role in the software development process
          by meticulously testing and evaluating applications to ensure they
          meet quality standards. They design and execute test cases, analyze
          test results, and collaborate with the development team to address any
          identified issues, ultimately ensuring the delivery of a reliable and
          high-quality software product.
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

export default QATester;
