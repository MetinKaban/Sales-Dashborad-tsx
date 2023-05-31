import useMainStore from "../../store/main-store";
import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { calculateItemDetails } from "../../utils/calculateItemDetails";

function createPieData(name: string, value: number | string) {
  return { name, value };
}

export default function Piechart() {
  const { salesData } = useMainStore();

  const items = calculateItemDetails(salesData);
  const pieData = Object.entries(items).map(([itemName, itemDetail]) =>
    createPieData(itemName, itemDetail.totalSold)
  );
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={pieData}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={70}
          fill="#1876D1"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
