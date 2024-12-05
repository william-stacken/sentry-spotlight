import { Envelope } from '@sentry/types';
import { RawEventContext } from '../integration';
import { default as ErrorsTab } from './tabs/ErrorsTab';
import { default as ExploreTab } from './tabs/ExploreTab';

type SentryIntegrationOptions = {
    injectIntoSDK?: boolean;
    openLastError?: boolean;
    retries?: number;
};
export default function sentryIntegration(options?: SentryIntegrationOptions): {
    name: string;
    forwardedContentType: string[];
    setup: ({ open, sidecarUrl }: import('../integration').SpotlightContext) => () => void;
    processEvent: (event: RawEventContext) => {
        event: Envelope;
        rawEvent: RawEventContext;
    };
    tabs: () => ({
        id: string;
        title: string;
        notificationCount: {
            count: number;
            severe: boolean;
        };
        content: typeof ErrorsTab;
    } | {
        id: string;
        title: string;
        content: typeof ExploreTab;
        notificationCount?: undefined;
    })[];
    reset: () => void;
};
/**
 * Implements parser for
 * @see https://develop.sentry.dev/sdk/envelopes/#serialization-format
 * @param rawEvent Envelope data
 * @returns parsed envelope
 */
export declare function processEnvelope(rawEvent: RawEventContext): {
    event: Envelope;
    rawEvent: RawEventContext;
};
export {};
