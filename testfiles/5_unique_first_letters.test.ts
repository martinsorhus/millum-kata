import { expect, test } from '@jest/globals';
import { User } from '../interfaces/user.interface';
import { fifth } from '../katas/5_unique_first_letters';

const users: User[] = [
    { name: 'Egil', role: 'admin' },
    { name: 'Tom', role: 'regular' },
    { name: 'Sonja', role: 'admin' },
    { name: 'Tim', role: 'regular' },
    { name: 'Erika', role: 'admin' },
    { name: 'Trond', role: 'regular' },
    { name: 'Sunny', role: 'regular' },
    { name: 'Winona', role: 'admin' },
    { name: 'Proffen', role: 'regular' },
    { name: 'Huldra', role: 'regular' },
    { name: 'Kari', role: 'regular' },
    { name: 'Selma', role: 'regular' },
    { name: 'Edvin', role: 'regular' }
];

test('returns object with unique lowercase first letters of users as keys, capitalized names of users with key as first letter in name as value ', () => {
    expect(fifth(users)).toStrictEqual({
        e: ['ERIKA', 'EGIL', 'EDVIN'],
        t: ['TROND', 'TOM', 'TIM'],
        s: ['SUNNY', 'SONJA', 'SELMA'],
        w: ['WINONA'],
        p: ['PROFFEN'],
        h: ['HULDRA'],
        k: ['KARI']
    });
});
