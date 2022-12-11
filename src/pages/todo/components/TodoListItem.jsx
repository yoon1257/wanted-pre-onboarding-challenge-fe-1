import React, { useState } from "react";
import styled from "styled-components";
import API from "../../../api/api";
import { main } from "../../../styles/theme";

const TodoListItem = ({ id, todo, completed, getTodos }) => {
  const [update, setUpdate] = useState(false);
  const [TodoInput, setTodoInput] = useState(todo);
  const [isCompleted, setIsCompleted] = useState(completed);

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
        todo: TodoInput,
        isCompleted: isCompleted,
      }),
    })
      .then(() => getTodos())
      .then(() => setUpdate(false));
  };

  const updateCancel = () => {
    setTodoInput(todo);
    setIsCompleted(completed);
    setUpdate(false);
  };
  return (
    <>
      {update ? (
        <TodoListItemContainer>
          <div className={isCompleted ? "completed " : ""}>
            <input
              type="checkbox"
              Checked={isCompleted}
              onChange={() => setIsCompleted(true)}
            />
            <input
              className="textInput"
              type="text"
              onChange={(e) => setTodoInput(e.target.value)}
              value={TodoInput}
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
            <span isCompleted={isCompleted}>{todo} </span>
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

  .completed {
    text-decoration: line-through;
    opacity: 0.5;
  }
  .textInput {
    width: 300px;
    padding: 5px;
  }
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
