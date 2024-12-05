export declare const MAX_AGE: number;
export declare const MAX_ITEMS = 1000;
export declare const DB_NAME = "SentrySpotlight";
export declare const OBJECT_STORE_NAME = "events";
export declare const DB_VERSION = 2;
export declare function clearDBCache(): void;
export declare function add(value: unknown): Promise<unknown>;
export declare function getEntries(): Promise<unknown>;
export declare function reset(): Promise<unknown>;
