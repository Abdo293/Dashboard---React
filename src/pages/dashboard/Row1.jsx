import { Stack } from "@mui/material";
import { Card } from "./Card";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { data1, data2, data3, data4 } from "./data";

export const Row1 = () => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={{ sm: "center", xs: "center", md: "space-between" }}
      gap={1}
    >
      <Card
        icon={
          <Email
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"12,361"}
        subTitle={"Emails Sent"}
        increase={"+14%"}
        data={data1}
        scheme={"nivo"}
      />
      <Card
        icon={
          <PointOfSale
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subTitle={"Sales Obtained"}
        increase={"+21%"}
        data={data2}
        scheme={"category10"}
      />
      <Card
        icon={
          <PersonAdd
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subTitle={"New Clients"}
        increase={"+5%"}
        data={data3}
        scheme={"accent"}
      />
      <Card
        icon={
          <Traffic
            sx={{ fontSize: "23px", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subTitle={"Traffic Received"}
        increase={"+43%"}
        data={data4}
        scheme={"dark2"}
      />
    </Stack>
  );
};
