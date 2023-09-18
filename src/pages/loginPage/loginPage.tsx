import { Button, TextField, Grid, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import ForgotPasswordModal from "../../features/modals/forgotPasswordModal";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
    maxWidth: "450px",
    "& label.Mui-focused": { color: "#000000" },
    "& .MuiInput-underline:after": { borderBottomColor: "#000000" },
    [theme.breakpoints.down("sm")]: {
      "& label": { fontSize: "0.85rem" },
    },
  },
  labelRoot: { color: "#000000 !important" },
  errorText: { color: "#FF0000" },
  loginImg: { width: "100%", height: "100%", objectFit: "cover" },
  headerLarge: {
    fontFamily: "cursive !important",
    marginBottom: "4% !important",
    [theme.breakpoints.down("sm")]: { fontSize: "2rem !important" },
  },
  headerSmall: {
    fontFamily: "cursive !important",
    marginBottom: "4% !important",
    [theme.breakpoints.down("sm")]: { fontSize: "1.5rem !important" },
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const handleLogin = () => {
    setEmailError(!email.includes("@"));
    setPasswordError(password.length < 6);

    if (!emailError && !passwordError) navigate("/home");
  };

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      style={{ height: "101.3vh" }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        style={{
          display: "flex",
        }}
      >
        <img
          src={require("../../images/loginPageImage.jpg")}
          alt="background"
          className={classes.loginImg}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={6}
        style={{
          backgroundColor: "#F8F8FF",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          textAlign="center"
          style={{ padding: "20px", marginBottom: "10%" }}
        >
          <Grid item xs={12}>
            <Typography variant="h2" className={classes.headerLarge}>
              Our World
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.headerSmall}>
              The world of technology !
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              variant="standard"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={passwordError}
              helperText={
                passwordError && "Password must have at least 6 characters !"
              }
              InputLabelProps={{
                classes: {
                  root: emailError ? classes.errorText : classes.labelRoot,
                },
              }}
              className={classes.textField}
              style={{ marginTop: 20, marginBottom: 20 }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ForgotPasswordModal />
          </Grid>
          <Grid item xs={12}>
            <Button
              onClick={handleLogin}
              style={{
                backgroundColor: "#000000",
                color: "white",
                height: "35px",
                borderRadius: "20px",
                width: "100%",
                maxWidth: "225px",
                marginTop: "4.5%",
              }}
            >
              <LoginIcon style={{ marginRight: "10px" }} />
              Login
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
