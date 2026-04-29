import { useState } from "react";

export function useCardForm() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expireNumber, setExpireNumber] = useState(["", ""]);
  const [cvcNumber, setCvcNumber] = useState([""]);

  return {
    cardNumber, setCardNumber,
    expireNumber, setExpireNumber,
    cvcNumber, setCvcNumber
  }
}
