import { default as HydrationErrorDisplay } from './HydrationErrorDisplay';

export default function hydrationErrorIntegration(): {
    name: string;
    tabs: () => {
        id: string;
        title: string;
        content: typeof HydrationErrorDisplay;
    }[];
};