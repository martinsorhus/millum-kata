import { expect, test } from '@jest/globals';
import { fourth } from '../katas/4_months';
import { ExtendedUser } from '../interfaces/extended-user.interface';

const users: ExtendedUser[] = [
    { name: 'Egil', role: 'admin', birthdayMonth: 'december' },
    { name: 'Tom', role: 'regular', birthdayMonth: 'june' },
    { name: 'Sonja', role: 'admin', birthdayMonth: 'january' },
    { name: 'Tim', role: 'regular', birthdayMonth: 'january' },
    { name: 'Erika', role: 'admin', birthdayMonth: 'december' },
    { name: 'Trond', role: 'regular', birthdayMonth: 'june' },
    { name: 'Sunny', role: 'regular', birthdayMonth: 'Junte' },
    { name: 'Winona', role: 'admin', birthdayMonth: 'december' },
    { name: 'Proffen', role: 'regular', birthdayMonth: 'june' },
    { name: 'Huldra', role: 'regular', birthdayMonth: 'july' },
    { name: 'Kari', role: 'regular', birthdayMonth: 'november' },
    { name: 'Selma', role: 'regular', birthdayMonth: 'november' },
    { name: 'Edvin', role: 'regular', birthdayMonth: '' }
];

test('returns object with months as keys, users with key as birthdaymonth as value ', () => {
    expect(fourth(users)).toStrictEqual({
        january: ['Sonja', 'Tim'],
        june: ['Proffen', 'Tom', 'Trond'],
        july: ['Huldra'],
        november: ['Kari', 'Selma'],
        december: ['Egil', 'Erika', 'Winona'],
        unsupported: ['Edvin', 'Sunny']
    });
});
