import React from "react";
import { DataGrid, Department1, Department2, Navbar } from "../Components";
import { Container, Box } from "@mui/material";

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
          <Department1 />
          <Department2 />
        </Box>
      </Container>
    </main>
  );
};

export default Home;
