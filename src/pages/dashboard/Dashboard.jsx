import { DownloadOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Row1 } from "./Row1";
import { Row2 } from "./Row2";
import { Row3 } from "./Row3";
import { useTheme } from "@emotion/react";

export const Dashboard = () => {
  const theme = useTheme();
  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={"10px"}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              color: theme.palette.primary.main,
            }}
          >
            Dashboard
          </Typography>
          <Typography>Wecome to your dashboard</Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "capitalize" }}
          >
            <DownloadOutlined />{" "}
            <span style={{ marginLeft: "5px" }}>Download Reports</span>
          </Button>
        </Box>
      </Stack>
      <Row1 />
      <Row2 />
      <Row3 />
    </div>
  );
};
