import React from "react";
import styled from "styled-components";

const Tab = () => {
  const tabList = ["감자", "고구마", "카레라이스"];
  const [clickedTab, setClickedTab] = React.useState(0);
  return (
    <TabContainer>
      {tabList.map((e, i) => (
        <TabBtn
          key={`tabList-${i}`}
          i={i}
          onClick={() => {
            setClickedTab(i);
          }}
          clickedTab={clickedTab}
        >
          {e}
        </TabBtn>
      ))}
      <TabBox>
        <TabBtm clickedTab={clickedTab}></TabBtm>
      </TabBox>
    </TabContainer>
  );
};

const TabContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 45px;

  padding: 4px;
  background-color: #ebebeb;

  font-weight: 500;
  font-size: 14px;
`;

const TabBtn = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 38px;

  color: ${({ clickedTab, i }) => (clickedTab === i ? "black" : "#656565")};
  cursor: pointer;
`;

const TabBox = styled.div`
  position: absolute;

  width: 100%;
  height: 38px;

  padding: 0px 4px;
  border-bottom: 2px solid #cecece;
`;

const TabBtm = styled.div`
  position: absolute;
  width: 97px;
  height: 38px;
  border-bottom: #10afaf 2px solid;
  transform: ${(props) =>
    props.clickedTab === 1
      ? "translateX(100%) "
      : props.clickedTab === 2
      ? "translateX(200%)"
      : null};
  transition: transform 0.3s;
`;

export default Tab;
