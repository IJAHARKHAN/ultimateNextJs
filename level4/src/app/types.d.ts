declare global{
    interface Window {
        __NEXT_DATA__: any;
    }

    interface Moon {
        name: string;
        age: number;
    }

    type globalStringA = string | number | boolean;  // Union type that can be a string, number, or boolean
}

export {}