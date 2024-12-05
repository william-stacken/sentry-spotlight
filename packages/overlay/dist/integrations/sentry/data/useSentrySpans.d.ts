import { Span } from '../types';

export declare const useSentrySpans: () => {
    allSpans: Span[];
    localSpans: Span[];
};
