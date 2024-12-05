import { SentryEvent } from '../types';
import { ComponentPropsWithoutRef } from 'react';

type Platform = 'python' | 'javascript' | 'node' | 'ruby' | 'csharp' | string;
export default function PlatformIcon({ platform, event, size, width, height, title, ...props }: ComponentPropsWithoutRef<'svg'> & {
    size?: number;
    platform?: Platform;
    event?: SentryEvent;
    height?: number;
    width?: number;
    title?: string;
}): import("react/jsx-runtime").JSX.Element;
export {};