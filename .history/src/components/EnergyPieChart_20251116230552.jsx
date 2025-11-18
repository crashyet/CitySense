// src/components/EnergyMixChart.jsx

import React from "react";
import Chart from "react-apexcharts";

export default function EnergyMixChart({ data }) {
  // data = array objek { name: string, value: number }

  const labels = data.map(item => item.name);
  const series = data.map(item => item.value);

  const options = {
    labels: labels,
    colors: ["#22c55e", "#06b6d4", "#a3e635", "#3b82f6", "#f97316"], // contoh warna, bisa diubah
    chart: {
      type: "pie",
      background: "transparent",
    },
    dataLabels: {
      enabled: true,
      formatter: (val, opts) =>
        `${opts.w.globals.labels[opts.seriesIndex]} ${val.toFixed(0)}%`,
      style: {
        fontSize: "14px",
        colors: ["#ffffff"],
      },
      dropShadow: {
        enabled: false,
      },
    },
    legend: {
      show: false,
    },
    stroke: {
      width: 1,
      colors: ["#1e293b"], // warna stroke (gelap)
    },
    theme: {
      mode: "dark",
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: "400px", margin: "auto" }}>
      <Chart
        options={options}
        series={series}
        type="pie"
        width="100%"
        height={350}
      />
    </div>
  );
}
