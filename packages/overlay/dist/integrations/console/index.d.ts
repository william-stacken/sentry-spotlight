import { default as ConsoleTab } from './console-tab';
import { ConsoleMessage } from './types';

/**
 * This integration is meant to run on the same page where
 * the Spotlight UI is running. For standalone UI cases such
 * as the Electron app, we should publish a separate version
 * that takes in the sidecar URL.
 * @returns Integration Console integration for Spotlight
 */
export default function consoleIntegration(): {
    name: string;
    forwardedContentType: string[];
    tabs: ({ processedEvents }: {
        processedEvents: any[];
    }) => {
        id: string;
        title: string;
        notificationCount: {
            count: number;
        };
        content: typeof ConsoleTab;
    }[];
    setup: () => void;
    processEvent({ data }: import('../integration').RawEventContext): {
        event: ConsoleMessage;
    };
};
