import React, { useContext } from "react";
import Todo from "./Todo";
import { todoContext } from "../store/todoStore";

function TodoItems({ onDelete}) {
  const contextData = useContext(todoContext);
  const todoItems = contextData.items ?? [];
  return (
    <>
      <div className="items-container">
        {todoItems.map((todoItem) => {
          return <Todo item={todoItem.name} date={todoItem.date} key={todoItem.name} />;
        })}
      </div>
    </>
  );
}

export default TodoItems;
