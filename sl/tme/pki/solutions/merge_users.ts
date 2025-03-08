import { User } from '@interfaces';

export const mergeUsers = (users1: User[], users2: User[]) => {
    const array = users1.map((u, i) => {
        return users2[i] ? [u, users2[i]] : [];
    });
    return array.flat();
};
