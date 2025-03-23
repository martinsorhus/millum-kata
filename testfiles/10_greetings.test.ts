import { expect, test, describe } from '@jest/globals';
import { greetings } from '@katas';

describe('greetings', () => {
    test('testing with James and Hello', () => {
        const a = greetings('James');
        const b = a('Hello');
        expect(b).toBe('Hello, James');
    });

    test('testing with Sam, good morning and good evening', () => {
        const a = greetings('Sam');
        const b = a('Good morning');
        expect(b).toBe('Good morning, Sam');
        const c = a('Good evening');
        expect(c).toBe('Good evening, Sam');
    });
});
