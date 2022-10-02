import React from "react";
import style from "./Toggle.module.css";


const ToggleSwitch = ({ label = "" }) => {
  return (
    <div className={style.container}>
      <div className={style.toggle_switch}>
        <input type="checkbox" className={style.checkbox}
          name={label} id={label} />
        <label className={style.label} htmlFor={label}>
          <span className={style.inner} />
          <span className={style.switch} />
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;