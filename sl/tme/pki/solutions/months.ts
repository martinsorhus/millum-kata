import { ExtendedUser } from '../../../../interfaces/extended-user.interface';

const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

export const fourth = (users: ExtendedUser[]) => {
    let obj = {
        unsupported: []
    };
    users.forEach((u) => {
        if (Object.keys(obj).includes(u.birthdayMonth)) {
            obj[u.birthdayMonth] = [...obj[u.birthdayMonth], u.name].sort((a, b) =>
                a.localeCompare(b)
            );
        } else if (months.includes(u.birthdayMonth)) {
            obj[u.birthdayMonth] = [u.name];
        } else {
            obj['unsupported'] = [...obj['unsupported'], u.name].sort((a, b) => a.localeCompare(b));
        }
    });
    return obj;
};
