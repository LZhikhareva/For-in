import { obj, orderByProps } from '../app';

test('check if key from value go first in sorted array', () => {
  const result = orderByProps(obj, ["name", "id"]);
  expect(result[0]).toEqual({ key: "name", value: "мечник" });
  expect(result[1]).toEqual({ key: "id", value: 15 });
});

test('check if key not from value are alphabetically', () => {
  const result = orderByProps(obj, ["name", "id"]);
  expect(result[2]).toEqual({ key: 'attack', value: 80 });
  expect(result[3]).toEqual({ key: 'defence', value: 40 });
  expect(result[4]).toEqual({ key: 'health', value: 10 });
  expect(result[5]).toEqual({ key: 'level', value: 2 });
});
