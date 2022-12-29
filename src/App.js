import { useEffect } from "react";
import "./App.css";
import Todo from "./Todo";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

  window.addEventListener("resize", () => setScreenSize());
  useEffect(() => {
    setScreenSize();
  }); //처음 마운트될때 값을 계산하도록 함수를 호출한다
  return (
    <>
      <Todo />
    </>
  );
}

export default App;
