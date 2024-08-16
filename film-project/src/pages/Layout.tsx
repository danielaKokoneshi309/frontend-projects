import { Outlet } from "react-router-dom";
import NavBar from "../componets/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
