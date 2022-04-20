import React from "react";
import Item from "../components/Item";

function ItemListContainer({ items, pushCartItems, cartItems }) {
  const handleClick = (e, itemId) => {
    console.log(itemId);
    console.log(cartItems);
    let cartItemId = cartItems.map((el) => {
      return el.itemId;
    });
    if (cartItemId.includes(itemId)) {
      pushCartItems(
        cartItems.map((el) => {
          if (el.itemId === itemId) {
            el.quantity++;
          }
          return el;
        })
      );
    } else {
      pushCartItems([...cartItems, { itemId: itemId, quantity: 1 }]);
    }
  };
  return (
    <div id="item-list-container">
      <div id="item-list-body">
        <div id="item-list-title">쓸모없는 선물 모음</div>
        {items.map((item, idx) => (
          <Item item={item} key={idx} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;
