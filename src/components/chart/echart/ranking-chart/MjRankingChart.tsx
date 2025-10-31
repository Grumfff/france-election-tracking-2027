import { Box } from '@mui/material';
import type { EChartsOption } from 'echarts';
import React from 'react';
import { useSelector } from 'react-redux';
import echartsRanking from '../../../../data/echarts_ranking.json';
import { selectCandidateRankingsForECharts } from '../../../../store/jm-slice/jm-selector';
import Chart from '../../../share/Chart';
import { rankingChartConfig } from './rankingChartConfig';

const baseOption = echartsRanking as EChartsOption;

export const MjRankingChart: React.FC = () => {
  const candidateRankings = useSelector(selectCandidateRankingsForECharts);

  // Ajouter type: 'line' et endLabel à chaque série
  const series = candidateRankings?.map(ranking => ({
    ...ranking,
    type: 'line' as const,
    endLabel: {
      show: true,
      formatter: (params: any) => {
        const rank = Math.round(params.value[1]);
        const rankText = rank === 1 ? '1er ' : `${rank}e`.padEnd(4, ' ');
        return `${rankText} ${params.seriesName}`;
      },
      distance: 15
    }
  })) || [];

  const rankingChartOption: EChartsOption = {
    ...baseOption,
    ...rankingChartConfig,
    series
  }

  if (!candidateRankings) {
    return <Box sx={{ p: 2 }}>Chargement des données...</Box>;
  }

  return (
    <Box sx={{ width: 1, height: 1 }}>
      <Chart option={rankingChartOption} />
      <Box sx={{ mt: 2, p: 2, bgcolor: 'background.paper' }}>
        <h3>Données ({candidateRankings.length} candidats):</h3>
        <pre style={{ maxHeight: '400px', overflow: 'auto', fontSize: '11px' }}>
          {JSON.stringify(candidateRankings, null, 2)}
        </pre>
      </Box>
    </Box>
  )
}
