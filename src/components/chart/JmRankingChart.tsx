import { Box } from '@mui/material'
import type { EChartsOption } from 'echarts';
import React from 'react';
import echartsRanking from '../../data/echarts_ranking.json'
import Chart from '../share/Chart';

const rankingChartOption: EChartsOption = {
    ...(echartsRanking as EChartsOption),
    tooltip: {
      trigger: 'item',
      formatter: (params) => {
        if (Array.isArray(params)) return '';
        const data = params.data as [string | number | Date, number]
        const date = new Date(data[0]).toLocaleDateString('fr-FR')
        const rank = Math.round(data[1])
        const rankText = rank === 1 ? '1er' : `${rank}ème`
        const marker = typeof params.marker === 'string' ? params.marker : (params.marker?.content ?? '')
        const seriesName = String(params.seriesName ?? '')
        return `${marker}${seriesName}<br/>${date} : ${rankText}`
      }
    }
  }

export const JmRankingChart : React.FC = () => {
    return (
        <Box sx={{ width: 1, height: 1,}}>
          <Chart option={rankingChartOption} />
        </Box>
    )
}

  // "title": {
  //   "text": "Classement des candidats à l'élection présidentielle 2027",
  //   "subtext": "source: IPSOS, commanditaire: La Tribune Dimanche",
  //   "left": "center",
  //   "textStyle": {
  //     "fontWeight": "bold"
  //   }
  // },