import React from "react";
import PropTypes from 'prop-types';

const Checkbox = ({ label, onChange, isChecked, id }) => {
  return (
    <label>
      <input
        type="checkbox"
        onChange={(e) => onChange(e.target.checked)}
        checked={isChecked}
        id={id}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;

Checkbox.propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func,
    isChecked: PropTypes.bool,
    id: PropTypes.number
}
