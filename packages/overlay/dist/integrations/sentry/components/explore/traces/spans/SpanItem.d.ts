import { Span, TraceContext } from '../../../../types';

declare const SpanItem: ({ span, startTimestamp, totalDuration, depth, traceContext, totalTransactions, spanNodeWidth, setSpanNodeWidth, query, }: {
    span: Span;
    startTimestamp: number;
    totalDuration: number;
    depth?: number;
    traceContext: TraceContext;
    totalTransactions?: number;
    spanNodeWidth: number;
    setSpanNodeWidth?: (val: number) => void;
    query?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default SpanItem;
