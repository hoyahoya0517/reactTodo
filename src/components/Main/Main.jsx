import React, { useEffect, useState } from "react";
import styles from "./Main.module.css";
import { FcFlashOn, FcFolder, FcOk, FcEmptyTrash } from "react-icons/fc";
import Home from "./Home/Home";
import Check from "./Check/Check";
import Del from "./Del/Del";

function Main({ list, setList, dark, setDark }) {
  const [homeMode, setHomeMode] = useState(true);
  const [checkMode, setCheckMode] = useState(false);
  const [delMode, setDelMode] = useState(false);
  const handleHome = () => {
    setHomeMode(true);
    setCheckMode(false);
    setDelMode(false);
  };
  const handleCheck = () => {
    setHomeMode(false);
    setCheckMode(true);
    setDelMode(false);
  };
  const handleDel = () => {
    setHomeMode(false);
    setCheckMode(false);
    setDelMode(true);
  };
  const handleDark = () => {
    console.log(dark);
    setDark((prev) => !prev);
  };

  return (
    <div className={styles.main}>
      <div className={dark ? styles.darkTop : styles.top}>
        <div className={styles.darkmodeButton} onClick={handleDark}>
          <FcFlashOn size={25} />
        </div>
        <div className={styles.filter}>
          <div className={styles.home} onClick={handleHome}>
            <FcFolder size={25} />
          </div>
          <div className={styles.check} onClick={handleCheck}>
            <FcOk size={25} />
          </div>
          <div className={styles.delButton} onClick={handleDel}>
            <FcEmptyTrash size={25} />
          </div>
        </div>
      </div>
      {homeMode && <Home list={list} setList={setList} darkmode={dark} />}
      {checkMode && <Check list={list} setList={setList} darkmode={dark} />}
      {delMode && <Del list={list} setList={setList} darkmode={dark} />}
    </div>
  );
}

export default Main;
