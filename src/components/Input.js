import React from "react";
import styled from "styled-components";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = () => {
  const [isPwdSecret, setIsPwdSecret] = React.useState(true);
  const [showAlert, setShowAlert] = React.useState(false);
  const [emailValid, setEmailValid] = React.useState(false);

  const emailCheck = (e) => {
    if (e.target.value !== "" && e.target.validity.valid) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <InputContainer>
      <InputBox>
        E-mail
        <div className="box">
          <input
            placeholder="E-mail"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$"
            onChange={(e) => {
              emailCheck(e);
            }}
            onBlur={() => {
              if (!emailValid) setShowAlert(true);
            }}
          />
          <RiCheckboxCircleFill
            className="checkIcon"
            style={{ color: emailValid && "#10afaf" }}
          />
        </div>
        {showAlert && !emailValid && (
          <span id="alertTxt">Invalid e-mail address</span>
        )}
      </InputBox>

      <InputBox>
        Password
        <div className="box">
          <input
            placeholder="Password"
            type={isPwdSecret ? "password" : "text"}
          />
          {isPwdSecret ? (
            <AiFillEyeInvisible
              className="checkIcon pwdIcon"
              onClick={() => {
                setIsPwdSecret(!isPwdSecret);
              }}
            />
          ) : (
            <AiFillEye
              className="checkIcon pwdIcon"
              onClick={() => {
                setIsPwdSecret(!isPwdSecret);
              }}
              style={{ color: "#10afaf" }}
            />
          )}
        </div>
      </InputBox>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;
  width: 400px;
  padding: 14px;
  background-color: #ebebeb;
  font-size: 12px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  .box {
    position: relative;
  }

  & > .box > input {
    width: 100%;
    height: 40px;
    padding: 5px;
  }
  .checkIcon {
    position: absolute;
    color: #ebebeb;
    font-size: 20px;
    right: 6px;
    top: 10px;
  }

  .pwdIcon {
    cursor: pointer;
  }

  #alertTxt {
    color: red;
  }
`;

export default Input;
