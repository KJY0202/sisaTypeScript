const price: number = 3000;
const name: string = "아메리카노";
const isIce: boolean = true;

const coffee: {
  name: string;
  price: number;
} = {
  name: "라떼",
  price: 3500,
};

type student = {
  name: string;
  age: number;
  major: string;
  subject: string[];
};

const student1: student = {
  name: "김정엽",
  age: 25,
  major: "컴퓨터공학",
  subject: ["java", "TypeScript", "React"],
};
