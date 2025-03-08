import { expect, test } from '@jest/globals';
import { User } from '@interfaces';
import { mergeUsers } from '@katas';

const u1: User[] = [
    { name: 'Anders', role: 'regular', id: 1900 },
    { name: 'Vebjørn', role: 'regular', id: 2311 },
    { name: 'Askhild', role: 'regular', id: 34221 },
    { name: 'Pedro', role: 'regular', id: 89274 },
    { name: 'June', role: 'regular', id: 90909 },
    { name: 'Karl', role: 'regular', id: 98201 },
    { name: 'Åshild', role: 'regular', id: 38275 },
    { name: 'Talkum', role: 'regular', id: 29113 },
    { name: 'Kari', role: 'regular', id: 9087009 },
    { name: 'Synne', role: 'regular', id: 327593 }
];

const u2: User[] = [
    { name: 'Lisa', role: 'regular', id: 3109483 },
    { name: 'Jon', role: 'regular', id: 990 },
    { name: 'Ofelia', role: 'regular', id: 704563 },
    { name: 'Jens', role: 'regular', id: 965402 },
    { name: 'Erle', role: 'regular', id: 90112 },
    { name: 'Pernille', role: 'regular', id: 2328101 },
    { name: 'Jan', role: 'regular', id: 38271 },
    { name: 'Ali', role: 'regular', id: 11 },
    { name: 'Mohammed', role: 'regular', id: 870093201 },
    { name: 'Sigrid', role: 'regular', id: 90121110 }
];

const u3: User[] = [
    { name: 'Gerhard', role: 'regular', id: 56093 },
    { name: 'Egil', role: 'regular', id: 24903 },
    { name: 'Sonja', role: 'regular', id: 19384 }
];

test('Function returns merged array sorted correctly', () => {
    expect(mergeUsers(u1, u2)).toStrictEqual([
        { name: 'Anders', role: 'regular', id: 1900 },
        { name: 'Lisa', role: 'regular', id: 3109483 },
        { name: 'Vebjørn', role: 'regular', id: 2311 },
        { name: 'Jon', role: 'regular', id: 990 },
        { name: 'Askhild', role: 'regular', id: 34221 },
        { name: 'Ofelia', role: 'regular', id: 704563 },
        { name: 'Pedro', role: 'regular', id: 89274 },
        { name: 'Jens', role: 'regular', id: 965402 },
        { name: 'June', role: 'regular', id: 90909 },
        { name: 'Erle', role: 'regular', id: 90112 },
        { name: 'Karl', role: 'regular', id: 98201 },
        { name: 'Pernille', role: 'regular', id: 2328101 },
        { name: 'Åshild', role: 'regular', id: 38275 },
        { name: 'Jan', role: 'regular', id: 38271 },
        { name: 'Talkum', role: 'regular', id: 29113 },
        { name: 'Ali', role: 'regular', id: 11 },
        { name: 'Kari', role: 'regular', id: 9087009 },
        { name: 'Mohammed', role: 'regular', id: 870093201 },
        { name: 'Synne', role: 'regular', id: 327593 },
        { name: 'Sigrid', role: 'regular', id: 90121110 }
    ]);
});

test('Return correctly merged array if input a is longer than input b', () => {
    expect(mergeUsers([...u1, ...u3], u2)).toStrictEqual([
        { name: 'Anders', role: 'regular', id: 1900 },
        { name: 'Lisa', role: 'regular', id: 3109483 },
        { name: 'Vebjørn', role: 'regular', id: 2311 },
        { name: 'Jon', role: 'regular', id: 990 },
        { name: 'Askhild', role: 'regular', id: 34221 },
        { name: 'Ofelia', role: 'regular', id: 704563 },
        { name: 'Pedro', role: 'regular', id: 89274 },
        { name: 'Jens', role: 'regular', id: 965402 },
        { name: 'June', role: 'regular', id: 90909 },
        { name: 'Erle', role: 'regular', id: 90112 },
        { name: 'Karl', role: 'regular', id: 98201 },
        { name: 'Pernille', role: 'regular', id: 2328101 },
        { name: 'Åshild', role: 'regular', id: 38275 },
        { name: 'Jan', role: 'regular', id: 38271 },
        { name: 'Talkum', role: 'regular', id: 29113 },
        { name: 'Ali', role: 'regular', id: 11 },
        { name: 'Kari', role: 'regular', id: 9087009 },
        { name: 'Mohammed', role: 'regular', id: 870093201 },
        { name: 'Synne', role: 'regular', id: 327593 },
        { name: 'Sigrid', role: 'regular', id: 90121110 }
    ]);
});
test('Return correctly merged array if input b is longer than input a', () => {
    expect(mergeUsers(u1, [...u2, ...u3])).toStrictEqual([
        { name: 'Anders', role: 'regular', id: 1900 },
        { name: 'Lisa', role: 'regular', id: 3109483 },
        { name: 'Vebjørn', role: 'regular', id: 2311 },
        { name: 'Jon', role: 'regular', id: 990 },
        { name: 'Askhild', role: 'regular', id: 34221 },
        { name: 'Ofelia', role: 'regular', id: 704563 },
        { name: 'Pedro', role: 'regular', id: 89274 },
        { name: 'Jens', role: 'regular', id: 965402 },
        { name: 'June', role: 'regular', id: 90909 },
        { name: 'Erle', role: 'regular', id: 90112 },
        { name: 'Karl', role: 'regular', id: 98201 },
        { name: 'Pernille', role: 'regular', id: 2328101 },
        { name: 'Åshild', role: 'regular', id: 38275 },
        { name: 'Jan', role: 'regular', id: 38271 },
        { name: 'Talkum', role: 'regular', id: 29113 },
        { name: 'Ali', role: 'regular', id: 11 },
        { name: 'Kari', role: 'regular', id: 9087009 },
        { name: 'Mohammed', role: 'regular', id: 870093201 },
        { name: 'Synne', role: 'regular', id: 327593 },
        { name: 'Sigrid', role: 'regular', id: 90121110 }
    ]);
});
