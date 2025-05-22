import STAR from "../../assets/star.svg";
export default function Ratings({ value }) {
  const stars = Array(value).fill(STAR);
  return (
    <>
      {stars.map((star, idx) => (
        <img key={idx} src={star} width="14" height="14" alt="Star" />
      ))}
    </>
  );
}
