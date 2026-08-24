import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <main className="w-full">
      <Navbar />
      <div className="p-5">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="mt-2 text-gray-600">Panoramica dell'attività</p>
      </div>
    </main>
  );
};

export default Dashboard;
