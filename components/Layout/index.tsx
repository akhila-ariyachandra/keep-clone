import Container from "@mui/material/Container";
import type { FC } from "react";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Container component="main">{children}</Container>
    </>
  );
};

export default Layout;
