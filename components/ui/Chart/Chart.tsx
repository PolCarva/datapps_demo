"use client";
import "./chartConfig";
import {UTILS} from "@/utils";
import { Bar, Line, Pie, Doughnut, PolarArea } from "react-chartjs-2";

const Chart = ({
  type,
  cols = 4,
  legends = true,
}: {
  type: "bar" | "line" | "pie" | "doughnut" | "polararea";
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  legends?: boolean;
}) => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: UTILS.CHART_COLORS,
        borderColor: "#FFF",
        borderWidth: 1,
      },
      {
        label: "Dataset 2",
        data: [65, 59, 80, 81, 56, 55, 40].reverse(),
        backgroundColor: UTILS.CHART_COLORS,
        borderColor: "#FFF",
        borderWidth: 1,
      },
      {
        label: "Dataset 3",
        data: [65, 59, 80, 81, 56, 55, 40].reverse(),
        backgroundColor: UTILS.CHART_COLORS,
        borderColor: "#FFF",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    datasets: {
      bar: {
        barPercentage: 0.5,
      },
    },
    
    plugins: {
      legend: {
        display: legends,
        position: "top" as const,
      },
    },
  };

  return (
    <div
      style={{ gridColumn: `span ${cols}` }}
      className="min-h-[30vh] p-5 bg-white rounded-xl shadow-md"
    >
      <div className="chart-container">
        {type === "bar" && <Bar data={data} options={options} />}
        {type === "line" && <Line data={data} options={options} />}
        {type === "pie" && <Pie data={data} options={options} />}
        {type === "doughnut" && <Doughnut data={data} options={options} />}
      </div>
    </div>
  );
};

export default Chart;
