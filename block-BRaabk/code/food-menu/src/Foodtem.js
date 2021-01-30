import React from "react";
function FoodItem(props) {
  const { foodItem } = props;
  return (
    <div className="food-div">
      <div className="food-Compo">
        <img alt="food" src={foodItem.img}></img>
        <div className="desc">
          <div>
            <h2>{foodItem.title}</h2>
            <p>{foodItem.price}</p>
          </div>
          <p>{foodItem.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
