import { ComponentProps } from 'react';

export default function HiddenItemsButton({ itemCount, ...props }: Omit<ComponentProps<'button'>, 'className' | 'children'> & {
    itemCount: number;
}): import("react/jsx-runtime").JSX.Element;