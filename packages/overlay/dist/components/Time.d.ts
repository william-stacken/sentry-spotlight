export default function Time({ date, ...props }: {
    date: string | number | Date;
    format?: string;
} & React.ComponentProps<'time'>): import("react/jsx-runtime").JSX.Element | null;
