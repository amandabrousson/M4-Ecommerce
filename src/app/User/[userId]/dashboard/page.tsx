import DashboardCart from "@/Components/vistasPaginas/UserContainer/[Id]/Dashboard/DashboardCart";

const Dashboard = ({ params }: { params: { userId: string } }) =>{
    const { userId: userId } = params;
    const userIdNumber = parseInt(userId, 10); 
    
    return <DashboardCart userId={userIdNumber} />;
};

export default Dashboard;
