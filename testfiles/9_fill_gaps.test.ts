import { expect, test, describe } from "@jest/globals";
import { fill_the_gaps } from "../katas/9_fill_gaps";
import { PeriodType } from "../models";
import {
  monthlyStocktakings,
  monthlyStocktakingsOutput,
  weeklyStocktakings,
  weeklyStocktakingsOutput,
  yearlyStocktakings,
  yearlyStocktakingsOutput,
  quarterlyStocktakings,
  quarterlyStocktakingsOutput,
} from "../testdata/fillgaps";

describe("testing with montlhy period type", () => {
  test("expected length", () => {
    const a = fill_the_gaps(monthlyStocktakings, PeriodType.MONTHLY);
    expect(a).toHaveLength(17);
  });

  test("correct output", () => {
    const a = fill_the_gaps(monthlyStocktakings, PeriodType.MONTHLY);
    expect(a).toStrictEqual(monthlyStocktakingsOutput);
  });
});

describe("testing with weekly period type", () => {
  test("expected length", () => {
    const a = fill_the_gaps(weeklyStocktakings, PeriodType.WEEKLY);
    expect(a).toHaveLength(17);
  });

  test("correct output", () => {
    const a = fill_the_gaps(weeklyStocktakings, PeriodType.WEEKLY);
    expect(a).toStrictEqual(weeklyStocktakingsOutput);
  });
});

describe("testing with yearly period type", () => {
  test("expected length", () => {
    const a = fill_the_gaps(yearlyStocktakings, PeriodType.YEARLY);
    expect(a).toHaveLength(9);
  });

  test("correct output", () => {
    const a = fill_the_gaps(yearlyStocktakings, PeriodType.YEARLY);
    expect(a).toStrictEqual(yearlyStocktakingsOutput);
  });
});

describe("testing with quarterly period type", () => {
  test("expected length", () => {
    const a = fill_the_gaps(quarterlyStocktakings, PeriodType.QUARTERLY);
    expect(a).toHaveLength(12);
  });

  test("correct output", () => {
    const a = fill_the_gaps(quarterlyStocktakings, PeriodType.QUARTERLY);
    expect(a).toStrictEqual(quarterlyStocktakingsOutput);
  });
});
