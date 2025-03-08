/**
 * * Implement a function that fills the gaps in an array of stocktaking objects
 * By gaps, we mean the periods that are missing in between the items in the array
 * Note that you should not add anything before the first item or after the last item in the existing array
 * 
 *
 * A stocktaking item has a period(number), a year(number) and an id(string)

    The function also takes in a periodType as an input, this decides how high the period value in the stocktaking can be
    Naturally, if a stocktaking is of type WEEKLY, the highest period can be 52
    Same for YEARLY: 1, MONTHLY: 12 and QUARTERLY: 4

    Remember to set the year of the items you place in the arrays as 1 higher than the previous, IF the previous period was max for its periodtype

    correct output for a given input can be seen in the example below or in the fillgaps.ts file in the testdata folder
 *

    EXAMPLE INPUT
    [
      Stocktaking({ id: '234-aef', period: 11, year: 2022 }), 
      Stocktaking({ id: '234-aef', period: 2, year: 2023 })
    ], PeriodType.MONTHLY

    Here we see that the period for december and january are missing, since those periods are not in the array - and we know that the period type is MONTHLY

    Correct output from your function would be
    [
      Stocktaking({ id: '234-aef', period: 11, year: 2022 }), 
      Stocktaking({ id: '234-aef', period: 12, year: 2022 }), 
      Stocktaking({ id: '234-aef', period: 1, year: 2023 }), 
      Stocktaking({ id: '234-aef', period: 2, year: 2023 })
    ]
 */

import { Stocktaking, PeriodType } from '../models';

export const fill_the_gaps = (
    stocktakings: Stocktaking[],
    periodType: PeriodType
): Stocktaking[] => {
    return stocktakings;
};
