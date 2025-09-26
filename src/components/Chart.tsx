import React from 'react';
import ReactECharts from 'echarts-for-react';
import type { EChartsOption } from 'echarts';

interface ChartProps {
  option: EChartsOption;
  style?: React.CSSProperties;
  className?: string;
  theme?: string;
  onEvents?: Record<string, (params: any) => void>;
}

const Chart: React.FC<ChartProps> = ({
  option,
  style = { height: '100%', width: '100%' },
  className,
  theme,
  onEvents
}) => {
  return (
    <ReactECharts
      option={option}
      style={style}
      className={className}
      theme={theme}
      onEvents={onEvents}
      opts={{ renderer: 'canvas' }}
    />
  );
};

export default Chart;