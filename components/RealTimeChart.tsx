import React from 'react';
import { Line } from 'react-chartjs-2';

const RealTimeChart = ({ data }) => {
    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true
                }
            }
        }
    };

    const formattedData = {
        labels: data.labels,
        datasets: data.datasets.map(dataset => ({
            ...dataset,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointBackgroundColor: '#fff',
            pointBorderColor: 'rgba(75, 192, 192, 1)'
        }))
    };

    return <Line data={formattedData} options={options} />;
};

export default RealTimeChart;
