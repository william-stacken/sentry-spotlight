import { ReactNode } from 'react';

export type TooltipProps = {
    content: string | ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    children: ReactNode;
};
declare const Tooltip: ({ content, position, children }: TooltipProps) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
