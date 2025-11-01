import { Box, Typography } from '@mui/material';
import type { EChartsOption } from 'echarts';
import React from 'react';
import Chart from '../../../share/Chart';
import { rankingChartConfig } from './rankingChartConfig';
import { useCandidateRankingSeries } from './useCandidateRankingSeries';
import { useGradeAreaSeries } from './useGradeAreaSeries';

interface MjRankingChartProps {
    isThumbnail?: boolean;
}

export const MjRankingChart: React.FC<MjRankingChartProps> = ({ isThumbnail = false }) => {

  const candidateRankingsSeries = useCandidateRankingSeries();
  const gradeAreaSeries = useGradeAreaSeries();

  const series = [...gradeAreaSeries, ...candidateRankingsSeries,];

  const rankingChartOption: EChartsOption = {
    ...rankingChartConfig,
    legend: isThumbnail ? { show: false } : rankingChartConfig.legend,
    series
  }

  if (!candidateRankingsSeries.length) {
    return <Box sx={{ p: 2 }}>Chargement des données...</Box>;
  }

  return (
    <Box sx={{ width: 1, height: 1 }}>
      { !isThumbnail && <Typography variant="h6">Évolution du classement des candidats</Typography>}
      <Chart option={rankingChartOption} />
    </Box>
  )
}
