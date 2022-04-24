import React from "react";
import styled from "styled-components";

const Toggle = () => {
  const [clickBasic, setIsBasic] = React.useState(true);

  return (
    <ToggleContainer>
      <ToggleCircleBox>
        <ToggleCircle clickBasic={clickBasic}></ToggleCircle>
      </ToggleCircleBox>
      <ToggleBtn
        onClick={() => {
          setIsBasic(true);
        }}
        clicked={clickBasic}
      >
        기본
      </ToggleBtn>
      <ToggleBtn
        onClick={() => {
          setIsBasic(false);
        }}
        clicked={!clickBasic}
      >
        상세
      </ToggleBtn>
    </ToggleContainer>
  );
};

const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  width: 300px;
  height: 45px;
  background-color: #ebebeb;
  border-radius: 50px;
`;

const ToggleCircleBox = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 4px;
`;

const ToggleCircle = styled.div`
  height: 100%;
  width: 50%;
  border-radius: 50px;
  background-color: white;
  transform: ${(props) =>
    props.clickBasic ? "translateX(0%) " : "translateX(100%)"};
  transition: transform 0.3s;
`;

const ToggleBtn = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  color: ${(props) => (props.clicked ? "black" : "#656565")};
  font-weight: 600;
  cursor: pointer;
`;

export default Toggle;
