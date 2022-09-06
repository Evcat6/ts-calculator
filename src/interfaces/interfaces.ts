

export interface ButtonProps {
    id?: string;
    name?: string;
    children: React.ReactNode;
    onClick?: (e?: any) => void;
}

export interface ButtonsProps {
    clear: VoidFunction;
    backspace: VoidFunction;
    addItem: Function;
    calculate: VoidFunction;
}


export interface InputProps {
    result: string;
}
