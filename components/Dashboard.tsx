// Dashboard component
import React, { useEffect, useState } from 'react';

interface DataPoint {
  timestamp: string;
  value: number;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DataPoint[]>([]);

  useEffect(() => {
    const eventSource = new EventSource('/api/data-sync');
    eventSource.onmessage = (event) => {
      const newDataPoint: DataPoint = JSON.parse(event.data);
      setData(prevData => [...prevData, newDataPoint]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((point, index) => (
          <li key={index}>{`${point.timestamp}: ${point.value}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
