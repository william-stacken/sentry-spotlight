import { IntegrationTab } from '../integrations/integration';

export type Props = {
    /**
     * Array of tabs to display.
     */
    tabs: IntegrationTab<unknown>[];
} & (NestedTabsProps | TopLevelTabsProps);
type NestedTabsProps = {
    /**
     * Whether the tabs are nested inside another tab.
     * If `nested` is `true`, links will be set relative to the parent
     * tab route instead of absolute to the root.
     */
    nested: true;
    setOpen?: undefined;
};
type TopLevelTabsProps = {
    nested?: false;
    /**
     * Setter to control the open state of the overlay
     */
    setOpen: (value: boolean) => void;
};
export default function Tabs({ tabs, nested, setOpen }: Props): import("react/jsx-runtime").JSX.Element;
export {};
