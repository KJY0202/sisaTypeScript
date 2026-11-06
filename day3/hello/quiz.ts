type TBurger = "빅맥" | "상하이" | "1955";
type TSide = "감자튀김" | "코울슬로";
type TDrink = "콜라" | "사이다" | "제로콜라";

type TMorning = "에그맥머핀" | "소시지에그맥머핀" | "베이컨토마토머핀";
type TMorningSide = "해쉬브라운";
type TMorningDrink = "아메리카노" | "카페라떼" | "오렌지쥬스";

/* 1.점심메뉴 돌려주는 오브젝트 함수 정의
2. 아침메뉴 돌려주는 오브젝트 함수 정의
3. 모든메뉴 돌려주는 오브젝트 함수 정의 */

type TLunch = {
  burger: TBurger;
  side: TSide;
  drink: TDrink;
};

type TBreakfast = {
  morning: TMorning;
  side: TMorningSide;
  drink: TMorningDrink;
};

type TAllMenu = {
  lunch: TLunch;
  breakfast: TBreakfast;
};

const getLunch = (): TLunch => {
  return {
    burger: "빅맥",
    side: "감자튀김",
    drink: "제로콜라",
  };
};
const getBreakfast = (): TBreakfast => {
  return {
    morning: "에그맥머핀",
    side: "해쉬브라운",
    drink: "아메리카노",
  };
};
const getAllMenu = (): TAllMenu => {
  return {
    lunch: getLunch(),
    breakfast: getBreakfast(),
  };
};
