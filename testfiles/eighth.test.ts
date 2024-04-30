import { expect, test, describe } from "@jest/globals";
import { User } from "../interfaces/user.interface";
import { eighth } from "../katas/eighth";

const locales = ["nb-NO", "da-DK", "sv-SE"];

const users1: User[] = [
  { name: "Egil", role: "admin", id: 900 }, // 1
  { name: "Tom", role: "regular", id: 19 }, // 2
  { name: "Sonja", role: "admin", id: 201 }, // 3
  { name: "Tim", role: "regular", id: 199 }, // 2
  { name: "Erika", role: "admin", id: 3845 }, // 1
  { name: "Trond", role: "regular", id: 443 }, // 2
  { name: "Sunny", role: "regular", id: 112 }, // 3
  { name: "Winona", role: "admin", id: 901 }, // 4
  { name: "Proffen", role: "regular", id: 900345 }, // 5
  { name: "Huldra", role: "regular", id: 1 }, // 6
  { name: "Kari", role: "regular", id: 89 }, // 7
  { name: "Selma", role: "regular", id: 120 }, // 3
  { name: "Edvin", role: "superadmin", id: 9 }, // -1
];

const users2: User[] = [
  { name: "Emre", role: "admin", id: 900 }, // 1
  { name: "Tom", role: "regular", id: 19 }, // 2
  { name: "Terje", role: "admin", id: 201 }, // 2
  { name: "Tonje", role: "regular", id: 199 }, // 2
  { name: "Terry", role: "admin", id: 3845 }, // 2
  { name: "Trond", role: "regular", id: 443 }, // 2
  { name: "Timmy", role: "regular", id: 7161 }, // 2
  { name: "Winona", role: "admin", id: 9282 }, // 3
  { name: "Tommy", role: "regular", id: 9900 }, // 2
];

const users3: User[] = [
  { name: "Ørjan", role: "admin", id: 900 }, // 1
  { name: "Tom", role: "superadmin", id: 19 }, // 3
  { name: "Anders", role: "superadmin", id: 201 }, // 3
  { name: "Egil", role: "superadmin", id: 199 }, // 3
  { name: "Terje", role: "superadmin", id: 3845 }, // 3
  { name: "Winny", role: "superadmin", id: 443 }, // 3
  { name: "Åge", role: "regular", id: 7161 }, // 2
  { name: "Åshild", role: "admin", id: 9282 }, // 2
  { name: "Silje", role: "regular", id: 9900 }, // 0
];

const users4: User[] = [];

const users5: User[] = [
  { name: "Ørjan", role: "superadmin", id: 900 },
  { name: "Tom", role: "superadmin", id: 19 },
  { name: "Anders", role: "superadmin", id: 201 },
  { name: "Egil", role: "superadmin", id: 199 },
  { name: "Terje", role: "superadmin", id: 3845 },
  { name: "Winny", role: "superadmin", id: 443 },
  { name: "Åge", role: "superadmin", id: 7161 },
  { name: "Åshild", role: "superadmin", id: 9282 },
  { name: "Silje", role: "superadmin", id: 9900 },
];

describe("testing function with users 1", () => {
  test("returns array of arrays", () => {
    const a = eighth(users1);
    expect(a).toHaveLength(8);
  });

  test("alphabetical sorting takes locale into account ", () => {
    const a = eighth(users1).filter((us) => us[0].role !== "superadmin");
    const b = Array.from(a).sort((a, b) =>
      a[0].name
        .toLocaleLowerCase(locales)[0]
        .localeCompare(b[0].name.toLocaleLowerCase(locales)[0], locales)
    );
    expect(a).toEqual(b);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });

  test("returns array of arrays with all superadmins in the subarray at position -1", () => {
    const a = eighth(users1);
    expect(a.at(-1)?.every((us) => us.role === "superadmin"));
    const b = Array.from(a).reduce(
      (acc, arr) => (arr.some((us) => us.role === "superadmin") ? acc++ : acc),
      0
    );
    expect(b === 1);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });

  test("all arrays of users are sorted in order of descending id", () => {
    const a = eighth(users1);
    const b = a.map((c) => (c = c.sort((k, l) => l.id! - k.id!)));
    expect(a).toStrictEqual(b);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });
});

describe("testing function with users 2", () => {
  test("returns array of arrays", () => {
    const a = eighth(users2);
    expect(a).toHaveLength(4);
  });

  test("alphabetical sorting takes locale into account ", () => {
    const a = eighth(users2).filter(
      (us) => us.length && us[0].role !== "superadmin"
    );
    const b = Array.from(a).sort((a, b) =>
      a[0].name
        .toLocaleLowerCase(locales)[0]
        .localeCompare(b[0].name.toLocaleLowerCase(locales)[0], locales)
    );
    expect(a).toEqual(b);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });

  test("returns array of arrays with all superadmins in the subarray at position -1", () => {
    const a = eighth(users2);
    expect(a.at(-1)?.every((us) => us.role === "superadmin"));
    const b = a.reduce(
      (acc, arr) => (arr.some((us) => us.role === "superadmin") ? acc++ : acc),
      0
    );
    expect(b === 1);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });

  test("all arrays of users are sorted in order of descending id", () => {
    const a = eighth(users2);
    const b = a.map((c) => (c = c.sort((k, l) => l.id! - k.id!)));
    expect(a).toStrictEqual(b);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });

  test("last item in outer array is an empty array if no superadmins are in list", () => {
    const a = eighth(users2);
    expect(a.at(-1)).toStrictEqual([]);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });
});

describe("testing function with users 3", () => {
  test("returns array of arrays", () => {
    const a = eighth(users3);
    expect(a).toHaveLength(4);
  });

  test("alphabetical sorting takes locale into account ", () => {
    const a = eighth(users3).filter((us) => us[0].role !== "superadmin");
    const b = Array.from(a).sort((a, b) =>
      a[0].name
        .toLocaleLowerCase(locales)[0]
        .localeCompare(b[0].name.toLocaleLowerCase(locales)[0], locales)
    );
    expect(a).toStrictEqual(b);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });

  test("returns array of arrays with all superadmins in the subarray at position -1", () => {
    const a = eighth(users3);
    expect(a.at(-1)?.every((us) => us.role === "superadmin"));
    const b = a.reduce(
      (acc, arr) => (arr.some((us) => us.role === "superadmin") ? acc++ : acc),
      0
    );
    expect(b === 1);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });

  test("all arrays of users are sorted in order of descending id", () => {
    const a = eighth(users3);
    const b = a.map((c) => (c = c.sort((k, l) => l.id! - k.id!)));
    expect(a).toStrictEqual(b);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });
});

describe("testing function with users 4 ( empty list )", () => {
  test("returns array of arrays", () => {
    const a = eighth(users4);
    expect(a).toHaveLength(1);
  });

  test("alphabetical sorting takes locale into account ", () => {
    const a = eighth(users4).filter(
      (us) => us.length && us[0].role !== "superadmin"
    );
    const b = Array.from(a).sort((a, b) =>
      a[0].name
        .toLocaleLowerCase(locales)[0]
        .localeCompare(b[0].name.toLocaleLowerCase(locales)[0], locales)
    );
    expect(a).toEqual(b);
  });

  test("returns array of arrays with all superadmins in the subarray at position -1", () => {
    const a = eighth(users4);
    expect(a.at(-1)?.every((us) => us.role === "superadmin"));
    const b = a.reduce(
      (acc, arr) => (arr.some((us) => us.role === "superadmin") ? acc++ : acc),
      0
    );
    expect(b === 1);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });

  test("all arrays of users are sorted in order of descending id", () => {
    const a = eighth(users4);
    const b = a.map((c) => (c = c.sort((k, l) => l.id! - k.id!)));
    expect(a).toStrictEqual(b);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });
});

describe("testing function with users 5 ( all superadmins )", () => {
  test("returns array of arrays", () => {
    const a = eighth(users5);
    expect(a).toHaveLength(1);
  });

  test("returns array of arrays with all superadmins in the subarray at position -1", () => {
    const a = eighth(users5);
    expect(a.at(-1)?.every((us) => us.role === "superadmin"));
    const b = a.reduce(
      (acc, arr) => (arr.some((us) => us.role === "superadmin") ? acc++ : acc),
      0
    );
    expect(b === 1);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });

  test("all arrays of users are sorted in order of descending id", () => {
    const a = eighth(users5);
    const b = a.map((c) => (c = c.sort((k, l) => l.id! - k.id!)));
    expect(a).toStrictEqual(b);
    expect(a.length).toBeGreaterThanOrEqual(1);
  });
});
