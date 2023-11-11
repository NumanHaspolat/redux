import React from "react";
import { useDispatch } from "react-redux";

const TodoItem = ({ completed, text, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE_TODO", id: id });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", id: id });
  };

  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "5px",
  };

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        <span>
          <img
            src="https://w7.pngwing.com/pngs/983/597/png-transparent-hanoi-true-miscellaneous-angle-grass-thumbnail.png"
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src="https://png.pngtree.com/png-vector/20190724/ourmid/pngtree-false-free-png-png-image_1589434.jpg"
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
