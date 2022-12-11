import React, { useState } from "react";
import styled from "styled-components";
import API from "../../../api/api";
import { main } from "../../../styles/theme";

const TodoListItem = ({ id, todo, completed, getTodos }) => {
  const [update, setUpdate] = useState(false);
  const [updateTodoInput, setUpdateTodoInput] = useState(todo);
  const [updateCompleted, setUpdateCompleted] = useState(completed);

  const deleteTodo = () => {
    fetch(`${API.TODOS}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
      },
    }).then(() => getTodos());
  };

  const updateTodo = () => {
    fetch(`${API.TODOS}/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        todo: updateTodoInput,
        isCompleted: updateCompleted,
      }),
    })
      .then(() => getTodos())
      .then(() => setUpdate(false));
  };

  const updateCancel = () => {
    setUpdateTodoInput(todo);
    setUpdateCompleted(completed);
    setUpdate(false);
  };
  return (
    <>
      {update ? (
        <TodoListItemContainer>
          <div>
            <input
              type="checkbox"
              defaultChecked={updateCompleted}
              onChange={() => setUpdateCompleted(!updateCompleted)}
            />
            <input
              type="text"
              onChange={(e) => setUpdateTodoInput(e.target.value)}
              value={updateTodoInput}
              autoFocus
            />
          </div>
          <div>
            <button className="edit" onClick={updateTodo}>
              확인
            </button>
            <button className="edit" onClick={updateCancel}>
              취소
            </button>
          </div>
        </TodoListItemContainer>
      ) : (
        <TodoListItemContainer>
          <div>
            <input type="checkbox" checked={completed} readOnly />
            <span updateCompleted={updateCompleted}>{todo} </span>
          </div>
          <div>
            <button className="edit" onClick={() => setUpdate(true)}>
              수정
            </button>
            <button className="edit" onClick={deleteTodo}>
              삭제
            </button>
          </div>
        </TodoListItemContainer>
      )}
    </>
  );
};
const TodoListItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
  padding: 5px;
  width: 90%;
  .edit {
    padding: 5px;
    background-color: transparent;
    color: ${main};
    border: 1px solid ${main};
    cursor: pointer;
    &:hover {
      color: white;
      background-color: ${main};
    }
    &:active {
      box-shadow: inset -0.3rem -0.1rem 1.4rem #fbfbfb,
        inset 0.3rem 0.4rem 0.8rem #bec5d0;
      cursor: pointer;
    }
  }
`;
export default TodoListItem;
