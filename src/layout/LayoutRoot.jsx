import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

const LayoutRoot = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <p>Footer</p>
    </>
  );
};

export default LayoutRoot;
