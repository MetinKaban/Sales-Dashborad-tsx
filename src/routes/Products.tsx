import { ThemeProvider } from "@emotion/react";
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
import { Link, useNavigate } from "react-router-dom";
import useMainStore from "../store/main-store";
import { useEffect } from "react";

type Item = {
  Item: string;
  ItemPrice: string;
};

const Products = () => {
  const defaultTheme = createTheme();
  const { salesData } = useMainStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!salesData.length) {
      navigate("/");
    }
  }, [salesData.length, navigate]);

  const items: { [key: string]: string } = {};

  salesData.forEach((sale) => {
    sale.Items.forEach((item) => {
      if (!items.hasOwnProperty(item.Item)) {
        items[item.Item] = item.ItemPrice;
      }
    });
  });

  const itemsList = Object.keys(items).map((item) => ({
    Item: item,
    ItemPrice: items[item],
  }));

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
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 4,
            width: "100%",
            mt: 4,
            border: "1px solid #1C4E80",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Products
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Click on each product to see detailed information
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {itemsList?.map((item: Item, idx: number) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #1C4E80",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.Item}
                    </Typography>
                    <Typography>Price: {item.ItemPrice}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <Link to={`/products/${item.Item}`}>Details</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Products;
