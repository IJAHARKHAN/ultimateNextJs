declare global{
    interface Window {
        __NEXT_DATA__: any;
    }

    interface Moon {
        name: string;
        age: number;
    }
}

export {}