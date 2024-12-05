export declare const DB_SPAN_REGEX: RegExp;
export declare const RESOURCES_SORT_KEYS: {
    avgDuration: string;
    timeSpent: string;
    description: string;
    avgEncodedSize: string;
};
export declare const RESOURCE_HEADERS: ({
    id: string;
    title: string;
    sortKey: string;
    primary: boolean;
} | {
    id: string;
    title: string;
    sortKey: string;
    primary?: undefined;
})[];
export declare const QUERIES_SORT_KEYS: {
    queryDesc: string;
    timeSpent: string;
    avgDuration: string;
};
export declare const QUERIES_HEADERS: ({
    id: string;
    title: string;
    sortKey: string;
    primary: boolean;
} | {
    id: string;
    title: string;
    sortKey: string;
    primary?: undefined;
})[];
export declare const TRANSACTIONS_SORT_KEYS: {
    count: string;
    lastSeen: string;
};
export declare const TRANSACTIONS_TABLE_HEADERS: ({
    id: string;
    title: string;
    primary: boolean;
    sortKey?: undefined;
} | {
    id: string;
    title: string;
    sortKey: string;
    primary?: undefined;
})[];
export declare const TRANSACTION_SUMMARY_SORT_KEYS: {
    timestamp: string;
    duration: string;
};
export declare const TRANSACTION_SUMMARY_TABLE_HEADERS: ({
    id: string;
    title: string;
    primary: boolean;
    sortKey?: undefined;
} | {
    id: string;
    title: string;
    sortKey: string;
    primary?: undefined;
} | {
    id: string;
    title: string;
    primary?: undefined;
    sortKey?: undefined;
})[];
export declare const QUERY_SUMMARY_SORT_KEYS: {
    foundIn: string;
    spanId: string;
    timeSpent: string;
};
export declare const QUERY_SUMMARY_HEADERS: ({
    id: string;
    title: string;
    sortKey: string;
    primary: boolean;
} | {
    id: string;
    title: string;
    sortKey: string;
    primary?: undefined;
})[];
export declare const WEB_VITALS_SORT_KEYS: {
    pages: string;
    lcp: string;
    fcp: string;
    fid: string;
    cls: string;
    ttfb: string;
    score: string;
};
export declare const WEB_VITALS_HEADERS: ({
    id: string;
    title: string;
    sortKey: string;
    primary: boolean;
} | {
    id: string;
    title: string;
    sortKey: string;
    primary?: undefined;
})[];
export type WebVitals = 'lcp' | 'fcp' | 'cls' | 'ttfb' | 'fid';
export declare const PERFORMANCE_SCORE_PROFILES: {
    profiles: {
        name: string;
        scoreComponents: {
            measurement: string;
            weight: number;
            p10: number;
            p50: number;
            optional: boolean;
        }[];
        condition: {
            op: string;
            name: string;
            value: string;
        };
    }[];
};
