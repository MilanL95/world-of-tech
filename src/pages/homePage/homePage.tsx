import { Grid, IconButton, Typography } from "@mui/material";
import { useHomePageStyle } from "./homePageStyle";

import ComputerIcon from "@mui/icons-material/Computer";
import { useState } from "react";
import WebDesignerModal from "../../features/modals/webDesignerModal";
import FrontEndDeveloperModal from "../../features/modals/frontEndModal";
import BackEndDeveloperModal from "../../features/modals/backEndDeveloperModal";
import QATester from "../../features/modals/qaTesterModal";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Header from "../../features/header/header";
import Footer from "../../features/footer/footer";
import Fade from "react-reveal/Fade";
import Asstronaut from "../../features/asstronaut/asstronaut";

const HomePage = () => {
  const classes = useHomePageStyle();
  const [webDesignerModalOpen, setWebDesignerModalOpen] = useState(false);
  const [frontEndDeveloperModalOpen, setFrontEndDeveloperModalOpen] =
    useState(false);
  const [backEndDeveloperOpen, setBackEndDeveloperOpen] = useState(false);
  const [qaTester, setQaTester] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimationPaused, setAnimationPaused] = useState(false);

  const totalNumberOfPages = 2;
  let title, content, icon;

  const toolsImages = [
    require("../../images/html-5.png"),
    require("../../images/css-3.png"),
    require("../../images/java-script.png"),
    require("../../images/typescript.png"),
    require("../../images/atom.png"),
    require("../../images/brands.png"),
    require("../../images/nodejs.png"),
    require("../../images/java.png"),
    require("../../images/c-sharp.png"),
    require("../../images/website.png"),
    require("../../images/c-.png"),
  ];

  if (currentPage === 1) {
    title = "Technologies";
    content = (
      <Typography variant="body1">
        "Technological progress continuously transforms the world and brings new
        possibilities in various spheres <br /> of life, including information
        technology, medicine, communication, transportation, industry, and many
        other fields."
      </Typography>
    );
    icon = (
      <ComputerIcon
        style={{ width: 100, height: 100, color: "rgba(0, 0, 0, 0.8)" }}
      />
    );
  } else if (currentPage === 2) {
    title = "Different Technologies";
    content = (
      <Typography variant="body1">
        "Different technological advancements shape our world and open up <br />
        new horizons in areas such as data science, renewable energy, space
        exploration, and beyond."
      </Typography>
    );
    icon = (
      <SupportAgentIcon
        style={{ width: 100, height: 100, color: "rgba(0, 0, 0, 0.8)" }}
      />
    );
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleModalWDOpen = () => {
    setWebDesignerModalOpen(true);
  };

  const handleModalWDClose = () => {
    setWebDesignerModalOpen(false);
  };

  const handleModalFEDOpen = () => {
    setFrontEndDeveloperModalOpen(true);
  };

  const handleModalFEDClose = () => {
    setFrontEndDeveloperModalOpen(false);
  };
  const handleModalBEDOpen = () => {
    setBackEndDeveloperOpen(true);
  };

  const handleModalBEDClose = () => {
    setBackEndDeveloperOpen(false);
  };

  const handleModalQAOpen = () => {
    setQaTester(true);
  };

  const handleModalQAClose = () => {
    setQaTester(false);
  };

  return (
    <Grid container>
      <Header />
      <Grid className={classes.grid} item xs={12}>
        <img
          src={require("../../images/homePageTopImg.jpg")}
          alt="background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Asstronaut />
      </Grid>
      <Grid container xs={12} className={classes.mouseIcon} alignItems="center">
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Grid item style={{ marginBottom: 10 }}>
              {icon}
            </Grid>
            <Grid item>
              <Typography
                variant="h4"
                style={{
                  fontWeight: "bold",
                  fontFamily: "cursive",
                  marginBottom: 15,
                  justifyContent: "center",
                  textAlign: "center",
                  color: "#383838",
                }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                style={{
                  fontSize: 16,
                  fontFamily: "space",
                  textAlign: "center",
                  margin: "auto",
                }}
              >
                {content}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {currentPage > 1 && (
          <Grid item style={{ marginTop: "5%" }}>
            <IconButton onClick={handlePreviousPage}>
              <ArrowBackIosIcon style={{ color: "#383838" }} />
            </IconButton>
          </Grid>
        )}
        {currentPage < totalNumberOfPages && (
          <Grid item style={{ marginTop: "5%" }}>
            <IconButton onClick={handleNextPage}>
              <ArrowForwardIosIcon style={{ color: "#383838" }} />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Grid container className={classes.imgContain}>
        <Grid>
          <Grid item className={classes.img} direction="column">
            <WebDesignerModal
              open={webDesignerModalOpen}
              onClose={handleModalWDClose}
            />
            <img
              src={require("../../images/webDesign.gif")}
              alt="background"
              style={{
                height: 150,
                width: 150,
                borderRadius: "100%",
                cursor: "pointer",
              }}
              onClick={handleModalWDOpen}
            />
            <Typography
              style={{
                fontFamily: "cursive",
                fontWeight: "bold",
                fontSize: "18px",
              }}
              className={classes.webDesign}
              onClick={handleModalWDOpen}
            >
              Web Designer
            </Typography>
          </Grid>
        </Grid>
        <Grid item className={classes.img} direction="column">
          <FrontEndDeveloperModal
            open={frontEndDeveloperModalOpen}
            onClose={handleModalFEDClose}
          />
          <img
            src={require("../../images/frontEnd.gif")}
            alt="background"
            style={{
              height: 150,
              width: 150,
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={handleModalFEDOpen}
          />
          <Typography
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            className={classes.frontEnd}
            onClick={handleModalFEDOpen}
          >
            Front-End Developer
          </Typography>
        </Grid>
        <Grid item className={classes.img} direction="column">
          <BackEndDeveloperModal
            open={backEndDeveloperOpen}
            onClose={handleModalBEDClose}
          />
          <img
            src={require("../../images/backEnd.gif")}
            alt="background"
            style={{
              height: 150,
              width: 150,
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={handleModalBEDOpen}
          />
          <Typography
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            className={classes.backEnd}
            onClick={handleModalBEDOpen}
          >
            Back-End Developer
          </Typography>
        </Grid>
        <Grid item className={classes.img} direction="column">
          <QATester open={qaTester} onClose={handleModalQAClose} />
          <img
            src={require("../../images/qaTester.gif")}
            alt="background"
            style={{
              height: 150,
              width: 150,
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={handleModalQAOpen}
          />
          <Typography
            style={{
              fontFamily: "cursive",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            className={classes.qaTester}
            onClick={handleModalQAOpen}
          >
            QA Tester
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.container}
          justifyContent="center"
          textAlign="center"
        >
          <Fade top>
            <Typography
              variant="h3"
              align="center"
              className={classes.title}
              style={{ fontFamily: "cursive" }}
            >
              Programming Tools
            </Typography>
            <Typography
              className={classes.text}
              style={{ fontFamily: "space" }}
            >
              <br />
              Programming tools are crucial for software development, providing
              developers with the necessary resources to streamline their
              workflow, enhance productivity, and build high-quality
              applications.
              <br />
              <br />
              These tools include IDEs, code editors, VCS, package managers,
              testing frameworks, debuggers, and performance monitoring tools.
              IDEs offer comprehensive features like code editing, debugging,
              and build automation, while code editors provide focused editing
              capabilities. VCS tools enable code collaboration and version
              control, package managers simplify library management, testing
              frameworks ensure software quality, debuggers help identify and
              fix issues, and performance monitoring tools optimize application
              performance.
              <br />
              <br />
              Mastering these tools significantly contributes to successful
              software development projects, empowering developers to create
              efficient and reliable applications.
            </Typography>
          </Fade>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          className={classes.marqueeContainer}
          onMouseEnter={() => setAnimationPaused(true)}
          onMouseLeave={() => setAnimationPaused(false)}
        >
          <Grid
            className={`${classes.marqueeWrapper} ${
              isAnimationPaused ? classes.marqueePaused : ""
            }`}
          >
            {toolsImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={classes.toolItemImage}
              />
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
