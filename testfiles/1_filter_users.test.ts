import { filterUsers } from '@katas';
import { expect, test } from '@jest/globals';
import { User } from '@interfaces';

const users: User[] = [
    { name: 'Magne', role: 'regular', id: 1 },
    { name: 'Egil', role: 'regular' },
    { name: 'Andrea', role: 'superadmin' },
    { name: 'Jenny', role: 'admin', id: 2 },
    { name: 'Oddne', role: 'regular', id: 3 },
    { name: 'Gro', role: 'regular', id: 4 },
    { name: 'Seline', role: 'superadmin', id: 5 },
    { name: 'Ole', role: 'regular', id: 6 },
    { name: 'Per', role: 'superadmin', id: 7 }
];

test('returns correct length', () => {
    expect(filterUsers(users)).toHaveLength(7);
});

test('filters out all users with no id', () => {
    const additionalUsers: User[] = [
        { name: 'Johnny', role: 'regular' },
        { name: 'OnkelP', role: 'regular' },
        { name: 'Eirik', role: 'superadmin' },
        { name: 'Stian', role: 'admin' }
    ];
    expect(filterUsers([...users, ...additionalUsers])).not.toContain({
        name: 'Johnny',
        role: 'regular'
    });
    expect(filterUsers([...users, ...additionalUsers])).not.toContain({
        name: 'OnkelP',
        role: 'regular'
    });
    expect(filterUsers([...users, ...additionalUsers])).not.toContain({
        name: 'Eirik',
        role: 'superadmin'
    });
    expect(filterUsers([...users, ...additionalUsers])).not.toContain({
        name: 'Stian',
        role: 'admin'
    });
    expect(filterUsers([...users, ...additionalUsers])).not.toContain({
        name: 'Egil',
        role: 'regular'
    });
    expect(filterUsers([...users, ...additionalUsers])).not.toContain({
        name: 'Andrea',
        role: 'superadmin'
    });
});

test('return users in correct order', () => {
    expect(filterUsers(users)).toStrictEqual([
        { name: 'Per', role: 'superadmin', id: 7 },
        { name: 'Seline', role: 'superadmin', id: 5 },
        { name: 'Gro', role: 'regular', id: 4 },
        { name: 'Jenny', role: 'admin', id: 2 },
        { name: 'Magne', role: 'regular', id: 1 },
        { name: 'Oddne', role: 'regular', id: 3 },
        { name: 'Ole', role: 'regular', id: 6 }
    ]);
});
