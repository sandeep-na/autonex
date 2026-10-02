"use client";

import React from "react";
// If type declarations for 'react-apexcharts' are missing, use require with ts-ignore
// to avoid TypeScript errors while still loading the module at runtime.
// @ts-ignore
const ReactApexChart = require("react-apexcharts")?.default || require("react-apexcharts");

const DonutChart = () => {
  const series = [44, 55, 41, 17, 15];

  const options = {
    chart: {
      width: 480,
      type: "pie",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    legend: {
      formatter: function (val: any, opts: any) {
        return `${val} - ${opts.w.globals.series[opts.seriesIndex]}`;
      },
    },
    title: {
      text: "Gradient Donut with custom Start-angle",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={480}
      />
    </div>
  );
};

export default DonutChart;