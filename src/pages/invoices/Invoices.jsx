import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
    align: "Center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    align: "Center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    align: "Center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone Number",
    type: "number",
    width: 90,
    flex: 1,
    align: "Center",
    headerAlign: "center",
  },
  {
    field: "cost",
    headerName: "Cost",
    sortable: false,
    width: 90,
    align: "Center",
    headerAlign: "center",
  },
  {
    field: "date",
    headerName: "Date",
    sortable: false,
    flex: 1,
    align: "Center",
    headerAlign: "center",
  },
];
const rows = [
  {
    id: 1,
    name: "Snow",
    PhoneNumber: "Jon",
    email: "Snow@gmail.com",
    phone: "(956)633-8759",
    cost: "$200",
    date: "23-3-2019",
  },
  {
    id: 2,
    name: "Cersei",
    email: "Cersei@gmail.com",
    phone: "(639)520-6980",
    cost: "$250",
    date: "1-1-2023",
  },
  {
    id: 3,
    name: "Lannister",
    email: "Lannister@gmail.com",
    phone: "(484)598-8742",
    cost: "$350",
    date: "5-5-2023",
  },
  {
    id: 4,
    name: "Stark",
    email: "Stark@gmail.com",
    phone: "(110)659-4212",
    cost: "$435",
    date: "22-8-2022",
  },
  {
    id: 5,
    name: "Targaryen",
    email: "Targaryen@gmail.com",
    cost: "$590",
    phone: "(963)690-8742",
    date: "30-12-2017",
  },
  {
    id: 6,
    name: "Melisandre",
    email: "Melisandre@gmail.com",
    cost: "$150",
    phone: "(350)597-0058",
    date: "10-8-2018",
  },
  {
    id: 7,
    name: "Clifford",
    email: "Clifford@gmail.com",
    cost: "$440",
    phone: "(264)953-2604",
    date: "4-8-2024",
  },
  {
    id: 8,
    name: "Frances",
    email: "Frances@gmail.com",
    cost: "$360",
    phone: "(789)687-1298",
    date: "12-1-2021",
  },
  {
    id: 9,
    name: "Roxie",
    email: "Roxie@gmail.com",
    cost: "$650",
    phone: "(684)489-2658",
    date: "1-10-2020",
  },
];

export const Invoices = () => {
  const theme = useTheme();

  return (
    <div>
      <Typography
        sx={{
          fontSize: "32px",
          color: theme.palette.primary.main,
          fontWeight: "bold",
          pb: "5px",
        }}
      >
        Invoices
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>
        List of invoices balances
      </Typography>
      <Box
        sx={{
          height: 600,
          width: "98%",
          mx: "auto",
          mt: "30px",
          maxWidth: 5000,
          overflowX: "auto",
        }}
      >
        <DataGrid
          rows={rows}
          // @ts-ignore
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </Box>
    </div>
  );
};
