import { useContext, useRef, useState } from "react";
import { todoContext } from "../store/todoStore";

const AppTodo = () => {
  const contextData = useContext(todoContext);
  const itemRef = useRef("");
  const dateRef = useRef("");

  const handleAddButtonClicked = () => {
    const updatedItem = itemRef.current.value;
    const updatedDate = dateRef.current.value;
    if (updatedItem === '') {
      window.alert("cannot be empty");
      return;
    }
    contextData.onSave(updatedItem, updatedDate);
    itemRef.current.value = "";
    dateRef.current.value = "";
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            ref={itemRef}
            placeholder="Enter Todo here"
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dateRef}/>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppTodo;
