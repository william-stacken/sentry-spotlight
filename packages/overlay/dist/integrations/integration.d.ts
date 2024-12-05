import { ComponentType } from 'react';
import { ExperimentsConfig, NotificationCount } from '../types';

export type SpotlightContext = {
    open: (path: string | undefined) => void;
    close: () => void;
    experiments: ExperimentsConfig;
    sidecarUrl: string;
};
export type Integration<T = any> = {
    /**
     * Name of the integration
     */
    name: string;
    /**
     * The content-type http headers determining which events dispatched to spotlight
     * events should be forwarded to this integration.
     *
     * For example: ["application/x-sentry-envelope"]
     */
    forwardedContentType?: string[];
    /**
     * A function returning an array of tabs to be displayed in the UI.
     *
     * @param context contains the processed events for the tabs. Use this information to
     * e.g. update the notification count badge of the tab.
     */
    tabs?: TabsCreationFunction<T>;
    /**
     * Setup hook called when Spotlight is initialized.
     *
     * Use this hook to setup any global state, instrument handlers, etc.
     */
    setup?: (context: SpotlightContext) => void | Promise<void> | TeardownFunction;
    /**
     * Hook called whenever spotlight forwards a new raw event to this integration.
     *
     * Use this hook to process and convert the raw request payload (string) to a
     * data structure that your integration works with in the UI.
     *
     * If you want to disregard the sent event, simply return `undefined`.
     *
     * The returned object will be passed to your tabs function.
     */
    processEvent?: (eventContext: RawEventContext) => ProcessedEventContainer<T> | undefined;
    /**
     * To reset the integration.
     *
     * @returns void
     */
    reset?: () => void;
};
export type IntegrationTab<T> = {
    /**
     * Id of the tab. This needs to be a unique name.
     */
    id: string;
    /**
     * Title of the tab. This is what will be displayed in the UI.
     */
    title: string;
    /**
     * If this property is set, a count badge will be displayed
     * next to the tab title with the specified value.
     */
    notificationCount?: NotificationCount;
    /**
     * JSX content of the tab. Go crazy, this is all yours!
     */
    content?: ComponentType<{
        processedEvents: T[];
    }>;
    onSelect?: () => void;
};
export type ProcessedEventContainer<T> = {
    /**
     * The processed event data to be passed to your tabs.
     */
    event: T;
};
export type Severity = 'default' | 'severe';
export type IntegrationData<T> = Record<string, ProcessedEventContainer<T>[]>;
type TabsContext<T> = {
    processedEvents: T[];
};
type TabsCreationFunction<T> = (context: TabsContext<T>) => IntegrationTab<T>[];
export type RawEventContext = {
    /**
     * The content-type header of the event
     */
    contentType: string;
    /**
     * The raw data in string form of the request.
     * Use this function to parse and process the raw data it to whatever data structure
     * you expect for the given `contentType`.
     *
     * Return the processed object or undefined if the event should be ignored.
     */
    data: string | Uint8Array;
};
type TeardownFunction = () => void | Promise<() => void>;
export declare function initIntegrations(integrations: Integration[], context: SpotlightContext): Promise<[Integration[], TeardownFunction[]]>;
export {};