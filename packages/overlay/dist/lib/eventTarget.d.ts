/**
 * Returns the global singleton event target for spotlight.
 *
 * This is used to communicate between spotlight and the outside world.
 * To avoid instances where multiple versions of spotlight code are loaded,
 * we put the target onto the global object.
 *
 * @see https://github.com/getsentry/spotlight/issues/68
 *
 * In case of window being undefined (e.g. in SSR), we return a fallback event target.
 * which is local to one spotlight code instance.
 */
export declare function getSpotlightEventTarget(): EventTarget;
/**
 * Trigger an event in Spotlight.
 *
 * This is primarily useful for handling an uncaught error/crash, and forcing the debugger
 * to render vs a native error handler.
 *
 * e.g. trigger("sentry.showError", {eventId});
 */
export declare function trigger(eventName: string, payload?: unknown): Promise<void>;
export declare function on(eventName: string, cb: EventListener): Promise<void>;
export declare function off(eventName: string, cb: EventListener): Promise<void>;