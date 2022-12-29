import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import styles from "./Todo.module.css";

function Todo() {
  const [list, setList] = useState([]);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("todoList")) {
      setList(JSON.parse(localStorage.getItem("todoList")));
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <Main list={list} setList={setList} dark={dark} setDark={setDark} />
      <Footer list={list} setList={setList} dark={dark} />
    </div>
  );
}

export default Todo;

const todoList = [
  { name: "똥싸기", check: false, del: false },
  { name: "밥먹기", check: false, del: false },
];
