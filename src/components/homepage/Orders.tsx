import useMainStore from "../../store/main-store";
import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

// Generate Order Data
function createSalesHistoryData(
  id: number,
  date: string,
  name: string,
  totalItems: number,
  amount: number
) {
  return { id, date, name, totalItems, amount };
}

export default function Orders() {
  const { salesData } = useMainStore();

  const tableData = salesData.map((sale) =>
    createSalesHistoryData(
      sale.OrderId,
      sale.Date.slice(0, 10),
      sale.CustomerName,
      sale.Items.length,
      parseFloat(sale.Total.replace("$", ""))
    )
  );

  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bold" }}>Sale Date</TableCell>
            <TableCell sx={{ fontWeight: "bold" }}>Customer Name</TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="center">
              Total Items Sold
            </TableCell>
            <TableCell sx={{ fontWeight: "bold" }} align="right">
              Sale Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow hover key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell align="center">{row.totalItems}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{ mt: 3, ml: 1.5, mb: 2 }}>
        <Link to={"/sales"}>See sales details</Link>
      </Box>
    </>
  );
}
