export default function JsonViewer({ data, onUpdateData, editingEnabled, clipboardEnabled, displayDataTypes, quotesOnKeys, name, collapseStringsAfterLength, }: {
    data: object;
    onUpdateData?: (value: unknown) => void;
    editingEnabled?: boolean;
    clipboardEnabled?: boolean;
    displayDataTypes?: boolean;
    quotesOnKeys?: boolean;
    name?: string | null | false;
    collapseStringsAfterLength?: number;
}): import("react/jsx-runtime").JSX.Element;
