import { useState } from "react";
import { Typography } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ComputerIcon from "@mui/icons-material/Computer";

export const useHomePageFunctionalities = () => {
  const [webDesignerModalOpen, setWebDesignerModalOpen] =
    useState<boolean>(false);
  const [frontEndDeveloperModalOpen, setFrontEndDeveloperModalOpen] =
    useState<boolean>(false);
  const [backEndDeveloperOpen, setBackEndDeveloperOpen] =
    useState<boolean>(false);
  const [qaTester, setQaTester] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isAnimationPaused, setAnimationPaused] = useState<boolean>(false);

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
    title = (
      <Typography
        variant="h4"
        style={{ color: "rgba(0, 0, 0, 0.7)", fontFamily: "cursive" }}
      >
        Technologies
      </Typography>
    );
    content = (
      <Typography variant="body2">
        "Technological progress continuously transforms the world and brings new
        possibilities in various spheres <br /> of life, including information
        technology, medicine, communication, transportation, industry, and many
        other fields."
      </Typography>
    );
    icon = (
      <ComputerIcon
        style={{ width: 100, height: 100, color: "rgba(0, 0, 0, 0.7)" }}
      />
    );
  } else if (currentPage === 2) {
    title = (
      <Typography
        variant="h4"
        style={{ color: "rgba(0, 0, 0, 0.7)", fontFamily: "cursive" }}
      >
        Different Technologies
      </Typography>
    );
    content = (
      <Typography variant="body2">
        "Different technological advancements shape our world and open up <br />
        new horizons in areas such as data science, renewable energy, space
        exploration, and beyond."
      </Typography>
    );
    icon = (
      <SupportAgentIcon
        style={{ width: 100, height: 100, color: "rgba(0, 0, 0, 0.7)" }}
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

  return {
    title,
    content,
    icon,
    toolsImages,
    webDesignerModalOpen,
    frontEndDeveloperModalOpen,
    backEndDeveloperOpen,
    qaTester,
    currentPage,
    isAnimationPaused,
    handleNextPage,
    handlePreviousPage,
    handleModalWDOpen,
    handleModalWDClose,
    handleModalFEDOpen,
    handleModalFEDClose,
    handleModalBEDOpen,
    handleModalBEDClose,
    handleModalQAOpen,
    handleModalQAClose,
    setAnimationPaused,
    totalNumberOfPages,
  };
};

export default useHomePageFunctionalities;
