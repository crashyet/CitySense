import React from "react";
import Chart from "react-apexcharts";

const PieChart = () => {
  const options = {
    labels: ["Solar", "Wind", "Hydro", "Natural Gas", "Other"],
    colors: ["#00ff99", "#00cfff", "#4cffc3", "#66d3ff", "#7a7a7a"],
    chart: {
      type: "pie",
      foreColor: "#d4f9ff",
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) =>
        `${opts.w.globals.labels[opts.seriesIndex]} ${val.toFixed(0)}%`,
      style: {
        fontSize: "16px",
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      colors: ["#1e1e2f"],
    },
    theme: {
      mode: "dark",
    },
  };

  const series = [35, 25, 20, 15, 5]; // data contoh

  return (
    <div
      style={{
        width: "460px",
        margin: "auto",
        background: "#1e1e2f",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <Chart options={options} series={series} type="pie" width="450" />
    </div>
  );
};

export default PieChart;
