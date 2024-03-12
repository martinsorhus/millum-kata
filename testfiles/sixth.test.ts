import { expect, test } from "@jest/globals";
import { User } from "../interfaces/user.interface";
import { sixth } from "../katas/sixth";

const users: User[] = [
  { name: "Egil", role: "admin" },
  { name: "Tom", role: "regular" },
  { name: "Sonja", role: "admin" },
  { name: "Tim", role: "regular" },
  { name: "Erika", role: "admin" },
  { name: "Trond", role: "regular" },
  { name: "Sunny", role: "regular" },
  { name: "Winona", role: "admin" },
  { name: "Proffen", role: "regular" },
  { name: "Huldra", role: "regular" },
  { name: "Kari", role: "regular" },
  { name: "Selma", role: "regular" },
  { name: "Edvin", role: "regular" },
];

test("function returns list of users with name values higher than 56", () => {
  expect(sixth(users)).toStrictEqual([
    { name: "Sunny", role: "regular" },
    { name: "Proffen", role: "regular" },
    { name: "Winona", role: "admin" },
    { name: "Trond", role: "regular" },
    { name: "Huldra", role: "regular" },
    { name: "Sonja", role: "admin" },
  ]);
});
