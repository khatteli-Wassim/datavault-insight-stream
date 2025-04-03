interface DashboardProps {
    data: any;
}

const Dashboard = ({ data }: DashboardProps) => {
    return (
        <div>
            <h1>Dashboard</h1>
            {/* Assuming data has a property called items for rendering */}
            <ul>
                {data.items.map((item: any, index: number) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
