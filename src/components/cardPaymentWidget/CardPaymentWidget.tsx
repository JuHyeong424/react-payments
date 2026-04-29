import { useCardForm } from "../../hooks/useCardForm";
import CardImageSections from "../cardImageSections/CardImageSections";
import CardInfoSections from "../cardInfoSections/CardInfoSections";
import styled from "@emotion/styled";

export default function CardPaymentWidget() {
  const cardForm = useCardForm();

  return (
    <CardPaymentWidgetWrapper>
      <CardImageSections {...cardForm} />
      <CardInfoSections {...cardForm} />
    </CardPaymentWidgetWrapper>
  );
}

const CardPaymentWidgetWrapper = styled.div`
  width: 376px;
  height: 700px;
  background-color: white;
  border-radius: 10px;
`;
