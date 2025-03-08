import { expect, test, describe } from '@jest/globals';
import { User } from '@interfaces';
import { letterTracker } from '@types';
import { letterCount } from '@katas';

const users1: User[] = [
    { name: 'Egil', role: 'admin', id: 900 }, // 1
    { name: 'Tom', role: 'regular', id: 19 }, // 2
    { name: 'Sonja', role: 'admin', id: 201 }, // 3
    { name: 'Tim', role: 'regular', id: 199 }, // 2
    { name: 'Erika', role: 'admin', id: 3845 }, // 1
    { name: 'Trond', role: 'regular', id: 443 }, // 2
    { name: 'Sunny', role: 'regular', id: 112 }, // 3
    { name: 'Winona', role: 'admin', id: 901 }, // 4
    { name: 'Proffen', role: 'regular', id: 900345 }, // 5
    { name: 'Huldra', role: 'regular', id: 1 }, // 6
    { name: 'Kari', role: 'regular', id: 89 }, // 7
    { name: 'Selma', role: 'regular', id: 120 }, // 3
    { name: 'Edvin', role: 'superadmin', id: 9 } // -1
];
// const b = {
//   a: 6,
//   d: 3,
//   e: 5,
//   i: 6,
//   l: 3,
//   m: 3,
//   n: 8,
//   o: 5,
//   p:
// }

const u1: letterTracker = {
    letters: {
        a: 'aaaaaa',
        d: 3,
        e: 'eeeee',
        i: 'iiiiii',
        l: 3,
        m: 3,
        n: 8,
        o: 'ooooo',
        r: 5,
        s: 3,
        t: 3
    },
    count: 50,
    most_frequent: 'n'
};

const users2: User[] = [
    { name: 'Emre', role: 'admin', id: 900 }, // 1
    { name: 'Tom', role: 'regular', id: 19 }, // 2
    { name: 'Terje', role: 'admin', id: 201 }, // 2
    { name: 'Tonje', role: 'regular', id: 199 }, // 2
    { name: 'Terry', role: 'admin', id: 3845 }, // 2
    { name: 'Trond', role: 'regular', id: 443 }, // 2
    { name: 'Timmy', role: 'regular', id: 7161 }, // 2
    { name: 'Winona', role: 'admin', id: 9282 }, // 3
    { name: 'Tommy', role: 'regular', id: 9900 } // 2
];

const users3: User[] = [
    { name: 'Ørjan', role: 'admin', id: 900 }, // 1
    { name: 'Tom', role: 'superadmin', id: 19 }, // 3
    { name: 'Anders', role: 'superadmin', id: 201 }, // 3
    { name: 'Egil', role: 'superadmin', id: 199 }, // 3
    { name: 'Terje', role: 'superadmin', id: 3845 }, // 3
    { name: 'Winny', role: 'superadmin', id: 443 }, // 3
    { name: 'Åge', role: 'regular', id: 7161 }, // 2
    { name: 'Åshild', role: 'admin', id: 9282 }, // 2
    { name: 'Silje', role: 'regular', id: 9900 } // 0
];

const users4: User[] = [];

const users5: User[] = [
    { name: 'Ørjan', role: 'superadmin', id: 900 },
    { name: 'Tom', role: 'superadmin', id: 19 },
    { name: 'Anders', role: 'superadmin', id: 201 },
    { name: 'Egil', role: 'superadmin', id: 199 },
    { name: 'Terje', role: 'superadmin', id: 3845 },
    { name: 'Winny', role: 'superadmin', id: 443 },
    { name: 'Åge', role: 'superadmin', id: 7161 },
    { name: 'Åshild', role: 'superadmin', id: 9282 },
    { name: 'Silje', role: 'superadmin', id: 9900 }
];

describe('Testing with users1', () => {
    test.only('', () => {
        const a = letterCount(users1);
        expect(a).toStrictEqual(u1);
    });
});
describe('Testing with users2', () => {
    test('', () => {
        expect(true);
    });
});
describe('Testing with users3', () => {
    test('', () => {
        expect(true);
    });
});
describe('Testing with users4', () => {
    test('', () => {
        expect(true);
    });
});
describe('Testing with users5', () => {
    test('', () => {
        expect(true);
    });
});
