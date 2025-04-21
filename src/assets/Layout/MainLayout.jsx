// MainLayout.jsx
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
