import useMainStore from "../../store/main-store";
import { calculateItemDetails } from "../../utils/calculateItemDetails";
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import { Box, CssBaseline, createTheme } from "@mui/material";
import { arrangeColumns } from "../../utils/tableColumn";
import { ThemeProvider } from "@emotion/react";

const columns = arrangeColumns;

const DeatiledSalesTable = () => {
  const defaultTheme = createTheme();
  const { salesData } = useMainStore();

  const rowsObj = calculateItemDetails(salesData);

  const rows: GridRowsProp = Object.values(rowsObj);

  for (const row of rows) {
    const price = parseFloat(row.price.replace("$", ""));

    const totalRevenue = row.totalSold * price;
    const numberOfCustomers = row.customers.length;

    row.numberOfCustomers = numberOfCustomers;
    row.totalRevenue = totalRevenue;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          minHeight: "35rem",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          pageSizeOptions={[6]}
          style={{ fontWeight: "bold", fontSize: "18px" }}
          disableRowSelectionOnClick
          rowHeight={72}
        />
      </Box>
    </ThemeProvider>
  );
};

export default DeatiledSalesTable;
