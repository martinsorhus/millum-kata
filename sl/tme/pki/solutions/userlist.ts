/**
 *
 * Implement a functon that takes in an array of users and returns an array of
 * arrays containing the users based on the first letter in their names
 * Users with superadmin role should be placed in their own array at position -1 in the outer array, regardless of their name
 * If no superadmins are in the list, the last array in outer array should be an empty array, []
 *
 * Arrays containing users should be sorted on descending id
 * Array of arrays should be sorted alphabetically, EXCEPT for array containing superadmins, which should always be at position -1
 *
 * example input
 * [
 *  { name: 'John', id: 5, role: 'regular' },
 *  { name: 'Simone', id: 41, role: 'superadmin' },
 *  { name: 'Sonny', id: 45, role: 'admin' },
 *  { name: 'Sam', id: 11, role: 'regular' },
 *  { name: 'Dan', id: 101, role: 'regular' },
 *  { name: 'Robert', id: 10023, role: 'superadmin'} ]
 *
 * example output
 *  [
 *    [ { name: 'Dan', id: 101, role: 'regular' } ],
 *    [ { name: 'John', id: 5, role: 'regular' } ],
 *    [ { name: 'Sonny', id: 45, role: 'admin'}, { name: 'Sam', id: 11, role: 'regular' } ],
 *    [ { name: 'Robert', id: 10023, role: 'superadmin' }, { name: 'Simone', id: 41, role: 'superadmin' } ]
 *  ]
 *
 * NB:
 * - input will not contain duplicate names or id's
 * - Names can contain all letters from these ["nb-NO", "da-DK", "sv-SE"] locales
 * - Input can be an empty array
 * - Input can contain no superadmins
 * - Input can contain only superadmins
 */

import { User } from '@interfaces';

export const userList = (users: User[]) => {
    const locales = ['nb-NO', 'da-DK', 'sv-SE'];
    let u: User[][] = [];
    const superAdmins: User[] = [];
    const addItem = (user: User) => {
        const idx = u.findIndex(
            (ur) =>
                ur.length &&
                ur[0].name
                    .toLocaleLowerCase(locales)
                    .startsWith(user.name[0].toLocaleLowerCase(locales))
        );
        idx > -1 ? u[idx].push(user) : u.push([user]);
    };
    users.forEach((us) => {
        us.role === 'superadmin' ? superAdmins.push(us) : addItem(us);
    });
    return [
        ...u.sort((a, b) =>
            a[0].name[0]
                .toLocaleLowerCase()
                .localeCompare(b[0].name[0].toLocaleLowerCase(locales), locales)
        ),
        superAdmins
    ].map((d) => d.sort((a, b) => b.id! - a.id!));
};
