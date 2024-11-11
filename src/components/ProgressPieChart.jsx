// src/ProgressPieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import style from '../style/style.module.css'

// Register the components
Chart.register(ArcElement, Tooltip, Legend);

// Custom plugin to render text inside the pie chart
const progressTextPlugin = {
  id: 'progressText',
  afterDraw: function(chart) {
    const { ctx, chartArea: { width, height } } = chart;
    const fontSize = Math.min(width, height) / 5;
    ctx.save();
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = ''; // Set text color to white for better contrast

    const text = `${chart.data.datasets[0].data[0]}%`;
    const textX = width / 1.5;
    const textY = height / 1.5;

    // Clear the center area
    ctx.fillStyle = 'transparent'; // Set a contrasting background color
    ctx.beginPath();
    ctx.arc(textX, textY, width / 4, 0, 2 * Math.PI);
    ctx.fill();

    // Draw the text
    ctx.fillStyle = '#fff';
    ctx.fillText(text, textX, textY);
    ctx.restore();
  }
};

const ProgressPieChart = ({ progress }) => {
  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [progress, 100 - progress],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: ({ label, raw }) => `${label}: ${raw}%`,
        },
      },
      progressText: true // Enable the custom plugin
    },
  };

  return (
    <div style={{ width: '200px', height: '200px' }} className={style.pi_chart_div}>
      <Pie data={data} options={options} plugins={[progressTextPlugin]} />
    </div>
  );
};

export default ProgressPieChart;
