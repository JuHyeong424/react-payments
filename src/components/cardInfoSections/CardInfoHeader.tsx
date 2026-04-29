interface CardInfoHeaderProps {
  title: string;
  description: string;
}

export default function CardInfoHeader({
  title,
  description,
}: CardInfoHeaderProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}
