import { NotificationCount, AnchorConfig } from '../types';

export default function Trigger({ isOpen, setOpen, notificationCount, anchor, }: {
    isOpen: boolean;
    setOpen: (value: boolean) => void;
    notificationCount: NotificationCount;
    anchor?: AnchorConfig;
}): import("react/jsx-runtime").JSX.Element;