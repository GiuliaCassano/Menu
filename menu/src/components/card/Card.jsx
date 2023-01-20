import { useState } from "react";
import "./Card.css";
import React, { useRef } from "react";

const Card = ({ pizzaName, pizzaIngredient, price }) => {
  //Le () contengono le props
  const [addBasket, setAddBasket] = useState(0); //Perchè la UI di react non lo fa da sola

  function addHandler(e) {
    setAddBasket(++e.target.value); //mettendo ++ prima fa prima la somma....Il valore dell'elemento dove si trova l'evento onClick riferito ad addBasket
    console.log(e);
  }

  return (
    <div className="Card">
      <div className="name"> Pizza: {pizzaName}</div>
      <div className="ingredient">Ingredients: {pizzaIngredient}</div>
      <div className="price">Price: {price}</div>
      <div className="buttonZone">
        <button
          className="button"
          onClick={(e) => {
            {
              /*//Arrow function, funzione anonima*/
            }
            addHandler(e);
          }}
        >
          Add your pizza to basket!
        </button>
        <div>{addBasket}</div>{" "}
        {/*Essendo tra {} significa che è una variabile */}
      </div>
    </div>
  );
};
export { Card };
