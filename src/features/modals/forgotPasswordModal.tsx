import { useState } from "react";
import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useForgotPasswordStyle = makeStyles((theme) => ({
  modalContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#F8F8FF",
    padding: "20px",
    borderRadius: "20px",
    animation: "wave 3s infinite",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  textField: {
    width: "100%",
    marginBottom: "10px",
    "& label.Mui-focused": {
      color: "#000000",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#000000",
    },
  },
  labelRoot: {
    color: "#000000 !important",
  },
  errorText: {
    color: "#FF0000",
  },
  forgotPass: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "17.5px !important",
    },
  },
}));

const ForgotPasswordModal = () => {
  const classes = useForgotPasswordStyle();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleForgotPassword = () => {
    if (!email.includes("@")) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    console.log("Sending forgot password request...");
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <span
        style={{
          fontSize: "18px",
          color: "#000000",
          textDecoration: "underline",
          cursor: "pointer",
          marginTop: "5%",
          fontFamily: "space",
        }}
        className={classes.forgotPass}
        onClick={handleOpen}
      >
        Forgot password ?
      </span>
      <Modal open={open} onClose={handleClose}>
        <Grid className={classes.modalContainer}>
          <Typography
            variant="h5"
            style={{
              marginBottom: "20px",
              color: "#000000",
              fontFamily: "space",
            }}
          >
            Forgot Password?
          </Typography>
          <TextField
            label="E-mail"
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
            helperText={emailError && "Please enter a valid email !"}
            InputLabelProps={{
              classes: {
                root: emailError ? classes.errorText : classes.labelRoot,
              },
            }}
            className={classes.textField}
          />
          <Button
            variant="contained"
            onClick={handleForgotPassword}
            style={{
              backgroundColor: "#000000",
              color: "white",
              marginTop: 15,
              borderRadius: 20,
            }}
          >
            Reset Password
          </Button>
        </Grid>
      </Modal>
      {/* <style>
        {`
        @keyframes wave {
            0% { transform: translate(-50%, -50%) translateX(-30px); }
            25% { transform: translate(-50%, -50%) translateX(0); }
            50% { transform: translate(-50%, -50%) translateX(30px); }
            75% { transform: translate(-50%, -50%) translateX(0); }
            100% { transform: translate(-50%, -50%) translateX(-30px); }
          }
        `}
      </style> */}
    </Grid>
  );
};

export default ForgotPasswordModal;
