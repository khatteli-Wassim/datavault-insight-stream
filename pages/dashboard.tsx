import { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';

const DashboardPage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/data');
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err);
            }
        };

        fetchData();
    }, []);

    if (error) return <div>Error loading data.</div>;
    if (!data) return <div>Loading...</div>;

    return <Dashboard data={data} />;
};

export default DashboardPage;
