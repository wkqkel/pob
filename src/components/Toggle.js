import React from "react";
import styled from "styled-components";
// 처음에는 써클 태그를 따로 준게 아니라, 토글글자들이 있는 태그에 백그라운드를 주는 방식으로 접근했는데,
// 그렇게했을때 클릭할때 지워지고, 새로 생기는건데 애니메이션을 어떻게 줘야할지 모르겠어서 아예 백그라운드를 뺴줘서 앱솔루트 처리해줌.
// 0. styled component의 적절한 태그 이름이나 변수 이름을 못정하겠다 => 통일성을 주려고 toggle를 붙였는데, 비슷비슷해보이는 느낌을 받기도함
// 1. 애니메이션 어떻게 주지..? 처음에는 keyFrame을 생각했는데, transform으로 구현하니 코드가 더 짧아졌다.
// 2. css 깔끔하게 주는방법은? 뭔가 간단한 ui인 것 같은데, css가 주렁주렁 달려있어서 복잡해보임
// 3. position을 absolute주고 어떻게 상속받은 것보다 조금 작은 크기를 하는가? 박스를 하나 더씌움
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
