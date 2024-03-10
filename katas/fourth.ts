import { User } from "../interfaces/user.interface";

interface ExtendedUser extends User {
  birthdayMonth: string;
}

/**
 * Write a function that takes in an array of ExtendedUsers and returns an object with months as keys
 * The value for each key should be an array of the usernames of the users with the given month as their birthday month
 *
 *
 *
 */

export const fourth = (users: ExtendedUser[]) => {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];

  console.log(users);
};
