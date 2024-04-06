import { useTheme } from "@emotion/react";
import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

export const RecentTransaction = ({ title, name, date, price }) => {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1.5,
        mt: "10px",
      }}
    >
      <Stack direction={"column"}>
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Typography>{name}</Typography>
      </Stack>
      <Stack direction={"row"} gap={1} alignItems={"center"}>
        <Typography>{date}</Typography>
        <Typography
          sx={{
            bgcolor: theme.palette.error.main,
            p: 1,
            borderRadius: 2,
            color: "#fff",
          }}
        >
          {price}
        </Typography>
      </Stack>
    </Paper>
  );
};
