export type letterTracker = {
    letters: {
        [key: string]: string | number;
    };
    count: number | 'Rohirrim';
    most_frequent: string | string[] | 'invalid';
};
