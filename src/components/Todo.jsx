import { useContext } from "react";
import { todoContext } from "../store/todoStore";

const Todo = ({item, date}) => {
  const contextData = useContext(todoContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{item}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button className="btn btn-danger kg-button kg-button" onClick={() => contextData.onDelete(item)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
