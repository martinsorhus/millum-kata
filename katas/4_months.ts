import { ExtendedUser } from '@interfaces';

/**
 * Write a function that takes in an array of ExtendedUsers and returns an object with months as keys
 * The value for each key should be an array of the names of the users with the given month as their birthday month
 * If the user has no birthday month, or if the users birthday month is not in the months array, the users name should be pushed to the value of the unsupported key
 * value for every key in obj should be sorted alphabetically
 */

const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
];

export const birthdayMonths = (users: ExtendedUser[]) => {
    let obj = {
        unsupported: []
    };
    return obj;
};
