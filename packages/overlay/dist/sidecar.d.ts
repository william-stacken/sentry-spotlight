import { default as React } from 'react';

export declare function connectToSidecar(sidecarUrl: string, contentTypeListeners: Record<string, (event: MessageEvent) => void>, setOnline: React.Dispatch<React.SetStateAction<boolean>>): () => void;
