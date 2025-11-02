import type { EChartsOption } from 'echarts';

export const mjMeritChartConfig: EChartsOption = {
//     title: {
//     text: 'Evaluation au jugement majoritaire',
//     subtext: 'date: 2025-01-09, source: IPSOS, commanditaire: La Tribune Dimanche',
//     left: 'center',
//     textStyle: {
//       fontWeight: 'bold'
//     }
//   },
  tooltip: {
    trigger: 'axis' as const,
    axisPointer: {
      type: 'shadow' as const
    },
    formatter: '{b}<br/>{a}: {c}%'
  },
  legend: {
    data: [
      'très satisfait',
      'plutôt satisfait',
      'ni satisfait ni insatisfait',
      'plutôt insatisfait',
      'très insatisfait'
    ],
    bottom: 0,
    orient: 'horizontal' as const
  },
  grid: {
    left: '15%',
    right: '4%',
    bottom: '15%',
    top: '15%',
    containLabel: true
  },
  xAxis: {
    type: 'value' as const,
    min: 0,
    max: 100,
    axisLabel: {
      formatter: '{value}%'
    },
    splitLine: {
      show: true
    }
  },
  yAxis: {
    type: 'category' as const,
    axisLabel: {
      fontSize: 12
    }
  },
}