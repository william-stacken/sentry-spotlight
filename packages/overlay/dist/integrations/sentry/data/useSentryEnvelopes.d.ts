export declare const useSentryEnvelopes: () => {
    allEnvelopes: {
        envelope: import('@sentry/types').Envelope;
        rawEnvelope: import('../../integration').RawEventContext;
    }[];
    localEnvelopes: {
        envelope: import('@sentry/types').Envelope;
        rawEnvelope: import('../../integration').RawEventContext;
    }[];
};
