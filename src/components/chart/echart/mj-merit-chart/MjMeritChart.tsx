import { Box, FormControl, InputLabel, MenuItem, Select, useTheme } from "@mui/material";
import type { EChartsOption } from "echarts";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCandidateDistributionByPollIndex, selectMeritChartSeriesByPollIndexForECharts, selectPt1Dates } from "../../../../store/jm-slice/jm-selector";
import type { RootState } from "../../../../store/store";
import Chart from "../../../share/Chart";
import { mjMeritChartConfig } from "./meritChatConfig";
import { graphColor } from "../../../../colors";

interface MjMeritChartProps {
  isThumbnail?: boolean;
}

export const MjMeritChart: React.FC<MjMeritChartProps> = ({
  isThumbnail = false
}) => {
  const theme = useTheme();
  const [pollIndex, setPollIndex] = useState(0);

  const pt1Dates = useSelector(selectPt1Dates);
  const candidateDistributions = useSelector((state: RootState) => selectCandidateDistributionByPollIndex(state, pollIndex));
  const meritChartSeries = useSelector((state: RootState) => selectMeritChartSeriesByPollIndexForECharts(state, pollIndex));

  const meritChartOption: EChartsOption = {
    ...mjMeritChartConfig,
    yAxis: {
      ...mjMeritChartConfig.yAxis,
      data: candidateDistributions?.map(cd => cd.name) || [],
    },
    legend: isThumbnail ? { show: false } : mjMeritChartConfig.legend,
    series: (meritChartSeries || []).map((serie: any, index: number) => {
      const baseSerie = {
        type: 'bar' as const,
        stack: 'total',
        itemStyle: {
          color: graphColor.fiveGradeScale[index],
        },
        ...serie,
      };

      // Ajouter markLine sur la première série
      if (index === 0) {
        return {
          ...baseSerie,
          markLine: {
            symbol: 'none' as const,
            data: [{
              xAxis: 50,
              lineStyle: {
                color: theme.palette.primary.main,
                width: 2,
                type: 'solid' as const
              },
              label: {
                show: true,
                position: 'start' as const,
                formatter: '50%'
              }
            }],
            silent: true,
          }
        };
      }
      return baseSerie;
    }),
  }

  return (
    <Box sx={{ width: 1, height: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2 }}>
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="poll-select-label">Sondage</InputLabel>
          <Select
            labelId="poll-select-label"
            id="poll-select"
            value={pollIndex}
            label="Sondage"
            onChange={(e) => setPollIndex(e.target.value as number)}
          >
            {pt1Dates.map((dateObj) => (
              <MenuItem key={dateObj.index} value={dateObj.index}>
                {new Date(dateObj.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Chart option={meritChartOption} />
      </Box>
    </Box>
    
  )
}
