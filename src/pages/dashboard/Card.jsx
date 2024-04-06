import { Box, Paper, Stack, Typography } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

export const Card = ({ icon, title, subTitle, increase, data, scheme }) => {
  return (
    <Paper
      sx={{
        minWidth: "333px",
        p: 1.5,
        display: "flex",
        justifyContent: "space-between",
        flexGrow: 1,
      }}
    >
      <Stack gap={1}>
        {icon}
        <Typography variant="body1" sx={{ fontSize: "13px" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "13px" }}>
          {subTitle}
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box height={"80px"} width={"80px"}>
          <ResponsivePie
            data={data}
            theme={{
              text: {
                fontSize: 11,
                fill: "#333333",
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: "#333333",
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
                ticks: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: "#333333",
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
              },
              grid: {
                line: {
                  stroke: "#dddddd",
                  strokeWidth: 1,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    fill: "#333333",
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
                text: {
                  fontSize: 11,
                  fill: "#333333",
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: "#333333",
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  fill: "#333333",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: "#000000",
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                container: {
                  background: "#ffffff",
                  color: "#333333",
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            colors={{ scheme: scheme }}
            innerRadius={0.7}
            padAngle={0.7}
            enableArcLabels={false}
            enableArcLinkLabels={false}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
          />
        </Box>
        <Typography variant="body2">{increase}</Typography>
      </Stack>
    </Paper>
  );
};
