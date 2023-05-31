import {
  Box,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";

import { useEffect } from "react";
import { useNavigate } from "react-router";
import useMainStore from "../store/main-store";
import DeatiledSalesTable from "../components/sales/DeatiledSalesTable";

const Sales = () => {
  const defaultTheme = createTheme();
  const { salesData } = useMainStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!salesData.length) {
      navigate("/");
    }
  }, [salesData.length, navigate]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: "90vh",
            overflow: "auto",
            mb: 1,
            mt: -3,
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 1, mb: 5 }}>
            <Grid container>
              <Grid item>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    overflow: "auto",
                    border: "1px solid #1C4E80",
                  }}
                >
                  <DeatiledSalesTable />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Sales;
