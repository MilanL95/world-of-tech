import { Grid, IconButton, Typography } from "@mui/material";
import { useFooterStyle } from "./footerStyle";
import LanguageIcon from "@mui/icons-material/Language";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import Popover from "@material-ui/core/Popover";
import { useState } from "react";

const Footer = () => {
  const classes = useFooterStyle();

  const [languageIcon, setLanguageIcon] = useState(null);
  const [callingIcon, setCallingIcon] = useState(null);
  const [wiFiIcon, setWiFiIcon] = useState(null);

  const handleClickLanguageIcon = (event: any) => {
    setLanguageIcon(event.currentTarget);
    setTimeout(() => {
      setLanguageIcon(null);
    }, 2000);
  };

  const handleClickCallingIcon = (event: any) => {
    setCallingIcon(event.currentTarget);
    setTimeout(() => {
      setCallingIcon(null);
    }, 5000);
  };

  const handleClickWiFiIcon = (event: any) => {
    setWiFiIcon(event.currentTarget);
    setTimeout(() => {
      setWiFiIcon(null);
    }, 2000);
  };

  const openLanguage = Boolean(languageIcon);
  const openCalling = Boolean(callingIcon);
  const openWiFi = Boolean(wiFiIcon);

  const id = openLanguage ? "simple-popover" : undefined;
  const id_1 = openCalling ? "simple-popover" : undefined;
  const id_2 = openWiFi ? "simple-popover" : undefined;

  return (
    <Grid container className={classes.footerContainer}>
      <Grid item xs={12}>
        <Grid className={classes.iconContainer}>
          <IconButton onClick={handleClickLanguageIcon}>
            <LanguageIcon className={classes.icon} />
            <Popover
              id={id}
              open={openLanguage}
              anchorEl={languageIcon}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              PaperProps={{
                style: {
                  color: "#ffffff",
                  width: "200px",
                  height: "25px",
                  textAlign: "center",
                  borderRadius: "10px",
                  backgroundColor: "rgba(150, 0, 0, 0.8)",
                },
              }}
            >
              <Typography style={{ fontFamily: "space" }}>
                Network problems
              </Typography>
            </Popover>
          </IconButton>
          <IconButton onClick={handleClickWiFiIcon}>
            <WifiIcon className={classes.icon} />
            <Popover
              id={id_2}
              open={openWiFi}
              anchorEl={wiFiIcon}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              PaperProps={{
                style: {
                  color: "#ffffff",
                  width: "200px",
                  height: "25px",
                  textAlign: "center",
                  borderRadius: "10px",
                  backgroundColor: "rgba(0, 150, 0, 0.8)",
                },
              }}
            >
              <Typography style={{ fontFamily: "space" }}>
                Network available
              </Typography>
            </Popover>
          </IconButton>
          <IconButton onClick={handleClickCallingIcon}>
            <WifiCalling3Icon className={classes.icon} />
            <Popover
              id={id_1}
              open={openCalling}
              anchorEl={callingIcon}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              PaperProps={{
                style: {
                  marginTop: "10px",
                  color: "#ffffff",
                  width: "200px",
                  height: "50px",
                  textAlign: "center",
                  borderRadius: "10px",
                  backgroundColor: "#000000",
                },
              }}
            >
              <Typography style={{ fontFamily: "space" }}>
                Contact us : <br />
                0111 - 335 - 336
              </Typography>
            </Popover>
          </IconButton>
        </Grid>
        <Typography variant="body2" className={classes.footerText}>
          &copy; {new Date().getFullYear()} TechHub Solutions.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
