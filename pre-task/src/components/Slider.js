import React from "react";
import styled from "styled-components";

const Slider = () => {
  const [curRange, setCurRange] = React.useState(50);
  const inputTag = React.useRef();
  const rangeArray = [0, 25, 50, 75, 100];
  return (
    <SliderContainer>
      <ResultBox>
        <span>{+curRange ? curRange : 1}</span> %
      </ResultBox>
      <InputBox curRange={curRange}>
        <input
          id="input"
          type="range"
          onChange={(e) => {
            setCurRange(e.target.value);
          }}
          ref={inputTag}
        />
        <div id="circlesBox">
          {rangeArray.map((e, i) => (
            <div className={`circle ${e <= curRange && "passed"}`}></div>
          ))}
        </div>
      </InputBox>
      <BtnBox>
        {rangeArray.map((e, i) => (
          <RangeBtn
            className="rangeBtn"
            key={`rangeBtn-${i}`}
            onClick={() => {
              inputTag.current.value = e;
              setCurRange(e);
            }}
            index={i}
          >
            {e ? e : 1}%
          </RangeBtn>
        ))}
      </BtnBox>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  height: 120px;
  width: 400px;
  padding: 10px;
  background-color: #ebebeb;
  font-weight: 500;
  color: #656565;
`;

const ResultBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px;
  border: 2px solid #cecece;
  border-radius: 4px;
  background-color: #f9f9f9;

  & > span {
    margin-right: 20px;
    color: black;
  }
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 5px 0px 10px 0px;

  #input {
    margin: 5px 0px;
    -webkit-appearance: none;

    width: 100%;
    height: 6px;

    border-radius: 12px;

    background: ${({ curRange }) =>
      `linear-gradient(to right, #10afaf 0%, #10afaf ${curRange}%, white ${curRange}%, white 100%)`};

    position: relative;
    z-index: 1;

    cursor: pointer;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;

      height: 20px;
      width: 20px;
      background: #10afaf;

      border: 4px white solid;
      border-radius: 50%;
    }
  }
  #circlesBox {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .circle {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
  }

  .passed {
    background: #10afaf;
  }
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RangeBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background-color: white;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    background-color: #10afaf;
  }
  position: relative;
  left: ${({ index }) => (index === 1 ? "-5px" : index === 3 ? "5px" : null)};
`;

export default Slider;
