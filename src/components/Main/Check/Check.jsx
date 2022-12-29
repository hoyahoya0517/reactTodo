import React, { useEffect } from "react";
import styles from "./Check.module.css";
import { BsCheckSquareFill, BsCheckSquare, BsTrash } from "react-icons/bs";
import NotFirst from "../../../hooks/NotFirst";

function Check({ list, setList, darkmode }) {
  NotFirst(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);
  return (
    <div className={darkmode ? styles.darkCheck : styles.check}>
      {list.map((element) => {
        if (element.del !== true) {
          if (element.check === true) {
            return (
              <div className={styles.do} key={element.id}>
                <div className={styles.checkName}>{element.name}</div>
                <div className={styles.doMenu}>
                  <div
                    className={styles.checkButton}
                    onClick={() => {
                      console.log(element);
                      setList(
                        list.map((element2) => {
                          if (element.id === element2.id) {
                            if (element.check === false) {
                              return { ...element, check: true };
                            } else {
                              return { ...element, check: false };
                            }
                          }
                          return element2;
                        })
                      );
                    }}
                  >
                    {element.check ? <BsCheckSquareFill /> : <BsCheckSquare />}
                  </div>
                  <div
                    className={styles.delButton}
                    onClick={() => {
                      console.log(element);
                      setList(
                        list.map((element2) => {
                          if (element.id === element2.id) {
                            return { ...element2, del: true };
                          }
                          return element2;
                        })
                      );
                    }}
                  >
                    <BsTrash style={{ margin: "4px 0px 0px 0px" }} />
                  </div>
                </div>
              </div>
            );
          }
        }
      })}
    </div>
  );
}

export default Check;
