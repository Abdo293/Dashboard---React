import { Box, Paper, Typography } from "@mui/material";
import { Pie } from "../pie/Pie";
import React from "react";
import { Bar } from "../bar/Bar";
import { Geography } from "../geography/Geography";
import { useTheme } from "@emotion/react";

export const Row3 = () => {
  const theme = useTheme();
  return (
    <Box sx={{ mt: 3, display: "flex", flexWrap: "wrap", gap: 1 }}>
      <Paper sx={{ width: "32.97%", flexGrow: 1, p: 1.2 }}>
        <Typography
          sx={{ color: theme.palette.secondary.main }}
          fontWeight={"bold"}
          variant="h6"
        >
          Campaign
        </Typography>
        <Pie isDashboard={true} />
        <Typography textAlign={"center"}>$48,352 revenue generated</Typography>
        <Typography textAlign={"center"}>
          includes extra misc expenditures and costs
        </Typography>
      </Paper>

      <Paper sx={{ width: "32.97%", flexGrow: 1 }}>
        <Typography
          sx={{ color: theme.palette.secondary.main }}
          fontWeight={"bold"}
          variant="h6"
          padding={1.2}
        >
          Sales Quantity
        </Typography>
        <Bar isDashboard={true} />
      </Paper>

      <Paper sx={{ width: "32.97%", flexGrow: 1, p: 1.2 }}>
        <Typography
          sx={{ color: theme.palette.secondary.main }}
          fontWeight={"bold"}
          variant="h6"
        >
          Geography Based Traffic
        </Typography>
        <Geography isDashboard={true} />
      </Paper>
    </Box>
  );
};
