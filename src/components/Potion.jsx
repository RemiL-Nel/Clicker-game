import { useState } from "react";
import "../style/shop.css";
import coinIcon from "../../assets/coin.png";

export default function Potion({
  displayNumber,
  score,
  setScore,
  potion,
  setPotion,
  length,
  setLength,
  potionStyle,
  setPotionStyle,
}) {
  const [price, setPrice] = useState(25000);

  const buyPotion = (id) => {
    if (potion === 0 && score >= price) {
      setScore(score - price);
      let countdown = setInterval(
        () => setLength((length) => length - 1),
        1000
      );
      setPotion(id);
      setPotionStyle("potionButtonBought");
      setTimeout(() => {
        setPotionStyle("potionButton");
        setPotion(0);
        clearInterval(countdown);
        setLength(length); // Because it's in timeout, length is the original value
      }, length * 1000);
    }
  };

  return (
    <div className="potionContainer">
      <div className="potion">
        <button
          className={potionStyle}
          type="button"
          onClick={() => buyPotion(1)}
        >
          Buy XP potion:
          <br />
          {displayNumber(price)} gold{" "}
          <img className="coinIcon" src={coinIcon} />
        </button>
        <p>XP * 2 for 15mins</p>
      </div>
      <div className="potion">
        <button
          className={potionStyle}
          type="button"
          onClick={() => buyPotion(2)}
        >
          Buy gold potion:
          <br />
          {displayNumber(price)} gold{" "}
          <img className="coinIcon" src={coinIcon} />
        </button>
        <p>More gold each mob killed for 15mins</p>
      </div>
      <div className="potion">
        <button
          className={potionStyle}
          type="button"
          onClick={() => buyPotion(3)}
        >
          Buy strength potion:
          <br />
          {displayNumber(price)} gold{" "}
          <img className="coinIcon" src={coinIcon} />
        </button>
        <p>Power * 2 for 15mins</p>
      </div>
    </div>
  );
}
