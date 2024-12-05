import { SentryEvent } from '../types';
import { WebVitals } from '../constants';

export declare function calculateCdfSigma(p10: number, p50: number): number;
export declare function calculateCdfScore(value: number, p10: number, p50: number): number;
interface ScoreComponent {
    measurement: string;
    weight: number;
    p10: number;
    p50: number;
    optional?: boolean;
}
interface Profile {
    name: string;
    scoreComponents: ScoreComponent[];
    condition?: {
        op: string;
        name: string;
        value: string | number;
    };
}
interface PerformanceScoreConfig {
    profiles: Profile[];
}
export declare function normalizePerformanceScore(event: SentryEvent, performanceScore: PerformanceScoreConfig | undefined): void;
export declare function calculateLabelCoordinates(size: number, x: number, y: number, barWidth: number, metricWeights: {
    [key in WebVitals]: number;
}, labelWidthPadding: number, labelHeightPadding: number, radiusPadding: number): {
    lcpX: number;
    lcpY: number;
    fcpX: number;
    fcpY: number;
    fidX: number;
    fidY: number;
    clsX: number;
    clsY: number;
    ttfbX: number;
    ttfbY: number;
};
export {};
