import React, { useEffect } from "react";
import styles from "./Del.module.css";
import { BsUpload, BsTrash } from "react-icons/bs";
import NotFirst from "../../../hooks/NotFirst";

function Del({ list, setList, darkmode }) {
  NotFirst(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);
  return (
    <div className={darkmode ? styles.darkDel : styles.del}>
      {list.map((element) => {
        if (element.del === true) {
          return (
            <div className={styles.do} key={element.id}>
              <div className={element.check ? styles.checkName : styles.name}>
                {element.name}
              </div>
              <div className={styles.doMenu}>
                <div
                  className={styles.checkButton}
                  onClick={() => {
                    console.log(element);
                    setList(
                      list.map((element2) => {
                        if (element.id === element2.id) {
                          return { ...element2, del: false };
                        }
                        return element2;
                      })
                    );
                  }}
                >
                  <BsUpload />
                </div>
                <div
                  className={styles.delButton}
                  onClick={() => {
                    setList(
                      list.filter((element2) => {
                        return element2.id !== element.id;
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
      })}
    </div>
  );
}

export default Del;
