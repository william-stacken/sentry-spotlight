import { MetricScoreProps, MetricWeightsProps } from '../../../types';

type PerformanceChartProps = {
    metricScore: MetricScoreProps;
    metricWeights: MetricWeightsProps;
    totalScore?: number;
    size?: number;
    barWidth?: number;
    left?: number;
    top?: number;
    labelWidthPadding?: number;
    labelHeightPadding?: number;
    radiusPadding?: number;
};
declare const PerformanceChart: ({ metricScore, metricWeights, totalScore, size, barWidth, left, top, labelWidthPadding, labelHeightPadding, radiusPadding, }: PerformanceChartProps) => import("react/jsx-runtime").JSX.Element;
export default PerformanceChart;
