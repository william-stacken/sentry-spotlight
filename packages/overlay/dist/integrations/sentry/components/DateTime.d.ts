export default function DateTime({ date, ...props }: {
    date: string | number | Date;
} & React.ComponentProps<'time'>): import("react/jsx-runtime").JSX.Element | null;