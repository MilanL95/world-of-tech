import { useServicesPageStyle } from "./servicesPageStyle";
import { Grid, Typography } from "@mui/material";
import MyCard from "../../features/card/myCard";
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdSettings, MdBuild, MdLock } from "react-icons/md";
import Fade from "react-reveal/Fade";
import Footer from "../../features/footer/footer";

const ServicesPage = () => {
  const classes = useServicesPageStyle();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={12} md={12} className={classes.imgContainer}>
          <Grid className={classes.linkContainer}>
            <Link className={classes.link} to={"/home"}>
              <IoArrowBackCircle size={35} style={{ color: "#FFFFFF" }} />
            </Link>
          </Grid>
          <Grid className={classes.textContainer}>
            <Fade top>
              <Typography variant="h4" className={classes.title}>
                - Our Services -
              </Typography>
              <Typography variant="h6" className={classes.description}>
                Explore our comprehensive range of technology services tailored
                to meet your needs. We specialize in cutting-edge solutions that
                empower businesses and individuals to thrive in the digital age.
                Our team of skilled professionals is dedicated to delivering
                high-quality results and exceeding client expectations.
              </Typography>
            </Fade>
          </Grid>
          <img
            src={require("../../images/services.png")}
            alt="background"
            className={classes.image}
          />
          <Grid container spacing={3} style={{ marginBottom: "2%" }}>
            <Grid item xs={12} sm={4}>
              <MyCard icon={<MdSettings className={classes.icon} />}>
                This is the first card. It represents our service related to
                settings and configurations.
              </MyCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <MyCard icon={<MdBuild className={classes.icon} />}>
                This is the second card. It represents our service related to
                using a wrench key for tightening and loosening screws.
              </MyCard>
            </Grid>
            <Grid item xs={12} sm={4}>
              <MyCard icon={<MdLock className={classes.icon} />}>
                This is the third card. It represents our service related to
                security and access control.
              </MyCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default ServicesPage;
