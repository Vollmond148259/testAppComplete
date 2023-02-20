import Header from "./header";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
export default Layout;
