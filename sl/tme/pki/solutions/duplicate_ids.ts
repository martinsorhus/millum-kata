import { User } from '../../../../interfaces/user.interface';

export const second = (users1: User[], users2: User[]) => {
    const users = users1.map((u) => {
        const duplicatedUserId = users2.find((u2) => u2.id === u.id);
        return duplicatedUserId ? { ...u, name: duplicatedUserId.name } : u;
    });
    return users;
};
