import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { type CardFormType } from "../../types/types";

export default function CardImageSections(cardForm: CardFormType) {
  return (
    <CardImageSectionWrapper>
      <div></div>
      {cardForm.expireNumber.map((value, index) => (
        <p
          key={index}
          css={css`
            color: white;
          `}
        >
          {value}
        </p>
      ))}
      {cardForm.cardNumber.map((value, index) => (
        <p
          key={index}
          css={css`
            color: white;
          `}
        >
          {value}
        </p>
      ))}
    </CardImageSectionWrapper>
  );
}

const CardImageSectionWrapper = styled.section`
  background-color: black;
  width: 212px;
  height: 132px;
`;
