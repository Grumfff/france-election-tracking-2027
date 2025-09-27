import Chart from './Chart'
import type { EChartsOption } from 'echarts'
import echartsConfig from '../assets/data/echarts_config.json'

export function Home() {
  const chartOption: EChartsOption = {
    ...echartsConfig,
    grid: {
      ...echartsConfig.grid,
      top: '10%',
      bottom: '8%'
    },
    legend: {
      ...echartsConfig.legend,
      bottom: '2%'
    },
    series: [
      ...echartsConfig.series.map((series) => {
        const { itemStyle, ...seriesWithoutItemStyle } = series
        return seriesWithoutItemStyle
      }),
      {
        type: 'line',
        markLine: {
          data: [{
            xAxis: 50,
            lineStyle: {
              color: '#000',
              width: 2,
              type: 'solid'
            },
            label: {
              show: false
            }
          }],
          symbol: 'none'
        },
        data: []
      }
    ]
  } as unknown as EChartsOption

  return (
    <Chart option={chartOption} />
  )
}