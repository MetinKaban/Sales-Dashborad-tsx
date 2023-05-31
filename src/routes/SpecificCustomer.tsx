import { Link, useNavigate, useParams } from "react-router-dom";
import useMainStore from "../store/main-store";
import { getCustomerData } from "../utils/getCustomerData";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  Typography,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const SpecificCustomer = () => {
  const defaultTheme = createTheme();
  const navigate = useNavigate();
  const params = useParams();
  const {salesData} = useMainStore()

  const customers = getCustomerData(salesData);

  const customerDetails = customers.find((c) => c.customerName === params.name);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container sx={{ py: 5 }} maxWidth="md">
          <Grid item md>
            <Card
              sx={{
                minHeight: "200px",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                border: "1px solid #1C4E80",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="h2"
                  textAlign={"center"}
                >
                  {customerDetails?.customerName}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "350px",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 3,
                  }}
                >
                  <Typography sx={{ py: 1 }} variant="h5">
                    Items Sold:
                  </Typography>
                  <Box>
                    {customerDetails?.boughtItems.map((i, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          display: "flex",
                          width: "200px",
                          alignItems: "center",
                          border: "1px solid  #1C4E80",
                          padding: "5px 10px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "100px",
                            minHeight: "30px",
                            textDecoration: "underline",
                          }}
                        >
                          <Link to={`/products/${i.item}`}>{i.item}</Link>
                        </Box>
                        <Box
                          sx={{
                            width: "100px",
                            minHeight: "30px",
                            textAlign: "right",
                          }}
                        >
                          {i.amount}
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </CardContent>
              <CardActions
                sx={{ py: 1, display: "flex", justifyContent: "center" }}
              >
                <Button onClick={() => navigate(-1)}>Go Back</Button>
              </CardActions>
            </Card>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default SpecificCustomer;
