import { Integration, IntegrationData } from '../integrations/integration';
import { NotificationCount } from '../types';

export default function Debugger({ integrations, isOpen, setOpen, integrationData, isOnline, setTriggerButtonCount: setNotificationCount, fullPage, showClearEventsButton, }: {
    integrations: Integration[];
    isOpen: boolean;
    setOpen: (value: boolean) => void;
    integrationData: IntegrationData<unknown>;
    isOnline: boolean;
    setTriggerButtonCount: (count: NotificationCount) => void;
    fullPage: boolean;
    showClearEventsButton: boolean;
}): import("react/jsx-runtime").JSX.Element;