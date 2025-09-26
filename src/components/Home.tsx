import Chart from './Chart'
import type { EChartsOption } from 'echarts'

export function Home() {
  const chartOption: EChartsOption = {
    title: {
      text: 'Sample Chart',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Data',
        type: 'pie',
        radius: '100%',
        data: [
          { value: 1048, name: 'Category A' },
          { value: 735, name: 'Category B' },
          { value: 580, name: 'Category C' },
          { value: 484, name: 'Category D' },
          { value: 300, name: 'Category E' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }

  return (
    <Chart option={chartOption} />
  )
}