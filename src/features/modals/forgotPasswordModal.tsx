import { useState } from "react";
import { Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useForgotPasswordStyle = makeStyles((theme) => ({
  // Modal Container Styles
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
  // TextField Styles
  textField: {
    width: "100%",
    marginBottom: "10px",
    "& label.Mui-focused": {
      color: "rgba(0, 0, 0, 0.7)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#000000",
    },
    [theme.breakpoints.down("sm")]: {
      "& label": {
        fontSize: "0.85rem",
      },
    },
  },
  labelRoot: {
    color: "rgba(0, 0, 0, 0.7) !important",
  },
  errorLabel: {
    "&.Mui-focused": {
      color: "#FF0000 !important",
    },
  },
  // Error Text Styles
  errorText: {
    color: "#FF0000",
  },
  // Typography Styles
  forgotPass: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px !important",
    },
  },
}));

const ForgotPasswordModal = () => {
  const classes = useForgotPasswordStyle();
  
  const [open, setOpen] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const emailIsValid = (email: any) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleForgotPassword = () => {
    setButtonClicked(true);
    const isValidEmail = email.includes("@") && email.includes(".");
    setEmailError(!isValidEmail);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setEmailError(false);
    setButtonClicked(false);
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <span
        style={{
          fontSize: "18px",
          color: "#000000",
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
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(!emailIsValid(e.target.value));
            }}
            error={buttonClicked && emailError}
            helperText={emailError && "Please enter a valid email !"}
            InputLabelProps={{
              classes: {
                root:
                  buttonClicked && emailError
                    ? `${classes.errorText} ${classes.errorLabel}`
                    : classes.labelRoot,
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
    </Grid>
  );
};

export default ForgotPasswordModal;
