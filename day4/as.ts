// 타입 단언은 타입 검사에만 영향을 주고, 런타임 값은 바꾸지 않습니다.
const unknownValue: unknown = "TypeScript";
const textValue = unknownValue as string;

console.log(textValue.toUpperCase());
