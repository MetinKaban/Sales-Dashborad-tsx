import { GridColDef } from "@mui/x-data-grid";

export const arrangeColumns: GridColDef[] = [
  { field: "id", headerName: "id", width: 50, disableColumnMenu: true },

  {
    field: "name",
    headerName: "Item Name",
    width: 120,
    editable: false,
    hideable: false,
    disableColumnMenu: true,
  },
  {
    field: "price",
    headerName: "Item Price",
    width: 120,
    editable: false,
  },
  {
    field: "totalSold",
    headerName: "Total Sold",
    width: 120,
    editable: false,
    hideable: false,
  },
  {
    field: "numberOfCustomers",
    headerName: "No of Customers",
    width: 170,
    editable: false,
    hideable: false,
  },

  {
    field: "customers",
    headerName: "Customers",
    width: 355,
    editable: false,
    sortable: false,
    disableColumnMenu: true,
  },
  {
    field: "totalRevenue",
    headerName: "Total Revenue",
    width: 150,
    editable: false,
    hideable: false,
    align: "right",
    headerAlign: "right",
  },
];

