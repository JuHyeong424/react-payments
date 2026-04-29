import CardInfoComponents from "./CardInfoComponents";
import { type CardFormType } from "../../types/types";

export default function CardInfoSections(cardForm: CardFormType) {
  return (
    <>
      <CardInfoComponents {...cardForm} />
    </>
  );
}
