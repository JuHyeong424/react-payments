import CardInfoHeader from "./CardInfoHeader";
import CardInfoInput from "./CardInfoInput";
import { type CardFormType } from "../../types/types";

export default function CardInfoComponents(cardForm: CardFormType) {
  const inputCardNumberConfig = [
    { placeholder: "1234", maxLength: 4 },
    { placeholder: "1234", maxLength: 4 },
    { placeholder: "1234", maxLength: 4 },
    { placeholder: "1234", maxLength: 4 },
  ];

  const inputCardExpireNumberConfig = [
    { placeholder: "MM", maxLength: 2 },
    { placeholder: "YY", maxLength: 2 },
  ];

  const inputCvcNumberConfig = [{ placeholder: "123", maxLength: 3 }];

  return (
    <>
      <section>
        <CardInfoHeader
          title="결제할 카드 번호를 입력해 주세요"
          description="본인 명의의 카드만 결제 가능합니다."
        />
        <CardInfoInput
          inputLabel="카드 번호"
          inputConfig={inputCardNumberConfig}
          inputValue={cardForm.cardNumber}
          setInputValue={cardForm.setCardNumber}
        />
      </section>

      <section>
        <CardInfoHeader
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
        />
        <CardInfoInput
          inputLabel="유효기간"
          inputConfig={inputCardExpireNumberConfig}
          inputValue={cardForm.expireNumber}
          setInputValue={cardForm.setExpireNumber}
        />
      </section>

      <section>
        <CardInfoHeader title="CVC 번호를 입력해 주세요" description="" />
        <CardInfoInput
          inputLabel="CVC"
          inputConfig={inputCvcNumberConfig}
          inputValue={cardForm.cvcNumber}
          setInputValue={cardForm.setCvcNumber}
        />
      </section>
    </>
  );
}
