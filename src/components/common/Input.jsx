import React from "react";
import PropTypes from "prop-types";

const Input = ({
  id,
  name,
  type = "text",
  value,
  placeholder,
  className = "",
  onChange,
  onBlur,
  autoComplete,
  readOnly,
  autoFocus,
  labelText,
  ...props
}) => {
  return (
    <div className="w-[min(24rem,85vw)]">
      <label
        htmlFor={id}
        className="relative block rounded-md border border-secondary shadow-sm focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete}
          readOnly={readOnly}
          autoFocus={autoFocus}
          className="peer border-none bg-transparent px-4 py-2 placeholder-transparent focus:placeholder-secondary focus:border-transparent focus:outline-none focus:ring-0"
          {...props}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-base text-secondary  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-primary">
          {labelText}
        </span>
      </label>
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  autoComplete: PropTypes.string,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  labelText: PropTypes.string
};

export default Input;
