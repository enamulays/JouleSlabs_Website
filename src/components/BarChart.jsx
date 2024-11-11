// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug'],
    datasets: [
      {
        label: '2023',
        data: [20, 10, 15, 30, 20, 10, 15,22],
        backgroundColor: '#223ebd',
        borderRadius: 40,
        borderWidth:7,
        borderColor: 'transparent'
      },
      {
        label: '2024',
        data: [-10, -5, -10, -15, -5, -10, -15, -12],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderRadius: 40,
        borderWidth: 7,
        borderColor: 'transparent'
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Total Revenue',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
