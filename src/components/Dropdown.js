import React from "react";
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";

// dataList나 select에 option을 쓰려다 css를 수정하기 더 힘들것같아 div로 만듬-> div외에 따른걸 못쓰겠음
const Dropdown = () => {
  const itemList = [
    "All Symbols",
    "BTCUSD.PERP",
    "ETHUSD.PERP",
    "BCHUSD.PERP",
    "LTCUSD.PERP",
    "BANDUSD.PERP",
    "XRPUSD.PERP",
  ];

  const [isDrop, setIsDrop] = React.useState(false);
  const [clickedMenu, setClickedMenu] = React.useState("All Symbols");
  const [curList, setCurList] = React.useState(itemList);

  const filter = (e) => {
    setCurList(
      itemList.filter((el, i) => i === 0 || el.includes(e.target.value))
    );
  };

  return (
    <DropdownContainer>
      <div
        id="select"
        onClick={() => {
          setIsDrop(!isDrop);
        }}
      >
        {clickedMenu}
        <IoMdArrowDropdown></IoMdArrowDropdown>
      </div>
      <div id="dropBox" style={{ display: isDrop ? "block" : "none" }}>
        <SearchBox>
          <input
            id="search"
            type="text"
            autoComplete="off"
            onKeyUp={filter}
            placeholder="Search Symbol"
          />
          <BiSearchAlt2 id="searchIcon"></BiSearchAlt2>
        </SearchBox>
        <ItemBox>
          {curList.map((e, i) => (
            <div
              key={`item-${i}`}
              className="items"
              id={`item-${e}`}
              onClick={() => {
                setClickedMenu(e);
                setIsDrop(!isDrop);
              }}
            >
              {e}
            </div>
          ))}
        </ItemBox>
      </div>
    </DropdownContainer>
  );
};

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 320px;
  width: 200px;

  padding: 10px;

  background-color: #ebebeb;

  font-size: 12px;
  color: rgba(0, 0, 0, 0.7);

  #dropBox {
    margin-top: 5px;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.1);
  }

  #select {
    border: 1px solid grey;
    border-radius: 3px;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
  }
`;
const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  #search {
    width: 100%;
    padding: 4px 4px 4px 20px;
  }

  #searchIcon {
    position: absolute;
    left: 4px;
    margin-top: 2px;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.4);
  }
`;
const ItemBox = styled.div`
  border: 1px solid grey;
  border-top: none;
  background-color: white;

  .items {
    padding: 8px 20px;
    cursor: pointer;
    &:hover {
      background-color: #ebebeb;
    }
  }
`;
export default Dropdown;
