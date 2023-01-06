import { useState } from "react";
export default function Potion({ setScore, score, setLife }) {
  const [price, setPrice] = useState(100);
  const buy = () => {
    if (score >= Math.round(price)) {
      setScore(score - Math.round(price));
      setPrice(price * 1.2);
      setLife((oldLife) => Math.round(oldLife * 0.7));
    }
  };
  return (
    <>
      <button type="button" onClick={() => buy()}>
        Throw potion: {Math.round(price)} points
      </button>
    </>
  );
}
