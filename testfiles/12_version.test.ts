import { expect, test, describe } from '@jest/globals';
import { checkVersion } from '@katas';
import { UpdateResponse } from '@types';
import {
    one_one_one__mandatory,
    one_one_one__optional,
    one_two_zero__mandatory,
    one_two_zero__optional,
    one_nine_zero__mandatory,
    one_nine_zero__optional,
    two_zero_zero__mandatory,
    two_zero_zero__optional,
    three_one_one__mandatory,
    three_one_one_not__mandatory,
    four_one_threeHundredTwelve__mandatory,
    four_one_threeHundredTwelve_not__mandatory
} from '@testdata';

const p: UpdateResponse[] = ['Mandatory', 'Available', 'Unavailable'];

describe('testing for published version 1.1.1', () => {
    describe('mandatory upgrades', () => {
        test('1.0.0', () => {
            const a = checkVersion('1.0.0', { ...one_one_one__mandatory });
            expect(a).toReturnWith('Mandatory');
        });

        test('1.1.0', () => {
            const a = checkVersion('1.1.0', { ...one_one_one__mandatory });
            expect(a).toReturnWith('Mandatory');
        });
    });

    describe('optional upgrades', () => {
        test('1.0.0', () => {
            const a = checkVersion('1.0.0', { ...one_one_one__optional });
            expect(a).toReturnWith('Available');
        });

        test('1.1.0', () => {
            const a = checkVersion('1.1.0', { ...one_one_one__optional });
            expect(a).toReturnWith('Available');
        });
    });

    describe('unavailable upgrades', () => {
        test('2.0.0 mandatory', () => {
            const a = checkVersion('2.0.0', { ...one_one_one__mandatory });
            expect(a).toReturnWith('Unavailable');
        });

        test('2.0.0 optional', () => {
            const a = checkVersion('2.0.0', { ...one_one_one__optional });
            expect(a).toReturnWith('Unavailable');
        });

        test('1.5.0', () => {
            const a = checkVersion('1.5.0', { ...one_one_one__optional });
            expect(a).toReturnWith('Unavailable');
        });

        test('1.1.2', () => {
            const a = checkVersion('1.1.2', { ...one_one_one__optional });
            expect(a).toReturnWith('Unavailable');
        });
    });
});

describe('testing for published version 1.2.0', () => {
    describe('mandatory upgrades', () => {
        test('1.0.39', () => {
            const a = checkVersion('1.0.39', { ...one_two_zero__mandatory });
            expect(a).toReturnWith('Mandatory');
        });

        test('1.1.43', () => {
            const a = checkVersion('1.1.43', { ...one_two_zero__mandatory });
            expect(a).toReturnWith('Mandatory');
        });
    });

    describe('optional upgrades', () => {
        test('1.0.39', () => {
            const a = checkVersion('1.0.39', { ...one_two_zero__optional });
            expect(a).toReturnWith('Available');
        });

        test('1.1.39', () => {
            const a = checkVersion('1.1.39', { ...one_two_zero__optional });
            expect(a).toReturnWith('Available');
        });
    });

    describe('unavailable upgrades', () => {
        test('2.0.1 mandatory', () => {
            const a = checkVersion('2.0.1', { ...one_two_zero__mandatory });
            expect(a).toReturnWith('Unavailable');
        });

        test('2.0.1 optional', () => {
            const a = checkVersion('2.0.1', { ...one_two_zero__optional });
            expect(a).toReturnWith('Unavailable');
        });

        test('1.5.0', () => {
            const a = checkVersion('1.5.0', { ...one_two_zero__optional });
            expect(a).toReturnWith('Unavailable');
        });

        test('1.2.1', () => {
            const a = checkVersion('1.1.2', { ...one_two_zero__optional });
            expect(a).toReturnWith('Unavailable');
        });
    });
});

describe('testing for published version 1.9.0', () => {
    describe('mandatory upgrades', () => {
        test('1.0.39', () => {
            const a = checkVersion('1.0.39', { ...one_nine_zero__mandatory });
            expect(a).toReturnWith('Mandatory');
        });

        test('1.8.43', () => {
            const a = checkVersion('1.1.43', { ...one_nine_zero__mandatory });
            expect(a).toReturnWith('Mandatory');
        });
    });

    describe('optional upgrades', () => {
        test('1.8.39', () => {
            const a = checkVersion('1.8.39', { ...one_nine_zero__optional });
            expect(a).toReturnWith('Available');
        });

        test('1.2.39', () => {
            const a = checkVersion('1.2.39', { ...one_nine_zero__optional });
            expect(a).toReturnWith('Available');
        });
    });

    describe('unavailable upgrades', () => {
        test('2.0.1 mandatory', () => {
            const a = checkVersion('2.0.1', { ...one_nine_zero__mandatory });
            expect(a).toReturnWith('Unavailable');
        });

        test('2.0.1 optional', () => {
            const a = checkVersion('2.0.1', { ...one_nine_zero__optional });
            expect(a).toReturnWith('Unavailable');
        });

        test('1.9.0', () => {
            const a = checkVersion('1.9.0', { ...one_nine_zero__optional });
            expect(a).toReturnWith('Unavailable');
        });

        test('1.9.29', () => {
            const a = checkVersion('1.9.29', { ...one_nine_zero__optional });
            expect(a).toReturnWith('Unavailable');
        });
    });
});

describe('testing for published version 2.0.0', () => {
    describe('mandatory upgrades', () => {
        test('1.9.39', () => {
            const a = checkVersion('1.9.39', { ...two_zero_zero__mandatory });
            expect(a).toReturnWith('Mandatory');
        });

        test('1.0.1', () => {
            const a = checkVersion('1.0.1', { ...two_zero_zero__mandatory });
            expect(a).toReturnWith('Mandatory');
        });
    });

    describe('optional upgrades', () => {
        test('1.8.39', () => {
            const a = checkVersion('1.8.39', { ...two_zero_zero__optional });
            expect(a).toReturnWith('Available');
        });

        test('1.2.39', () => {
            const a = checkVersion('1.2.39', { ...two_zero_zero__optional });
            expect(a).toReturnWith('Available');
        });
    });

    describe('unavailable upgrades', () => {
        test('2.0.1 mandatory', () => {
            const a = checkVersion('2.0.1', { ...two_zero_zero__mandatory });
            expect(a).toReturnWith('Unavailable');
        });

        test('2.0.1 optional', () => {
            const a = checkVersion('2.0.1', { ...two_zero_zero__optional });
            expect(a).toReturnWith('Unavailable');
        });

        test('1.9.0 optional', () => {
            const a = checkVersion('1.9.0', { ...two_zero_zero__optional });
            expect(a).toReturnWith('Unavailable');
        });

        test('1.9.29 optional', () => {
            const a = checkVersion('1.9.29', { ...two_zero_zero__optional });
            expect(a).toReturnWith('Unavailable');
        });
    });
});
