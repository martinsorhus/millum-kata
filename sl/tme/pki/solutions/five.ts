/**
 * Implement a function that takes in an array of users
 * The function should create an object ( obj ) with one key for each unique first letter in the user names
 * the value for each key should be an array of the name of the users that starts with the letter of the key
 * all values in array should be sorted in reverse alphabetical order
 * All keys should be lowercase, all values should be uppercase
 *
 */

import { User } from "../../../../interfaces/user.interface";

export const fifth = (users: User[]) => {
  let obj = {};
  users.forEach((u) => {
    if (Object.keys(obj).includes(u.name[0].toLowerCase())) {
      obj[u.name[0].toLowerCase()] = [
        ...obj[u.name[0].toLowerCase()],
        u.name.toUpperCase(),
      ].sort((a, b) => b.localeCompare(a));
    } else {
      obj[u.name[0].toLowerCase()] = [u.name.toUpperCase()];
    }
  });
  return obj;
};
