import { Stocktaking, PeriodType } from '../../../../models';

export const fill_the_gaps = (
    stocktakings: Stocktaking[],
    periodType: PeriodType
): Stocktaking[] => {
    let MAX_PERIOD = 0;
    switch (periodType) {
        case PeriodType.WEEKLY:
            MAX_PERIOD = 52;
            break;
        case PeriodType.MONTHLY:
            MAX_PERIOD = 12;
            break;
        case PeriodType.YEARLY:
            MAX_PERIOD = 1;
            break;
        case PeriodType.QUARTERLY:
            MAX_PERIOD = 4;
            break;
    }

    const fill = (arr: Stocktaking[], idx: number = 0) => {
        if (idx >= arr.length - 1) {
            return arr;
        }
        if (
            (arr[idx].period === MAX_PERIOD &&
                (arr[idx + 1].period !== 1 ||
                    (periodType === PeriodType.YEARLY &&
                        arr[idx + 1].year !== arr[idx].year + 1))) ||
            (arr[idx].period !== MAX_PERIOD && arr[idx + 1].period !== arr[idx].period + 1)
        ) {
            arr.splice(
                idx + 1,
                0,
                new Stocktaking({
                    id: arr[idx].id,
                    period: arr[idx].period === MAX_PERIOD ? 1 : arr[idx].period + 1,
                    year: arr[idx].period === MAX_PERIOD ? arr[idx].year + 1 : arr[idx].year
                })
            );
            return fill(arr, idx + 1);
        }
        return fill(arr, idx + 1);
    };

    return fill(stocktakings);
};
