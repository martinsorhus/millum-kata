import { expect, test } from "@jest/globals";
import { seventh } from "../katas/seventh";

const items = [
  "a2",
  "a90",
  "i98",
  "h7",
  "k99",
  "o8",
  "j21",
  "w3",
  "t4",
  "a76",
  "a1",
  "i65",
  "h43",
  "k37",
  "o767",
  "j12",
  "w1",
  "t89",
];

test("returns array in correct order", () => {
  expect(seventh(items)).toStrictEqual([
    "w1",
    "w3",
    "t4",
    "t89",
    "o8",
    "o767",
    "k37",
    "k99",
    "j12",
    "j21",
    "i65",
    "i98",
    "h7",
    "h43",
    "a1",
    "a2",
    "a76",
    "a90",
  ]);
});
