import { Stocktaking } from '../models';

const monthlyStocktakings = [
    new Stocktaking({
        year: 2021,
        id: '321-abc',
        period: 9
    }),
    new Stocktaking({
        year: 2021,
        id: '321-abc',
        period: 10
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 2
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 4
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 7
    }),
    new Stocktaking({
        year: 2023,
        id: '321-abc',
        period: 1
    })
];

const monthlyStocktakingsOutput: Stocktaking[] = [
    new Stocktaking({
        year: 2021,
        id: '321-abc',
        period: 9
    }),
    new Stocktaking({
        year: 2021,
        id: '321-abc',
        period: 10
    }),
    new Stocktaking({
        year: 2021,
        id: '321-abc',
        period: 11
    }),
    new Stocktaking({
        year: 2021,
        id: '321-abc',
        period: 12
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 1
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 2
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 3
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 4
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 5
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 6
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 7
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 8
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 9
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 10
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 11
    }),
    new Stocktaking({
        year: 2022,
        id: '321-abc',
        period: 12
    }),
    new Stocktaking({
        year: 2023,
        id: '321-abc',
        period: 1
    })
];

const weeklyStocktakings = [
    new Stocktaking({
        id: '66y-ui',
        period: 45,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 47,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 51,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 1,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 6,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 9,
        year: 2022
    })
];

const weeklyStocktakingsOutput = [
    new Stocktaking({
        id: '66y-ui',
        period: 45,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 46,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 47,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 48,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 49,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 50,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 51,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 52,
        year: 2021
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 1,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 2,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 3,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 4,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 5,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 6,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 7,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 8,
        year: 2022
    }),
    new Stocktaking({
        id: '66y-ui',
        period: 9,
        year: 2022
    })
];

const yearlyStocktakings: Stocktaking[] = [
    new Stocktaking({
        year: 2021,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2023,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2025,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2029,
        period: 1,
        id: '776-uyi'
    })
];

const yearlyStocktakingsOutput: Stocktaking[] = [
    new Stocktaking({
        year: 2021,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2022,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2023,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2024,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2025,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2026,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2027,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2028,
        period: 1,
        id: '776-uyi'
    }),
    new Stocktaking({
        year: 2029,
        period: 1,
        id: '776-uyi'
    })
];

const quarterlyStocktakings: Stocktaking[] = [
    new Stocktaking({
        id: '44-35t',
        period: 2,
        year: 2021
    }),
    new Stocktaking({
        id: '44-35t',
        period: 4,
        year: 2021
    }),
    new Stocktaking({
        id: '44-35t',
        period: 3,
        year: 2022
    }),
    new Stocktaking({
        id: '44-35t',
        period: 4,
        year: 2022
    }),
    new Stocktaking({
        id: '44-35t',
        period: 2,
        year: 2023
    }),
    new Stocktaking({
        id: '44-35t',
        period: 1,
        year: 2024
    })
];

const quarterlyStocktakingsOutput: Stocktaking[] = [
    new Stocktaking({
        id: '44-35t',
        period: 2,
        year: 2021
    }),
    new Stocktaking({
        id: '44-35t',
        period: 3,
        year: 2021
    }),
    new Stocktaking({
        id: '44-35t',
        period: 4,
        year: 2021
    }),
    new Stocktaking({
        id: '44-35t',
        period: 1,
        year: 2022
    }),
    new Stocktaking({
        id: '44-35t',
        period: 2,
        year: 2022
    }),
    new Stocktaking({
        id: '44-35t',
        period: 3,
        year: 2022
    }),
    new Stocktaking({
        id: '44-35t',
        period: 4,
        year: 2022
    }),
    new Stocktaking({
        id: '44-35t',
        period: 1,
        year: 2023
    }),
    new Stocktaking({
        id: '44-35t',
        period: 2,
        year: 2023
    }),
    new Stocktaking({
        id: '44-35t',
        period: 3,
        year: 2023
    }),
    new Stocktaking({
        id: '44-35t',
        period: 4,
        year: 2023
    }),
    new Stocktaking({
        id: '44-35t',
        period: 1,
        year: 2024
    })
];

export {
    monthlyStocktakings,
    monthlyStocktakingsOutput,
    yearlyStocktakings,
    yearlyStocktakingsOutput,
    quarterlyStocktakings,
    quarterlyStocktakingsOutput,
    weeklyStocktakings,
    weeklyStocktakingsOutput
};
