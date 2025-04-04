import React, { useEffect, useState } from 'react';

const Dashboard: React.FC = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/data');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        const intervalId = setInterval(fetchData, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <div>Data: {JSON.stringify(data)}</div>
        </div>
    );
};

export default Dashboard;