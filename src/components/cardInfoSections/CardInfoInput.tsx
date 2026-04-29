import type { ChangeEvent, Dispatch, SetStateAction } from "react";

interface CardInfoInputProps {
  inputLabel: string;
  inputConfig: { placeholder: string; maxLength: number }[];
  inputValue: string[];
  setInputValue: Dispatch<SetStateAction<string[]>>;
}

export default function CardInfoInput({
  inputLabel,
  inputConfig,
  inputValue,
  setInputValue,
}: CardInfoInputProps) {
  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    setInputValue((prev) => {
      const newArray = [...prev];
      newArray[index] = newValue;
      return newArray;
    });
  };

  return (
    <>
      <label>{inputLabel}</label>
      {inputConfig.map((config, index) => (
        <input
          key={index}
          {...config}
          value={inputValue[index]}
          onChange={(e) => handleChange(index, e)}
        />
      ))}
    </>
  );
}
