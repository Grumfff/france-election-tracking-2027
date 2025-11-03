import { Box, useTheme } from "@mui/material";
import type { EChartsOption } from "echarts";
import { useSelector } from "react-redux";
// import echartsMerit from '../../../../data/echarts_ipsos-2015-1.json';
import { selectCandidateDistributionByPollIndex, selectMeritChartSeriesByPollIndexForECharts } from "../../../../store/jm-slice/jm-selector";
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
  const candidateDistributions = useSelector((state: RootState) => selectCandidateDistributionByPollIndex(state, 0));
  const meritChartSeries = useSelector((state: RootState) => selectMeritChartSeriesByPollIndexForECharts(state, 0));

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
    <Box sx={{ width: 1, height: 1, }}>
      <Chart option={meritChartOption} />
    </Box>
  )
}
