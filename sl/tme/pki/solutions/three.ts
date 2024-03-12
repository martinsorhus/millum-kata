import { User } from "../../../../interfaces/user.interface";

export const third = (users1: User[], users2: User[]) => {
  const array = users1.map((u, i) => {
    return users2[i] ? [u, users2[i]] : [];
  });
  return array.flat();
};
