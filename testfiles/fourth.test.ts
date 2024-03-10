import { expect, test } from "@jest/globals";
import { fourth } from "../katas/fourth";
import { ExtendedUser } from "../interfaces/extended-user.interface";

const users: ExtendedUser[] = [
  { name: "Egil", role: "admin", birthdayMonth: "december" },
  { name: "Tom", role: "regular", birthdayMonth: "june" },
  { name: "Sonja", role: "admin", birthdayMonth: "january" },
  { name: "Tim", role: "regular", birthdayMonth: "january" },
  { name: "Erika", role: "admin", birthdayMonth: "december" },
  { name: "Trond", role: "regular", birthdayMonth: "june" },
  { name: "Winona", role: "admin", birthdayMonth: "december" },
  { name: "Proffen", role: "regular", birthdayMonth: "june" },
  { name: "Huldra", role: "regular", birthdayMonth: "july" },
  { name: "Kari", role: "regular", birthdayMonth: "november" },
  { name: "Selma", role: "regular", birthdayMonth: "november" },
];

test("", () => {
  expect(fourth(users)).toStrictEqual({
    january: ["Sonja", "Tim"],
    june: ["Proffen", "Tom", "Trond"],
    july: ["Huldra"],
    november: ["Kari", "Selma"],
    december: ["Egil", "Erika", "Winona"],
  });
});
