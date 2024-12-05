import { Span, TraceContext } from '../../../../types';

export default function SpanDetails({ traceContext, span, startTimestamp, totalDuration, totalTransactions, }: {
    traceContext: TraceContext;
    span: Span;
    totalTransactions?: number;
    startTimestamp: number;
    totalDuration: number;
}): import("react/jsx-runtime").JSX.Element;
