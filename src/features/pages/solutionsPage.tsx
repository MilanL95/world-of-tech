import {
  Typography,
  Paper,
  Grid,
  Box,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSolutionsPageStyle } from "./solutionsPageStyle";
import { IoArrowBackCircle } from "react-icons/io5";
import Chart from "react-apexcharts";
import Footer from "../../components/footer";

const chartOptions = {
  chart: {
    id: "solutions-chart",
    toolbar: {
      show: true,
    },
  },
  xaxis: {
    categories: [
      "Intelligent Automation",
      "Secure Cloud Storage",
      "Customer Engagement Platform",
    ],
  },
  colors: ["rgba(0, 0, 0, 0.8)"],
  plotOptions: {
    bar: {
      horizontal: true,
      borderRadius: 4,
      dataLabels: {
        position: "top",
      },
    },
  },
  tooltip: {
    shared: false,
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 0.8,
      },
    },
    active: {
      filter: {
        type: "darken",
        value: 0.9,
      },
    },
  },
};

const chartSeries = [
  {
    name: "Number of Users",
    data: [500, 650, 1200],
    barHeight: "80%",
  },
];

const SolutionsPage = () => {
  const classes = useSolutionsPageStyle();
  return (
    <>
      <Box
        style={{
          paddingTop: "16px",
          paddingLeft: "16px",
          paddingRight: "16px",
          backgroundImage: `url(${require("../../images/solutions.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <Grid className={classes.linkContainer}>
          <Link className={classes.link} to={"/home"}>
            <IoArrowBackCircle size={35} style={{ color: "#FFFFFF" }} />
          </Link>
        </Grid>
        <Box my={4}>
          <Typography variant="h2" align="center" style={{ color: "#FFFFFF" }}>
            Innovative Solutions for Tomorrow
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ color: "#FFFFFF" }}
          >
            We strive to provide groundbreaking and tailored solutions to drive
            your business forward.
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              style={{
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <Typography variant="h6">Intelligent Automation</Typography>
              <Typography variant="body1">
                Leverage our solution built with advanced machine learning
                algorithms to automate your repetitive tasks, freeing up your
                time to focus on what truly matters.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              style={{
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <Typography variant="h6">Secure Cloud Storage</Typography>
              <Typography variant="body1">
                Secure your valuable data with our robust and encrypted cloud
                storage solution, providing you the unparalleled freedom to
                access your data anytime, anywhere.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Paper
              elevation={3}
              style={{
                padding: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <Typography variant="h6">Customer Engagement Platform</Typography>
              <Typography variant="body1">
                Enhance your customer interactions with our technologically
                advanced customer engagement platform. Engage, understand, and
                serve your customers better than ever before.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Grid>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table}>
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>
                  Product
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Features
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Pricing
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCell}>
                  Intelligent Automation
                </TableCell>
                <TableCell className={classes.tableCell}>
                  Advanced machine learning algorithms
                </TableCell>
                <TableCell className={classes.tableCell}>
                  Starting at $99/month
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCell}>
                  Secure Cloud Storage
                </TableCell>
                <TableCell className={classes.tableCell}>
                  Robust and encrypted storage solution
                </TableCell>
                <TableCell className={classes.tableCell}>
                  Starting at $49/month
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.tableCell}>
                  Customer Engagement Platform
                </TableCell>
                <TableCell className={classes.tableCell}>
                  Enhanced customer interaction tools
                </TableCell>
                <TableCell className={classes.tableCell}>
                  Starting at $79/month
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Chart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={250}
          width="97%"
          style={{ marginBottom: "3.5%" }}
        />
      </Grid>
      <Footer />
    </>
  );
};

export default SolutionsPage;
