import "./App.css";
import styled from "styled-components";
import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Slider from "./components/Slider";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <Background>
      <Toggle></Toggle>
      <Tab></Tab>
      <Slider></Slider>
      <Input></Input>
      <Dropdown></Dropdown>
    </Background>
  );
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & > * {
    margin: 10px;
  }
`;
export default App;
