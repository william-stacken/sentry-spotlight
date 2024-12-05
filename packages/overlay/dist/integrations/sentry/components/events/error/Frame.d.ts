import { EventFrame } from '../../../types';

export default function Frame({ frame, defaultExpand, platform, }: {
    frame: EventFrame;
    defaultExpand: boolean;
    platform?: string;
}): import("react/jsx-runtime").JSX.Element;