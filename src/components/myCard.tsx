import React, { useState } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

interface CardProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

const useCardStyle = makeStyles({
  card: {
    backgroundColor: "#424242 !important",
    color: "#FFFFFF !important",
    textAlign: "center",
    borderRadius: "15px !important",
    minHeight: "30vh",
    width: "70%",
    margin: "auto",
    marginTop: "5%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    transformStyle: "preserve-3d",
    perspective: "1000px",
  },
  cardContent: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    transition: "transform 0.5s",
  },
  frontCardContent: {
    transform: "rotateY(0deg)",
    transition: "transform 0.5s",
  },
  backCardContent: {
    transform: "rotateY(180deg)",
    transition: "transform 0.5s",
  },

  iconContainer: {
    backgroundColor: "#000000",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
  },
  body: {
    fontSize: "1.2rem !important",
    margin: "10px 20px",
    textAlign: "center",
  },
  cardFlipped: {
    transform: "rotateY(180deg)",
  },
});

const MyCard: React.FC<CardProps & { iconColor?: string }> = ({
  children,
  icon,
  iconColor,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const classes = useCardStyle();

  const handleCardClick = () => {
    setTimeout(() => {
      setIsFlipped(!isFlipped);
    }, 500);

    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      className={`${classes.card} ${isFlipped ? classes.cardFlipped : ""}`}
      onClick={handleCardClick}
    >
      <CardContent
        className={`${classes.cardContent} ${
          isFlipped ? classes.backCardContent : classes.frontCardContent
        }`}
      >
        {!isFlipped ? (
          <Grid
            className={`${classes.iconContainer}`}
            style={{ backgroundColor: iconColor }}
          >
            {icon}
          </Grid>
        ) : (
          <Typography variant="body2" className={classes.body}>
            {children}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MyCard;
