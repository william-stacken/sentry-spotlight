import { default as ViteInspect } from './vite-inspect';

export default function viteInspectIntegration(): {
    name: string;
    tabs: () => {
        id: string;
        title: string;
        content: typeof ViteInspect;
    }[];
    setup: () => void;
};