import React from 'react';
import './App.css';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, ArcElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const bardata = {
    labels: ['a', 'b', 'c'],
    datasets: [
      {
        label: 'Revenue',
        data: [200, 150, 90],
        backgroundColor: 'skyblue',
      },
      {
        label: 'Loss',
        data: [90, 180, 700],
        backgroundColor: 'pink',
      },
      {
        label: 'Profit',
        data: [300, 250, 400],
       backgroundColor: 'hotpink',
      },
    ],
  };

  return (
    <div className='container'>
      <div className='card1'>
        <Line data={bardata} />
      </div>
      <div className='card2'>
        <Bar data={bardata} />
      </div>
      <div className='card2'>
        <Doughnut data={bardata} />
      </div>
    </div>
  );
};

export default App;
