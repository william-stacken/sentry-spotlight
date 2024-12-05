import { ReactNode, default as React } from 'react';
import { SentryEvent } from '../types';

interface SetEventsAction {
    e: SentryEvent | SentryEvent[];
    action: string;
}
interface SentryEventsContextProps {
    events: SentryEvent[];
    setEvents: React.Dispatch<SetEventsAction>;
}
export declare const SentryEventsContext: React.Context<SentryEventsContextProps>;
export declare const SentryEventsContextProvider: React.FC<{
    children: ReactNode;
}>;
export {};