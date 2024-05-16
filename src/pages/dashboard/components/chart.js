import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const data = [2756.26, 3207.03, 3274.94, 5432.65, 4234.65]; // Example data points
  const labels = ['2:30 PM', '3:10 PM', '3:55 PM', '4:43 PM', "6:40 PM"]; // Example labels

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Ethereum Rate',
        data: data,
        borderColor: "var--color-border",
        backgroundColor: 'green',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="container mx-auto">
      <div className="bg-theme-primaryBg text-theme-secondary p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-theme-primary">Ethereum rate</h2>
        <div className="h-64">
          <Line data={chartData} options={options}/>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
