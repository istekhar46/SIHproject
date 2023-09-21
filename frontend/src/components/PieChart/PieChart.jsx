import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto"; // Import "chart.js/auto" to include all controllers

const SentimentPieChart = () => {
  const chartRef = useRef(null);
  let chartInstance = null; // Store the Chart.js instance

  const chartData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        data: [30, 15, 55], // Replace with actual percentages
        backgroundColor: ["green", "red", "gray"],
        hoverBackgroundColor: ["lightgreen", "lightcoral", "lightgray"],
        borderWidth: 0,
      },
    ],
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chartOptions = {
      responsive: false,
      maintainAspectRatio: false,
      cutout: "60%", // Adjust the value to control the size of the hole
      plugins: {
        legend: {
          position: "right",
        },
      },
    };

    // Initialize the Chart.js instance
    chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: chartData,
      options: chartOptions,
    });

    // Clean up the chart when the component unmounts
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartData]);

  return (
    <>
      <div>
        <h5 className="card-title text-2xl font-[800]">Sentiment Trends</h5>
        <canvas ref={chartRef}></canvas>
      </div>
    </>
  );
};

export default SentimentPieChart;
