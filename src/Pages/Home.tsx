import React from "react";
import { DataGrid, Department1, Department2, Navbar } from "../Components";

const Home: React.FC = () => {
  return (
    <main>
      <Navbar />
      <DataGrid />
      <div className="px-20 flex h-96 justify-center gap-x-32  ">
        <Department1 />
        <Department2 />
      </div>
    </main>
  );
};

export default Home;
