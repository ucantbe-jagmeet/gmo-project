import React from "react";
import { DataGrid, Navbar } from "../Components";
import { Container, Box } from "@mui/material";
import DepartmentsList from "../Components/DepartmentList";

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      <Container>
        <DataGrid />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 8,
            p: 3,
            height: 384,
          }}
        >
          <DepartmentsList />
        </Box>
      </Container>
    </main>
  );
};

export default Home;
