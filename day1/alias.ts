type Coffee = {
  name: string;
  price: number;
};

type Shot = {
  hasShot: boolean;
};

type Milk = {
  hasMilk: boolean;
};

type Ice = {
  isIce: boolean;
};

type Americano = Coffee & Shot & Ice;
type Latte = Coffee & Shot & Milk & Ice;
type Ashotchu = Coffee & Ice;
