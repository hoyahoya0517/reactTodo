import React, { useState } from "react";
import styles from "./Footer.module.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function Footer({ list, setList, dark }) {
  const [inputDo, setInputDo] = useState("");
  const handleInput = (e) => {
    setInputDo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputDo !== "") {
      setList((prev) => {
        return [
          ...prev,
          { id: Math.random(), name: inputDo, check: false, del: false },
        ];
      });
    }

    setInputDo("");
  };
  return (
    <div className={dark ? styles.darkFooter : styles.footer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input}>
          <input value={inputDo} maxLength="30" onChange={handleInput} />
        </div>
        <div className={styles.addButton} onClick={handleSubmit}>
          <BsFillArrowUpCircleFill
            size={30}
            style={{ margin: "8px 0px 0px 0px" }}
          />
        </div>
      </form>
    </div>
  );
}

export default Footer;
