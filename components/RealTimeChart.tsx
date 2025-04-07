import React, { useEffect, useState } from 'react';

interface RealTimeChartProps {
  dataEndpoint: string;
}

const RealTimeChart: React.FC<RealTimeChartProps> = ({ dataEndpoint }) => {
  const [chartData, setChartData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataEndpoint);
      const data = await response.json();
      setChartData(data);
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, [dataEndpoint]);

  return (
    <div>
      <h2>Real-Time Data Chart</h2>
      {/* Replace with an actual chart library component */}
      <pre>{JSON.stringify(chartData, null, 2)}</pre>
    </div>
  );
};

export default RealTimeChart;
