import { Span, TraceContext } from '../../../../types';

export default function SpanTree({ traceContext, tree, startTimestamp, totalDuration, depth, totalTransactions, spanNodeWidth, setSpanNodeWidth, query, }: {
    traceContext: TraceContext;
    tree: Span[];
    startTimestamp: number;
    totalDuration: number;
    depth?: number;
    totalTransactions?: number;
    spanNodeWidth: number;
    setSpanNodeWidth?: (val: number) => void;
    query?: string;
}): import("react/jsx-runtime").JSX.Element | null;
