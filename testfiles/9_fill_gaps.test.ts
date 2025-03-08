import { expect, test, describe } from '@jest/globals';
import { fillGaps } from '@katas';
import { PeriodType } from '@models';
import {
    monthlyStocktakings,
    monthlyStocktakingsOutput,
    weeklyStocktakings,
    weeklyStocktakingsOutput,
    yearlyStocktakings,
    yearlyStocktakingsOutput,
    quarterlyStocktakings,
    quarterlyStocktakingsOutput
} from '@testdata/fillgaps';

describe('testing with monthly period type', () => {
    test('expected length', () => {
        const a = fillGaps([...monthlyStocktakings], PeriodType.MONTHLY);
        expect(a).toHaveLength(17);
    });

    test('correct output', () => {
        const a = fillGaps([...monthlyStocktakings], PeriodType.MONTHLY);
        expect(a).toStrictEqual(monthlyStocktakingsOutput);
    });
});

describe('testing with weekly period type', () => {
    test('expected length', () => {
        const a = fillGaps([...weeklyStocktakings], PeriodType.WEEKLY);
        expect(a).toHaveLength(17);
    });

    test('correct output', () => {
        const a = fillGaps([...weeklyStocktakings], PeriodType.WEEKLY);
        expect(a).toStrictEqual(weeklyStocktakingsOutput);
    });
});

describe('testing with yearly period type', () => {
    test('expected length', () => {
        const a = fillGaps([...yearlyStocktakings], PeriodType.YEARLY);
        expect(a).toHaveLength(9);
    });

    test('correct output', () => {
        const a = fillGaps([...yearlyStocktakings], PeriodType.YEARLY);
        expect(a).toStrictEqual(yearlyStocktakingsOutput);
    });
});

describe('testing with quarterly period type', () => {
    test('expected length', () => {
        const a = fillGaps([...quarterlyStocktakings], PeriodType.QUARTERLY);
        expect(a).toHaveLength(12);
    });

    test('correct output', () => {
        const a = fillGaps([...quarterlyStocktakings], PeriodType.QUARTERLY);
        expect(a).toStrictEqual(quarterlyStocktakingsOutput);
    });
});
