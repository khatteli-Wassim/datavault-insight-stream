import React, { useEffect } from 'react';
import { Chart } from 'chart.js';

const RealTimeChart: React.FC = () => {
    useEffect(() => {
        const ctx = document.getElementById('chart') as HTMLCanvasElement;
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [],
                datasets: [{
                    label: 'Real-time Data',
                    data: [],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    fill: true,
                    tension: 0.4    // Added smoothing effect
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: 'realtime',
                        realtime: {
                            delay: 2000
                        }
                    }
                }
            }
        });

        return () => {
            myChart.destroy();
        };
    }, []);

    return <canvas id="chart" />;
};

export default RealTimeChart;
