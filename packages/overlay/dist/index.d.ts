import { CONTEXT_LINES_ENDPOINT } from '@spotlightjs/sidecar/constants';
import { DEFAULT_ANCHOR, DEFAULT_EXPERIMENTS, DEFAULT_SIDECAR_STREAM_URL } from './constants';
import { off, on, trigger } from './lib/eventTarget';
import { React, ReactDOM } from './react-instance';
import { SpotlightOverlayOptions } from './types';

export { default as console } from './integrations/console/index';
export { default as hydrationError } from './integrations/hydration-error/index';
export { default as sentry } from './integrations/sentry/index';
export { default as viteInspect } from './integrations/vite-inspect/index';
export type { SpotlightOverlayOptions, WindowWithSpotlight } from './types';
export { CONTEXT_LINES_ENDPOINT, DEFAULT_ANCHOR, DEFAULT_EXPERIMENTS, DEFAULT_SIDECAR_STREAM_URL as DEFAULT_SIDECAR_URL, off, on, React, ReactDOM, trigger, };
/**
 * Open the Spotlight debugger Window
 */
export declare function openSpotlight(path?: string | undefined): Promise<void>;
/**
 * Close the Spotlight debugger Window
 */
export declare function closeSpotlight(): Promise<void>;
/**
 * Invokes the passed in callback when the Spotlight debugger Window is closed
 */
export declare function onClose(cb: EventListener): Promise<void>;
/**
 * Send an event to spotlight without the sidecar
 */
export declare function sendEvent(contentType: string, data: string | Uint8Array): Promise<void>;
/**
 * Invokes the passed in callback when the Spotlight debugger Window is opened
 */
export declare function onOpen(cb: EventListener): Promise<void>;
/**
 * Register a callback that is invoked when a severe event is processed
 * by a Spotlight integration.
 * A count of the number of collected severe events is passed to the callback.
 */
export declare function onSevereEvent(cb: (count: number) => void): Promise<void>;
export declare function init(options?: SpotlightOverlayOptions): Promise<void>;
