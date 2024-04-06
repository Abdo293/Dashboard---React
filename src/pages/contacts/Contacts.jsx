import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import { columns, rows } from "./data";

export const Contacts = () => {
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
        Contatcts
      </Typography>
      <Typography sx={{ fontWeight: "bold" }}>
        List of contacts for future refernce
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
          slots={{
            toolbar: GridToolbar,
          }}
        />
      </Box>
    </div>
  );
};
