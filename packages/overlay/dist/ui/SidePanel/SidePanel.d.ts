import { ComponentPropsWithoutRef, ReactNode } from 'react';

export type SidePanelProps = Omit<ComponentPropsWithoutRef<'div'>, 'className'> & {
    backto: string;
};
export declare function SidePanelHeader({ title, subtitle, backto, }: {
    title: ReactNode;
    subtitle?: ReactNode;
    backto: string;
}): import("react/jsx-runtime").JSX.Element;
export default function SidePanel(props: SidePanelProps): import("react/jsx-runtime").JSX.Element;