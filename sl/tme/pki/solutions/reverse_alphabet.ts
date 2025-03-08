/**
 *
 * Write a function that takes in array of strings containing one letter and one number
 * example ['a1', 'b89', 'b3', 'a2']
 * There will only be one letter, but the number can contain up to 4 digits
 * The function needs to sort the array in reverse alphabetical order, but if there are more than 1 items with the same letter,
 * these need to be sorted in ascending order
 *
 *
 *
 *
 */

export const seventh = (items: string[]) => {
    return items.sort((a, b) => {
        const letterA = a[0];
        const letterB = b[0];
        const numA = parseInt(a.slice(1));
        const numB = parseInt(b.slice(1));

        if (letterA === letterB) return numA - numB;
        else return letterB.localeCompare(letterA);
    });
};
