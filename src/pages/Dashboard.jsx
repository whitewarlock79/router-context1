import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();

  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <p>Country: {user.country}</p>
      <p>Role: {user.role}</p>
    </>
  );
};

export default Dashboard;
