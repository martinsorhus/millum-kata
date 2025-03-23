/**
 * Write a function that greets the name given in the input
 * The outer function will only take in the name as an input, but that does not mean that the greeting will be static
 */

export const greetings = (name: string): Function => {
    return () => name;
};
