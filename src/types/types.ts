import type { Dispatch, SetStateAction } from "react";

export interface CardFormType {
  cardNumber: string[];
  setCardNumber: Dispatch<SetStateAction<string[]>>;
  expireNumber: string[];
  setExpireNumber: Dispatch<SetStateAction<string[]>>;
  cvcNumber: string[];
  setCvcNumber: Dispatch<SetStateAction<string[]>>;
};
