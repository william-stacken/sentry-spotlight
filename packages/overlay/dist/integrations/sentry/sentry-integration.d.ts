import { Client, Event } from '@sentry/types';

/**
 * A Sentry integration for Spotlight integration that the Overlay will inject automatically.
 * This integration does the following:
 *
 *  - Drop transactions created from interactions with the Spotlight UI
 *  - Forward Sentry events sent from the browser SDK to the Spotlight instance running on
 *    the same page via the "direct message" method (w/o a need for the sidecar)
 *
 * @returns Sentry integration for Spotlight.
 */
export declare const spotlightIntegration: () => {
    name: string;
    setupOnce: () => void;
    setup: () => void;
    processEvent: (event: Event) => Event | null;
    afterAllSetup: (client: Client) => () => void;
};
