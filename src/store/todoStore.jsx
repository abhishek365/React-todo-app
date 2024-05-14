import React, { Children, createContext, useReducer } from "react";

export const todoContext = createContext({
  todoItems: [],
  onSave: () => {},
  onDelete: () => {},
});

const todoReducer = (currentState, action) => {
  switch (action.type) {
    case "NEW_ITEM_ADDED":
      return [
        ...currentState,
        { name: action.payload.itemName, date: action.payload.itemDate },
      ];

    case "ITEM_DELETED":
      return currentState.filter((state) => {
        return action.payload.deleteItem !== state.name;
      });
    default:
      break;
  }
};

const TodoContextProvider = ({ children }) => {
  const [items, dispatch] = useReducer(todoReducer, []);

  const onSave = (itemName, itemDate) => {
    const todoAction = {
      type: "NEW_ITEM_ADDED",
      payload: {
        itemName,
        itemDate,
      },
    };

    dispatch(todoAction);
  };

  const onDelete = (deleteItem) => {
    const deleteAction = {
      type: "ITEM_DELETED",
      payload: {
        deleteItem,
      },
    };

    dispatch(deleteAction);
  };

  return (
    <todoContext.Provider
      value={{
        items,
        onSave,
        onDelete,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
