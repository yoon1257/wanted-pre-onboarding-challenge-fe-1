import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import API from "../../api/api";
import { main } from "../../styles/theme";

const Auth = () => {
  const [change, setChange] = useState(false);
  const [signInValue, setSignInValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const emailValid = signInValue.email.includes("@");
  const passwordValid = signInValue.password.length >= 8;
  const signInValid = emailValid && passwordValid;
  const signUpValid = emailValid && passwordValid;

  const signInHandle = (e) => {
    const { value, name } = e.target;
    setSignInValue({ ...signInValue, [name]: value });
  };

  const signup = (e) => {
    e.preventDefault();
    fetch(`${API.SIGNUP}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signInValue.email,
        password: signInValue.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.access_token) {
          alert("회원가입 성공");
          setChange(false);
        } else {
          alert("회원가입 실패");
        }
      });
  };

  const signin = (e) => {
    e.preventDefault();
    fetch(`${API.SIGNIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signInValue.email,
        password: signInValue.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.access_token) {
          localStorage.setItem("TOKEN", data.access_token);
          alert("로그인 성공");
          navigate("/todo");
        } else {
          alert("로그인 실패");
        }
      });
  };

  return (
    <AuthContainer>
      <form className="boxContainer" onSubmit={change ? signup : signin}>
        <h3 className="title">{change ? "회원가입" : "로그인"}</h3>
        <input
          className="inputBox"
          name="email"
          type="email"
          onChange={signInHandle}
          placeholder="이메일"
        />
        <input
          className="inputBox"
          name="password"
          type="password"
          onChange={signInHandle}
          placeholder="비밀번호 (8자 이상)"
        />

        <button
          className="enrollBtn"
          disabled={change ? !signUpValid : !signInValid}
        >
          {change ? "회원가입" : "로그인"}
        </button>
        <button className="changeBtn" onClick={() => setChange(!change)}>
          {change ? "로그인" : "회원가입"} 하러가기
        </button>
      </form>
    </AuthContainer>
  );
};

export default Auth;

const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .boxContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 350px;
    height: 300px;
    padding: 10px;
    border: 1px solid ${main};
    border-radius: 10px;
  }
  .title {
    text-align: center;
  }
  .inputBox {
    border: 1px solid ${main};
    padding: 5px;
    border-radius: 5px;
  }
  .enrollBtn {
    width: 200px;
    height: 35px;
    background-color: ${main};
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    &:disabled {
      background-color: #fadcda;
    }
  }
  .changeBtn {
    font-size: 14px;
    border-radius: 5px;
    padding: 5px;
    background-color: ${main};
    color: white;
    border: none;
    cursor: pointer;
  }
`;
