import { useHeaderStyle } from "./headerStyle";
import {
  Box,
  Grid,
  InputBase,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

const Header = () => {
  const classes = useHeaderStyle();
  
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box
      sx={{ flexGrow: 1 }}
      className={`${classes.box} ${scrolled ? classes.scrolledBox : ""}`}
    >
      <Grid container className={classes.toolbar}>
        <Grid item xs={6} sm={4}>
          <IconButton onClick={toggleMenu}>
            <MenuIcon style={{ color: "#FFFFFF", fontSize: 30 }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={menuOpen}
            onClose={toggleMenu}
            classes={{ paper: classes.drawer }}
          >
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <IconButton
                onClick={toggleMenu}
                style={{
                  color: "#8B0000",
                  alignSelf: "flex-start",
                }}
              >
                <CloseIcon />
              </IconButton>
              <List className={classes.linkContainer}>
                <ListItem>
                  <ListItemText
                    primary="About"
                    classes={{ primary: classes.listItemText }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Services"
                    classes={{ primary: classes.listItemText }}
                  />
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText
                    primary="Solutions"
                    classes={{ primary: classes.listItemText }}
                  />
                </ListItem>
                <Divider />
              </List>
              <Grid
                style={{
                  marginTop: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <List>
                  <Divider />
                  <ListItem component={Link} to={"/"}>
                    <ListItemText
                      primary="Logout"
                      classes={{ primary: classes.listItemText }}
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Drawer>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.searchContainer}>
          <Grid className={classes.search}>
            <Grid className={classes.searchIcon}>
              <SearchIcon />
            </Grid>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              style={{ color: "#FFFFFF" }}
              placeholder="Search..."
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
