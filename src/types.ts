export type ContextValue = {
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
};

export type ProviderProps = {
    children: React.ReactNode;
    value: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: string) => void;
};
