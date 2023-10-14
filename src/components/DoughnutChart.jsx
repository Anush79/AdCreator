import "chart.js";
import { Chart as ChartJs } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { usersData } from "../utils/constants";
import { useSelector } from "react-redux";

export function DoughnutChart() {
  const users = useSelector((state) => state?.users);
  console.log({users})
  const matrix = useSelector((state) => state?.matric);
  const [chartData, setChartData] = useState({
    labels: usersData?.map((item) => item?.group),
    datasets: [
      {
        label: `number of ${matrix}`,
        data: usersData?.map((item) => item[matrix]),
        backgroundColor: ["#ff823c", "#0096ff", "#323c46"],
        hoverOffset: 4,
        borderWidth: 7,
      },
    ],
  });
  const options = {
    legend: {
      position: "left",
      display: true,
    },
  };
  useEffect(() => {
    setChartData({
      labels: users?.map((item) => item.group),
      datasets: [
        {
          label: `number of ${matrix}`,
          data: users?.map((item) => item[matrix]),
          backgroundColor: ["#ff823c", "#0096ff", "#323c46"],
          hoverOffset: 4,
          borderWidth: 7,
        },
      ],
    });
  }, [matrix]);
  return (
    <div className="chart">
      <Doughnut data={chartData} options={options}></Doughnut>
    </div>
  );
}
