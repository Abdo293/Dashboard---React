import { useTheme } from "@emotion/react";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { DownloadOutlined } from "@mui/icons-material";
import { RecentTransaction } from "./RecentTransaction";
import { Line } from "../line/Line";

export const Row2 = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1 }}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Revenue Generated
          </Typography>
          <IconButton>
            <DownloadOutlined />
          </IconButton>
        </Stack>
        <Typography pl={1.5}>$51.342.32</Typography>
        <Line isDashboard={true} />
      </Paper>
      <Box sx={{ flexGrow: 1, maxHeight: 375, overflow: "auto" }}>
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>
        <Stack direction={"column"}>
          <RecentTransaction
            title={"01e4dsaewf"}
            name={"jhondoe"}
            date={"01-09-2021"}
            price={"$43.91"}
          />
          <RecentTransaction
            title={"0315dsaaef"}
            name={"jackdower"}
            date={"01-04-2022"}
            price={"$133.45"}
          />
          <RecentTransaction
            title={"01e4dsaef"}
            name={"aberdohnny"}
            date={"01-09-2021"}
            price={"$50.45"}
          />
          <RecentTransaction
            title={"51034szvfew"}
            name={"goodmanave"}
            date={"05-11-2022"}
            price={"$200.45"}
          />
        </Stack>
      </Box>
    </Stack>
  );
};
