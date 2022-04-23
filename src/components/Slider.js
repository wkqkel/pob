import React from "react";
import styled from "styled-components";

// input창 min 1인데, min만 줬을때는 슬라이더가 0까지 그대로 작동함
// 어떻게 해결?
// 구글에 input range how to restrict
// 밑에 val값에 따라 랜지인풋이 볼록하고 또 그 아래 버튼이 있고 그 버튼 클릭시 이동
// 이때 아래 버튼 클릭시 값이 기본적으로 안맞는데 클릭시 보정값을 준만큼 이동하지만 화면에 보여주는 값은 25로함.
// 미려한 픽셀매칭 어렵... 기본적으로 안맞아야 정상인데 어떻게 시각보정했을까?...
// 인풋의 커스텀 어떻게?
// 계속 인풋창과 space between한 값이 미세하게 달랐다 인풋에 준 min값때문 이거때문에 이걸 일일히 맞춰줘야하나 많았음 그럼 너무 코드가 더러워질것같았음
// 또 밑에 1퍼센트면 끝이 아니고 조금 떨어져있는데, 주어진 gif에선 끝에 있음 0으로 해놓고 표시만 1로 하는 전략을 취함 ___________>이거때문에 복잡했는데  그 이후론 인터넷을 찾으면 나오는 것들이나 어떻게 구현은 가능하겠다생각함

//-webkit-slider-thumb
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
