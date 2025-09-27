import Chart from './Chart'
import type { EChartsOption } from 'echarts'
import echartsConfig from '../assets/data/echarts_config.json'

export function Home() {
  const chartOption: EChartsOption = echartsConfig as EChartsOption

  return (
    <Chart option={chartOption} />
  )
}