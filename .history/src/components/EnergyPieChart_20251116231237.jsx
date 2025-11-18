import React from "react";
import Chart from "react-apexcharts";

export default function EnergyPieChart() {
  const series = [35, 25, 20, 15, 5];

  const options = {
    labels: ["Solar", "Wind", "Hydro", "Natural Gas", "Other"],
    colors: ["#22f7a5", "#00cfff", "#66f3b6", "#6ac4ff", "#7a7a7a"],

    chart: {
      type: "pie",
      background: "transparent",
    },

    stroke: {
      colors: ["#0d1a24"],
      width: 2,
    },

    dataLabels: {
      enabled: true,
      formatter: (val, opts) => {
        const label = opts.w.globals.labels[opts.seriesIndex];
        return `${label} ${val.toFixed(0)}%`;
      },
      style: {
        fontSize: "14px",
        fontWeight: 500,
        colors: ["#ffffff"],
      },
    },

    legend: {
      show: false,
    },

    theme: {
      mode: "dark",
    },
  };

  return (
    <div className="w-full flex justify-center">
      <Chart options={options} series={series} type="pie" height={300} width={350} />
    </div>
  );
}
