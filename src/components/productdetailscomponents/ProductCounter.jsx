import { useState } from "react";
import "../../css/productdetailscss/productdetails.css";

const ProductCounter = () => {
  const [counter, setCounter] = useState(1);
  const maxStock = 10;

  const handleAdd = () => {
    if (counter < maxStock) {
      setCounter(counter + 1);
    }
  };

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <button type="button" className="button-minus" onClick={handleMinus}>
        <img
          src="/images/icon-minus.svg"
          alt="subtract one from product count"
        />
      </button>
      <span className="product-quantity">{counter}</span>
      <button type="button" className="button-add" onClick={handleAdd}>
        <img src="/images/icon-plus.svg" alt="add one to product count" />
      </button>
      {counter === maxStock && (
        <p className="count-error">We have only {maxStock} units in stock</p>
      )}
    </div>
  );
};

export default ProductCounter;
