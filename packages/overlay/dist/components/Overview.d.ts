import { Integration, IntegrationData } from '../integrations/integration';
import { NotificationCount } from '../types';

export default function Overview({ integrations, integrationData, setTriggerButtonCount, setOpen, }: {
    integrations: Integration[];
    integrationData: IntegrationData<unknown>;
    setTriggerButtonCount: (count: NotificationCount) => void;
    setOpen: (value: boolean) => void;
}): import("react/jsx-runtime").JSX.Element;
