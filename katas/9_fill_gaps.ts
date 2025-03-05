/**
 * Fill the gaps
 *
 * Implement a function that fills the gaps in an array of stocktaking objects
 * By gaps, we mean the periods that are missing in between the items in the array
 * Note that you should not add anything before the first item or after the last item in the existing array
 * 
 *
 * A stocktaking item is like this
 *  period: number;
    year: number;
    id: string;

    The function takes in a periodType as an input, this decides how high the period value in the stocktaking can be
    Naturally, if a stocktaking is of type WEEKLY, the highest period can be 52
    Same for YEARLY: 1, MONTHLY: 12 and QUARTERLY: 4

    Remember to set the year of the items you place in the arrays as 1 higher than the previous, IF the previous period was max for its periodtype

    correct output for a given input can be seen in the fillgaps.ts file in the testdata folder
 *
 */

import { Stocktaking, PeriodType } from "../models";

export const fill_the_gaps = (
  stocktakings: Stocktaking[],
  periodType: PeriodType
): Stocktaking[] => {
  return stocktakings;
};
