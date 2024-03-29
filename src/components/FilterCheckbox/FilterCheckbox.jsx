import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ checked, onChange }) {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input type="checkbox" className="checkbox__input" checked={checked} onChange={onChange} />
        <span className="checkbox__span" />
      </label>
      <p className="checkbox_text">Короткометражки</p>
    </div>
  )
}

export default FilterCheckbox;