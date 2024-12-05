export type RingChartProps = React.HTMLAttributes<SVGSVGElement> & {
    backgroundColors: string[];
    maxValues: number[];
    segmentColors: string[];
    text: React.ReactNode;
    values: number[];
    /**
     * The width of the progress ring bar
     */
    barWidth?: number;
    onHoverActions?: (() => void)[];
    onBlur?: () => void;
    /**
     * Endcaps on the progress bar
     */
    progressEndcaps?: React.SVGAttributes<SVGCircleElement>['strokeLinecap'];
    size?: number;
    /**
     * The css to apply to the center text. A function may be provided to compute
     * styles based on the state of the progress bar.
     */
    textCss?: string;
    x?: number;
    y?: number;
};
declare function RingChart({ values, maxValues, size, barWidth, text, textCss, segmentColors, backgroundColors, progressEndcaps, onHoverActions, onBlur, ...p }: RingChartProps): import("react/jsx-runtime").JSX.Element;
export default RingChart;
