import React, { useEffect, useState } from 'react';

interface RealTimeChartProps {
    data: any[];
}

const RealTimeChart: React.FC<RealTimeChartProps> = ({ data }) => {
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        if (data) {
            setChartData(data);
        }
    }, [data]);

    return (
        <div>
            <h2>Real-Time Data Chart</h2>
            <div>{chartData.length > 0 ? 'Render chart here' : 'No data available'}</div>
        </div>
    );
};

export default RealTimeChart;
