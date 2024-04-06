import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

export const Team = () => {
  const theme = useTheme();
  const rows = [
    {
      id: 1,
      email: "Snow@gmail.com",
      name: "Jon",
      age: 35,
      phone: "(110)659-4212",
      access: "admin",
    },
    {
      id: 2,
      email: "Lannister@gmail.com",
      name: "Cersei",
      age: 42,
      phone: "(484)598-8742",
      access: "admin",
    },
    {
      id: 3,
      email: "Lannister@gmail.com",
      name: "Jaime",
      age: 45,
      phone: "(639)520-6980",
      access: "manager",
    },
    {
      id: 4,
      email: "Stark@gmail.com",
      name: "Arya",
      age: 16,
      phone: "(956)633-8759",
      access: "manager",
    },
    {
      id: 5,
      email: "Targaryen@gmail.com",
      name: "Daenerys",
      age: 30,
      phone: "(963)690-8742",
      access: "manager",
    },
    {
      id: 6,
      email: "Melisandre@gmail.com",
      name: "Freya",
      age: 150,
      phone: "(350)597-0058",
      access: "user",
    },
    {
      id: 7,
      email: "Clifford@gmail.com",
      name: "Ferrara",
      age: 44,
      phone: "(264)953-2604",
      access: "user",
    },
    {
      id: 8,
      email: "Frances@gmail.com",
      name: "Rossini",
      age: 36,
      phone: "(789)687-1298",
      access: "user",
    },
    {
      id: 9,
      email: "Roxie@gmail.com",
      name: "Harvey",
      age: 65,
      phone: "(684)489-2658",
      access: "user",
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 130,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      sortable: true,
      width: 160,
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      align: "center",
      width: 140,
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              bgcolor:
                access === "admin"
                  ? theme.palette.secondary.dark
                  : access === "manager"
                  ? theme.palette.primary.dark
                  : "#3da58a",
              py: "5px",
              width: "100%",
              mt: "8px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              color: "white",
            }}
          >
            {access === "admin" ? (
              <AdminPanelSettingsIcon fontSize="small" />
            ) : access === "manager" ? (
              <LockOpenOutlinedIcon fontSize="small" />
            ) : (
              <SecurityOutlinedIcon fontSize="small" />
            )}
            <Typography variant="body1">{access}</Typography>
          </Box>
        );
      },
    },
  ];
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
        Team
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>
        Managing the team members
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
        />
      </Box>
    </div>
  );
};
