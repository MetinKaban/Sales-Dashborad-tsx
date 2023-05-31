import useMainStore from "../../store/main-store";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Generate Chart Data
function createData(time: string, totalSales?: number | string) {
  return { time, totalSales };
}

export default function Chart() {
  const theme = useTheme();

  const { salesData } = useMainStore();

  const chartData = salesData.map((data) =>
    createData(data.Date.slice(5, 10), parseFloat(data.Total.replace("$", "")))
  );

  return (
    <ResponsiveContainer>
      <LineChart
        data={chartData}
        margin={{
          top: 10,
          right: 16,
          bottom: 0,
          left: 24,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          stroke={theme.palette.text.secondary}
          style={theme.typography.body2}
        />
        <YAxis
          stroke={theme.palette.text.secondary}
          style={theme.typography.body2}
        >
          <Label
            angle={270}
            position="left"
            style={{
              textAnchor: "middle",
              fill: theme.palette.text.primary,
              ...theme.typography.body1,
            }}
          >
            Sales ($)
          </Label>
        </YAxis>
        <Tooltip />
        <Line
          isAnimationActive={true}
          type="monotone"
          dataKey="totalSales"
          stroke={theme.palette.primary.main}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
