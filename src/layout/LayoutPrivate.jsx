import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
  const { user } = useUserContext();

  return (
    <>
      {user ? (
        <>
          <h1>Welcome to Our Website LayoutPrivate</h1>
          <Outlet />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};

export default LayoutPrivate;
