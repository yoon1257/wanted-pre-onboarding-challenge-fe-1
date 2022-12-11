import React, { useState } from "react";
import styled from "styled-components";
import { BsFillMoonStarsFill } from "react-icons/bs";
import TodoListItem from "./components/TodoListItem";
import { main } from "../../styles/theme";
import API from "../../api/api";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const getTodos = () => {
    fetch(`${API.TODOS}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data.reverse());
      });
  };
  const addTodo = (e) => {
    e.preventDefault();
    fetch(`${API.TODOS}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("TOKEN")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: task }),
    }).then(() => {
      getTodos();
      setTask("");
    });
  };
  return (
    <TodoContainer>
      <div className="title-cotainer">
        <BsFillMoonStarsFill className="icon" />
        <h1>Todo List</h1>
      </div>
      <form className="todo-insert" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="할일을 입력해주세요"
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
      <div className="todo-list">
        {todoList.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              id={item.id}
              todo={item.todo}
              completed={item.isCompleted}
              getTodos={getTodos}
            />
          );
        })}
      </div>
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  width: 50%;
  height: 600px;
  margin: 50px auto;
  border-radius: 5px;
  border: 1px solid ${main};
  .title-cotainer {
    display: flex;
    justify-content: center;
    .icon {
      font-size: 40px;
      color: ${main};
      margin-top: 30px;
    }
  }
  h1 {
    font-size: 40px;
    color: ${main};
    font-weight: 800;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .todo-insert {
    display: flex;
    justify-content: center;
    input {
      width: 50%;
      height: 40px;
      padding-left: 10px;
      border: 1px solid ${main};
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: ${main};
      }
    }
    button {
      width: 30px;
      background-color: transparent;
      border: 1px solid ${main};
      color: ${main};
      cursor: pointer;
      &:hover {
        color: #ffffff;
        background-color: ${main};
      }
      &:active {
        box-shadow: inset -0.3rem -0.1rem 1.4rem #fbfbfb,
          inset 0.3rem 0.4rem 0.8rem #bec5d0;
        cursor: pointer;
      }
    }
  }
  .todo-list {
    width: 80%;
    height: 400px;
    margin: 30px auto;
    border-radius: 5px;
    border: 1px solid ${main};
    overflow: auto;
  }
`;
export default Todo;
