import { Grid, Typography } from "@material-ui/core";
import { useAboutPageStyle } from "./aboutPageStyle";
import { Link } from "react-router-dom";
import "./aboutPageStyle.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { IoArrowBackCircle } from "react-icons/io5";

const AboutPage = () => {
  const classes = useAboutPageStyle();
  return (
    <Grid
      container
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9))",
      }}
    >
      <Grid item container xs={12} md={6}>
        <Grid className={classes.linkContainer}>
          <Link className={classes.link} to={"/home"}>
            <IoArrowBackCircle size={35} style={{ color: "#FFFFFF" }} />
          </Link>
        </Grid>
        <img
          src={require("../../images/aboutImg.jpg")}
          alt="background"
          className={classes.responsiveImage}
        />
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={6}
        direction="column"
        alignItems="flex-start"
        className={classes.container}
      >
        <Grid item className={classes.textContainer}>
          <Typography variant="h2" className={classes.aboutUsTitle}>
            About Us
          </Typography>
          <Typography variant="body1" className={classes.aboutUsText}>
            Welcome to our technology-focused company! We are dedicated to
            leveraging the power of technology to transform businesses and drive
            innovation. With our team of experts and cutting-edge solutions, we
            strive to deliver exceptional results and help our clients stay
            ahead in the digital era. Our mission is to empower organizations
            with the latest technological advancements and provide them with
            strategic guidance to thrive in the ever-evolving digital landscape.
            We specialize in developing customized software solutions,
            implementing robust infrastructure, and optimizing digital processes
            for maximum efficiency.
            <br />
            <br />
            At our core, we value innovation, collaboration, and customer
            satisfaction. We believe in building long-term partnerships with our
            clients, understanding their unique challenges, and delivering
            tailor-made solutions that align with their goals and objectives.
            With a strong track record of successful projects and a team of
            passionate professionals, we are confident in our ability to drive
            digital transformation and help businesses unlock their full
            potential. Join us on this exciting journey and experience the power
            of technology to fuel your success. Contact us today to learn more
            about our services and how we can assist you in achieving your
            digital aspirations.
          </Typography>
        </Grid>

        <Grid className="card-container">
          <Grid className="card">
            <Grid className="card-front">
              <img
                src={require("../../images/cardOne.jpg")}
                alt="background"
                className="card-img"
              />
            </Grid>
            <Grid className="card-back">
              <Typography>
                "Unlocking business potential through innovative technology
                solutions. Transforming industries and driving growth."
              </Typography>
            </Grid>
          </Grid>
          <Grid className="card">
            <Grid className="card-front">
              <img
                src={require("../../images/cardTwo.jpg")}
                style={{ height: 310 }}
                alt="background"
                className="card-img"
              />
            </Grid>
            <Grid className="card-back">
              <Typography>
                "Collaborative approach to deliver exceptional results.
                Tailor-made solutions aligned with your goals and objectives."
              </Typography>
            </Grid>
          </Grid>
          <Grid className="card">
            <Grid className="card-front">
              <img
                src={require("../../images/cardThree.jpg")}
                style={{ height: 310 }}
                alt="background"
                className="card-img"
              />
            </Grid>
            <Grid className="card-back">
              <Typography>
                "Maximizing efficiency with optimized digital processes.
                Implementing robust infrastructure for sustainable success."
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="center" className="icon-container">
          <Grid item>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="social-icon instagram-icon" />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="social-icon facebook-icon" />
            </a>
          </Grid>
          <Grid item>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon className="social-icon twitter-icon" />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutPage;