import React from "react";

function Item({ foodItem, bought, handleOnclick, handleDelete }) {
  return (
    <li className={`list-group-item ${bought && "active"}`} key={foodItem}>
      <button className="btn btn-danger buyBtn" onClick={(event) => handleDelete(event)}>
        Delete
      </button>
      {foodItem}
      <button className="btn btn-info buyBtn" onClick={(event) => handleOnclick(event)}>
        Buy
      </button>
    </li>
  );
}

export default Item;
