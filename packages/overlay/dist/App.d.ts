import { SpotlightOverlayOptions } from './types';

type AppProps = Omit<SpotlightOverlayOptions, 'debug' | 'injectImmediately'> & Required<Pick<SpotlightOverlayOptions, 'sidecarUrl'>>;
export default function App({ openOnInit, showTriggerButton, integrations, sidecarUrl, anchor, fullPage, showClearEventsButton, initialEvents, }: AppProps): import("react/jsx-runtime").JSX.Element;
export {};
