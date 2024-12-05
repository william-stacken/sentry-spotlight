type FetchImpl = typeof fetch;
/**
 * We want to get an unpatched fetch implementation to avoid capturing our own calls.
 */
export declare function getNativeFetchImplementation(): FetchImpl;
export {};
