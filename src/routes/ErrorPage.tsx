import { useRouteError, useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

type ErrorObj = {
  status: number;
  statusText: string;
  data: string;
  error: string;
  message: string;
};

const ErrorPage = () => {
  const error: ErrorObj | unknown = useRouteError();
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        sx={{
          minHeight: "15rem",
          mt: "12rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Oops!
        </Typography>
        <Typography variant="h6">
          Sorry, an unexpected error has occurred.{" "}
        </Typography>
        <Typography variant="h6" sx={{ fontStyle: "italic" }}>
          {(error as ErrorObj)?.statusText || (error as ErrorObj)?.message}{" "}
        </Typography>
        <Button variant="outlined" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
