import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { IDataGrid } from "../@types";

const url = "https://jsonplaceholder.typicode.com/posts";

const DataGridComponent = () => {
  const [data, setData] = useState<IDataGrid[]>([]);

  const fetchJsonData = async () => {
    const resp = await axios.get(url);
    const responseData: IDataGrid[] = await resp.data;
    setData(responseData);
  };
  useEffect(() => {
    fetchJsonData();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 150,
    },
    {
      field: "userId",
      headerName: "UserId",
      width: 250,
    },
    {
      field: "title",
      headerName: "Title",
      width: 350,
    },
    {
      field: "body",
      headerName: "Body",
      width: 450,
    },
  ];

  const rows = data.map((row) => ({
    id: row.id,
    userId: row.userId,
    title: row.title,
    body: row.body,
  }));
  const gridConfig = {
    rows,
    columns,
    pageSize: 10, // This property might not be recognized by the DataGrid component
    rowsPerPageOptions: [10, 20, 30],
  };
  return (
    <main className="h-[90vh] px-20 py-10 w-full">
      <DataGrid {...gridConfig} />
    </main>
  );
};

export default DataGridComponent;
