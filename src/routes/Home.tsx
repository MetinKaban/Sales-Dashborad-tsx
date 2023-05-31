import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../components/homepage/Chart";
import Deposits from "../components/homepage/Piechart";
import Orders from "../components/homepage/Orders";
import { Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { useFetchSalesData } from "../hooks/useFetchSalesData";
import { useEffect } from "react";
import useMainStore from "../store/main-store";

export default function Home() {
  const defaultTheme = createTheme();
  const { salesData } = useMainStore();
  const fetchData = useFetchSalesData();

  useEffect(() => {
    const fetchSalesData = async () => {
      await fetchData();
    };
    if (salesData.length === 0) {
      fetchSalesData();
    }
  }, [salesData.length, fetchData]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: "85vh",
            overflow: "auto",
            mb: 2,
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 1, mb: 1 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Typography
                  component={"h3"}
                  variant="h6"
                  textAlign={"center"}
                  fontSize={16}
                >
                  Total sales each day
                </Typography>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                    border: "1px solid #1C4E80",
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              {/* Sale Distribution */}
              <Grid item xs={16} md={4} lg={3}>
                <Typography
                  component={"h3"}
                  variant="h6"
                  textAlign={"center"}
                  fontSize={16}
                >
                  Sale distribution of each product
                </Typography>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 240,
                    border: "1px solid #1C4E80",
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
              {/* Sales History */}
              <Grid item xs={12}>
                <Typography
                  component={"h3"}
                  variant="h6"
                  textAlign={"center"}
                  fontSize={16}
                >
                  Sales history
                </Typography>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    height: 280,
                    overflow: "auto",
                    border: "1px solid #1C4E80",
                  }}
                >
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
