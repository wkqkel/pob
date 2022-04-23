import React from "react";
import styled from "styled-components";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
// document.getElementById("email").validity.valid
// 박스 컨테이너 같은 이름을 잘 못짓겠다... 구분을 짓고싶은데 구분이 안됨..
// email 유효성 체크 input태그에 pattern이란게 있음 _ 이메일 정규표현식
//문자 @ 문자. @ 기호 뒤에 도메인 (문자는 다음 이상의 문자 다음에, 그리고 "."애프터 "." 당신은 A에서 Z까지 2 ~ 3 글자를 쓸 수 있습니다
//pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"

// 자잘한 디테일: pwd아이콘만 커서 모양 바뀌게

// 이메일을 체크하는 과정에서 아이콘에 스타일 주는 부분을 인라인 말고 아래 스타일드 컴포넌트에서 주려했는데 프롭스로 했을때 안먹힘 왜?
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
          <span id="alertTxt">올바른 이메일을 입력해주세요</span>
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
