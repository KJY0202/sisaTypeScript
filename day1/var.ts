const a: number = 1;
const b: string = "ddd";
const c: boolean = true;

const arr: string[] = ["a", "b"];
const obj: { name: string; price: number }[] = [{ name: "엄외", price: 1000 }];

const add = (x: number, y: number): number => {
  return x + y;
};

const concate = (x: string, y: string) => {
  return x + y;
};

const changeBool = (x: number, y: number): boolean => {
  return Boolean(x + y);
};
