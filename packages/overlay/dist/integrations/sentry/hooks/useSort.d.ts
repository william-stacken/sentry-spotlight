type useSortProps = {
    defaultSortType?: string;
    defaultAsc?: boolean;
};
export default function useSort({ defaultSortType, defaultAsc }: useSortProps): {
    toggleSortOrder: (type: string) => void;
    sort: {
        active: string;
        asc: boolean;
    };
    setSort: import('react').Dispatch<import('react').SetStateAction<{
        active: string;
        asc: boolean;
    }>>;
};
export {};
