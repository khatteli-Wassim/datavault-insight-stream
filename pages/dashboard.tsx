import React from 'react';
import Header from '../components/Header';
import Dashboard from '../components/Dashboard';
import RealTimeChart from '../components/RealTimeChart';

const DashboardPage = () => {
  return (
    <div>
      <Header />
      <Dashboard />
      <RealTimeChart dataEndpoint="/api/data-sync" />
    </div>
  );
};

export default DashboardPage;
