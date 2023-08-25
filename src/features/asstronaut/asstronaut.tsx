import { Grid } from "@mui/material";
import "./asstronautStyle.css";

const Asstronaut = () => {
  return (
    <Grid container className="container">
      <Grid className="astronaut">
        <Grid className="head"></Grid>
        <Grid className="arm arm-left"></Grid>
        <Grid className="arm arm-right"></Grid>
        <Grid className="body">
          <Grid className="panel"></Grid>
        </Grid>
        <Grid className="leg leg-left"></Grid>
        <Grid className="leg leg-right"></Grid>
        <Grid className="schoolbag"></Grid>
      </Grid>
    </Grid>
  );
};

export default Asstronaut;
