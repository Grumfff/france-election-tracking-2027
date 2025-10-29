import { Box, useTheme } from "@mui/material"
import Chart from "../../share/Chart"
import echartsMerit from '../../../data/echarts_ipsos-2015-1.json';
import type { EChartsOption } from "echarts";

export const JmMeritChart: React.FC = () => {
  const theme = useTheme();

  const meritChartOption: EChartsOption = {
    ...(echartsMerit as EChartsOption),
    series: (echartsMerit.series || []).map((serie: any, index: number) => {
      // Ajouter le markLine seulement à la première série
      if (index === 0) {
        return {
          ...serie,
          markLine: {
            symbol: 'none',
            data: [{
              xAxis: 50,
              lineStyle: {
                color: theme.palette.primary.main,
                width: 2,
                type: 'solid'
              },
              label: {
                show: true,
                position: 'start',
                formatter: '50%'
              }
            }],
            silent: true,
          }
        }
      }
      return serie;
    }) as any
  }

  return (
    <Box sx={{ width: 1, height: 1, }}>
      <Chart option={meritChartOption} />
    </Box>
  )
}
