import { useNavigate, useParams } from "react-router-dom";
import useMainStore from "../store/main-store";
import { calculateItemDetails } from "../utils/calculateItemDetails";
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

const SpecificProduct = () => {
  const defaultTheme = createTheme();
  const navigate = useNavigate();
  const params = useParams();
  const { salesData } = useMainStore();

  const items = calculateItemDetails(salesData);

  const itemsArray = Object.values(items);
  const productDetails = itemsArray.find((item) => item.name === params.name);

  let revenue = 0;

  if (productDetails) {
    revenue =
      parseFloat(productDetails.price.replace("$", "")) *
      productDetails.totalSold;
  }

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
                  {productDetails?.name}
                </Typography>
                <Typography sx={{ py: 1 }}>
                  Price: {productDetails?.price}
                </Typography>
                <Typography sx={{ py: 1 }}>
                  Total Sold: {productDetails?.totalSold}
                </Typography>
                <Typography sx={{ py: 1 }}>
                  Total Revenue Generated: ${revenue}
                </Typography>
                <Typography sx={{ py: 1 }}>
                  Number of customers purchased:{" "}
                  {productDetails?.customers.length}
                </Typography>
                <Typography sx={{ py: 1 }}>
                  Names of customers purchased:{" "}
                  {productDetails?.customers.join(", ")}
                </Typography>
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

export default SpecificProduct;
