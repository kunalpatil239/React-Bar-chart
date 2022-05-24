import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
console.log(Chart);

const Barchart = () => {
  return (
    <Bar
      data={{
        labels: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
        ],
        datasets: [
          {
            label: "Total Account Activated",
            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            backgroundColor: "#7aebab",
            barThickness: 12,
            borderRadius: 6,
          },
          {
            label: "Sync",
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
            backgroundColor: "#45bdde",
            barThickness: 12,
            borderRadius: 6,
          },
          {
            label: "Step Target Achieved",
            data: [
              130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 130,
              130,
            ],

            backgroundColor: "orange",
            barThickness: 12,
            borderRadius: 6,
          },
        ],
      }}
      options={{
        plugins: {
          tooltip: {
            mode: "index",
            yAlign: "bottom",
          },
        },
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          x: {
            ticks: {
              color: "black",
            },
          },
          y: {
            beginAtZero: true,
            min: 0,
            max: 140,
            ticks: {
              stepSize: 20,
              color: "black",
            },
          },
        },
      }}
    />
  );
};

export default Barchart;
