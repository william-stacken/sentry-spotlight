import { default as React, ReactNode } from 'react';
import { SpotlightContext } from '../integrations/integration';

export declare const SpotlightContextProvider: React.FC<{
    children: ReactNode;
    context: SpotlightContext;
}>;
export declare const useSpotlightContext: () => {
    getSidecarUrl: (path?: string) => string;
    open: (path: string | undefined) => void;
    close: () => void;
    experiments: import('../types').ExperimentsConfig;
    sidecarUrl: string;
};
