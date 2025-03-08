/**
 *
 * Implement a function that takes in an array of users
 * The function should return an object where the keys are as following:
 * - letters
 * - count
 * - most frequent
 *
 * The keys should have these values:
 * - letters:
 *      - an object containing all letters with count higher than 2 in the names as keys, in alphabetical order
 *          - if letter is vowel, the value for the key should be letter * letter count ( example: 'aaaaaaa' )
 *          - if letter is consonant, the value shoould be letter count ( example: 7 )
 * - count:
 *      - a count of all the letters, BEFORE deleting letters that are too low in count
 * - most frequent:
 *      - the letter key with the highest count
 *
 *
 *  example input
 *  [ { name: 'John', id: 5, role: 'regular' },
 *  { name: 'Simone', id: 41, role: 'superadmin' },
 *  { name: 'Sonny', id: 45, role: 'admin' },
 *  { name: 'Sam', id: 11, role: 'regular' },
 *  { name: 'Dan', id: 101, role: 'regular' },
 *  { name: 'Robert', id: 10023, role: 'superadmin'} ]
 *
 *  example output
 *  {
 *      letters: {
 *          n: 5,
 *          o: 'oooo',
 *          s: 3,
 *      },
 *      count: 27,
 *      most_frequent: 'n'
 *  }
 *
 *  NB:
 *      Names will only contain letters from the norwegian alphabet
 *      If more than one key shared the first place for highest letter count, most frequent should be an array of string containing the highest letter counts
 *      Letters with < 3 appearances should not be displayed in the letters object, though they should be a part of the count key
 *      If letters is an empty object, the most_frequent key should have value 'invalid'
 *      IF count = 0, it should have value 'Rohirrim'
 *
 */

import { User } from '@interfaces';
import { letterTracker } from '@types';

export const letterCount = (users: User[]): letterTracker => {
    const u = new Map();
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'æ', 'ø', 'å'];
    let count = 0;
    let most_frequent;
    users.forEach((uk) =>
        uk.name
            .split('')
            .map((ui) => ui.toLocaleLowerCase())
            .forEach((ul) =>
                vowels.includes(ul)
                    ? u.has(ul)
                        ? u.set(ul, u.get(ul) + ul)
                        : u.set(ul, ul)
                    : u.has(ul)
                      ? u.set(ul, (u.get(ul) as number) + 1)
                      : u.set(ul, 1)
            )
    );
    u.forEach((d, k) => {
        // if (typeof d === "number" && k < 3) u.delete(k);
        if (typeof d === 'number') {
            if (d < 3) u.delete(k);
            else count += d;

            if (most_frequent) {
                console.log(u.get(most_frequent));
            } else most_frequent = k;
        }
        // if (typeof d === "string" && d.length <= 2) u.delete(k)
        if (typeof d === 'string') {
            if (d.length < 3) u.delete(k);
            else count += d.length;
        }
    });

    //   u.entries(() => typeof value === Number && value < 3)
    //   u.has(ul) ? u.set(ul, ( vowels.includes(ul) ? u.get(ul) : u.set(ul, u.get(ul) +1) )) : u.set(ul, ( vowels.includes())))

    //   users.forEach((uk) => uk.name.split('').forEach((ul) => u.has(ul) ? u.set(ul, ( vowels.includes(ul) ? u.get(ul) : u.set(ul, u.get(ul) +1) )) : u.set(ul, ( vowels.includes())))
    // console.log(Object.fromEntries(u));
    console.log({
        letters: Object.fromEntries(u),
        count,
        most_frequent: ''
    });
    return {
        letters: Object.fromEntries(u),
        count,
        most_frequent: ''
    };
};
