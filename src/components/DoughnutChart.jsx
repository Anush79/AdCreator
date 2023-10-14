import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto'
import { usersData } from '../utils/constants';
import 'chart.js';

export function DoughnutChart({matrix}) {
  const [chartData, setChartData] = useState({
    labels: usersData?.map(item=>item.group) ,
    datasets: [
      {
        label: `number of ${matrix}`,
        data: usersData?.map(item => item[matrix]),
        backgroundColor: [
          "#ff823c", "#0096ff", "#323c46"
        ],
        hoverOffset: 4,
        borderWidth: 7,
        
       }
       
    ],
  })
  const options = {
    legend: {
      position: 'left',
      display: true
    } 
  };
  return <div className='chart'>
    <Doughnut data={chartData} options={options}></Doughnut>
    
  </div >
}