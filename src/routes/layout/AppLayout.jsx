import { Outlet, useNavigate } from "react-router-dom";
import Appbar from "../../components/Appbar/Appbar";
import SideBar from "../../components/SideBar/SideBar";
import { Container } from "@mui/material";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppProvider";

const AppLayout = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
    return () => {};
  }, [user]);

  return (
    <>
      <Appbar />
      <SideBar />
      <Container sx={{ ml: { sm: "240px" }, height: "100%" }}>
        <Outlet />
      </Container>
    </>
  );
};

export default AppLayout;
