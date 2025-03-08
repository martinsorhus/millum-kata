import { User } from '../../../../interfaces/user.interface';

export const first = (users: User[]) => {
    const superadmins = users
        .filter((u) => u.id && u.role === 'superadmin')
        .sort((a, b) => a.name.localeCompare(b.name));
    const others = users
        .filter((u) => u.id && u.role !== 'superadmin')
        .sort((a, b) => a.name.localeCompare(b.name));
    return [...superadmins, ...others];
};
