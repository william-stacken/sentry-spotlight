import { Envelope } from '@sentry/types';
import { RawEventContext } from '../../integration';
import { Sdk, SentryErrorEvent, SentryEvent, Span, Trace } from '../types';

type OnlineSubscription = ['online', (status: boolean) => void];
type EventSubscription = ['event', (event: SentryEvent) => void];
type TraceSubscription = ['trace', (trace: Trace) => void];
type Subscription = OnlineSubscription | EventSubscription | TraceSubscription;
declare class SentryDataCache {
    protected events: SentryEvent[];
    protected eventIds: Set<string>;
    protected sdks: Sdk[];
    protected traces: Trace[];
    protected tracesById: {
        [id: string]: Trace;
    };
    protected localTraceIds: Set<string>;
    protected envelopes: {
        envelope: Envelope;
        rawEnvelope: RawEventContext;
    }[];
    protected subscribers: Map<string, Subscription>;
    protected contextLinesProvider: string;
    constructor(initial?: (SentryEvent & {
        event_id?: string;
    })[]);
    setSidecarUrl(url: string): void;
    inferSdkFromEvent(event: SentryEvent): Sdk;
    pushEnvelope({ envelope, rawEnvelope }: {
        envelope: Envelope;
        rawEnvelope: RawEventContext;
    }): number;
    pushEvent(event: SentryEvent & {
        event_id?: string;
    }): Promise<void>;
    getEvents(): SentryEvent[];
    getTraces(): Trace[];
    getSdks(): Sdk[];
    getEnvelopes(): {
        envelope: Envelope;
        rawEnvelope: RawEventContext;
    }[];
    getEventById(id: string): SentryEvent | undefined;
    getTraceById(id: string): Trace;
    getEventsByTrace(traceId: string, spanId?: string | null): SentryEvent[];
    getSpanById(traceId: string, spanId: string): Span | undefined;
    resetData(): void;
    subscribe(...args: Subscription): () => void;
    /**
     * Mark a traceId as being seen in the local session.
     *
     * @param traceId
     */
    trackLocalTrace(traceId: string): void;
    /**
     * Determine if a traceId was seen in the local session.
     *
     * A result of `null` means "unknown", which implies there is no known
     * information about any session-initiated traces.
     */
    isTraceLocal(traceId: string): boolean | null;
    /**
     * Reverses the stack trace and tries to fill missing context lines
     * @param errorEvent
     * @returns
     */
    processStacktrace(errorEvent: SentryErrorEvent): Promise<void[]>;
}
declare const _default: SentryDataCache;
export default _default;
