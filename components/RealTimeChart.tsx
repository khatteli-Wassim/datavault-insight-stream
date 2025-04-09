import React, { useEffect, useState } from 'react';

interface RealTimeChartProps {
    dataSourceUrl: string;
}

const RealTimeChart: React.FC<RealTimeChartProps> = ({ dataSourceUrl }) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(dataSourceUrl);
            if (response.ok) {
                const result = await response.json();
                setData(result);
            } else {
                console.error('Failed to fetch data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
        const intervalId = setInterval(fetchData, 5000); // Refresh data every 5 seconds
        return () => clearInterval(intervalId);
    }, [dataSourceUrl]);

    return (
        <div>
            <h2>Real-Time Data Chart</h2>
            {/* Placeholder for chart rendering logic */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default RealTimeChart;
