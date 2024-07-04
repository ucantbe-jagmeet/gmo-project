import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { IDataGrid } from "../@types";
import { Container } from "@mui/material";

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
      width: 150,
    },
    {
      field: "title",
      headerName: "Title",
      width: 350,
    },
    {
      field: "body",
      headerName: "Body",
      width: 350,
    },
  ];

  const rows = data.map((row) => ({
    id: row.id,
    userId: row.userId,
    title: row.title,
    body: row.body,
  }));

  return (
    <Container
      sx={{
        height: "90vh",
        paddingTop: "20px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </Container>
  );
};

export default DataGridComponent;
